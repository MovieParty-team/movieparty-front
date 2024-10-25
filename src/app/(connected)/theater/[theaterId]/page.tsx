"use client";

import useGetTheater from "@/api/theater/hooks/useGetTheater";
import { useCallback, useMemo, useState } from "react";
import Showtimes from "./_components/Showtimes";
import { InternalApiData } from "@/types/theaterSearchData.types";
import CustomLoading from "@/components/CustomLoading";
import Theater from "./_components/Theater";
import { notFound } from "next/navigation";
import dayjs from "dayjs";
import DatePicker from "@/components/DatePicker";

interface Props {
  params: {
    theaterId: string;
  };
}

export default function TheaterPage(props: Props) {
  const { data, isSuccess, isLoading, isError } = useGetTheater(
    props.params.theaterId
  );

  const [day, setDay] = useState<number | undefined>(0);

  const theater = useMemo((): InternalApiData | undefined => {
    if (isSuccess && data) {
      return data.provided;
    }
  }, [data, isSuccess]);

  /**
   * Changes the day for the query.
   * We have a dayjs date that we need to match the query (from 0 (today) to 7)
   * @param date the date in dayjs
   */
  const changeDay = useCallback((date: dayjs.Dayjs) => {
    if (date.day() === dayjs().day()) {
      setDay(0); // oddly, today and tomorrow diff gives 0
    } else {
      setDay(() => -1 * dayjs().diff(date, "day") + 1);
    }
  }, []);

  if (isLoading) {
    return <CustomLoading />;
  } else if (!theater || isError) {
    notFound();
  }

  return (
    <main className="flex flex-col md:flex-row pt-10">
      <Theater theater={theater} />
      <section className="flex flex-col gap-5 items-center md:basis-3/4">
        <DatePicker
          defaultValue={dayjs()}
          minDate={dayjs()}
          maxDate={dayjs().add(1, "week")}
          onChange={(date) => changeDay(date ?? dayjs())}
        />
        <Showtimes theaterId={props.params.theaterId} day={day} />
      </section>
    </main>
  );
}
