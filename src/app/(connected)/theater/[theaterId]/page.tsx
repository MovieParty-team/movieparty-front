"use client";

import useGetTheater from "@/api/theater/hooks/useGetTheater";
import { useMemo } from "react";
import Showtimes from "./_components/Showtimes";
import { InternalApiData } from "@/types/theaterSearchData.types";
import CustomLoading from "@/components/CustomLoading";
import Image from "next/image";

interface Props {
  params: {
    theaterId: string;
  };
}

export default function TheaterPage(props: Props) {
  const { data, isSuccess } = useGetTheater(props.params.theaterId);

  const theater = useMemo((): InternalApiData | undefined => {
    if (isSuccess && data) {
      console.log(data);
      return data.provided;
    }
  }, [data, isSuccess]);

  if (!theater) {
    return <CustomLoading />;
  }

  return (
    <main>
      <button>Favori</button>
      <h1>{theater.name}</h1>
      <h2>{theater.address}</h2>
      <h3>{theater.city}</h3>

      <Showtimes theaterId={props.params.theaterId} />
    </main>
  );
}
