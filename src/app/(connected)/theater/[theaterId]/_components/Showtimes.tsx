"use client";

import useGetShowtimes from "@/api/theater/hooks/useGetShowtimes";
import { useMemo } from "react";
import Image from "next/image";
import { ShowtimesData } from "@/types/showtimesData.types";
import CustomLoading from "@/components/CustomLoading";

interface Props {
  theaterId: string;
}

export default function Showtimes(props: Props) {
  const { data, isSuccess } = useGetShowtimes(props.theaterId, "0");

  const showtimes = useMemo((): ShowtimesData[] => {
    if (isSuccess && data) {
      return data.provided;
    }
    return [];
  }, [data, isSuccess]);

  if (showtimes.length === 0) {
    return <CustomLoading />;
  }
  return (
    <div>
      {showtimes?.map((showtime) => {
        return (
          <div key={showtime.movie.id}>
            <p>{showtime.movie.title}</p>
            <Image
              src={showtime.movie.poster.url}
              alt={showtime.movie.title}
              width={200}
              height={300}
            />
          </div>
        );
      })}
    </div>
  );
}
