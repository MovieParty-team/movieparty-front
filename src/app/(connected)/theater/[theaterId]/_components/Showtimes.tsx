"use client";

import useGetShowtimes from "@/api/theater/hooks/useGetShowtimes";
import { useMemo } from "react";
import { ShowtimesData } from "@/types/showtimesData.types";
import CustomLoading from "@/components/CustomLoading";
import Error from "@/components/Error";
import ShowtimeElement from "./ShowtimeElement";

interface Props {
  theaterId: string;
  day: number | undefined;
}

export default function Showtimes(props: Props) {
  const { theaterId, day } = props;

  const { data, isSuccess, isLoading } = useGetShowtimes(theaterId, day);

  const moviesWithShowtimes = useMemo((): ShowtimesData[] => {
    if (isSuccess && data) {
      return data.provided;
    }
    return [];
  }, [data, isSuccess]);

  if (isLoading) {
    return <CustomLoading />;
  } else if (moviesWithShowtimes.length === 0) {
    return <Error message="Nous n'avons pas pu trouver de séances" />;
  }
  return (
    <div className="flex flex-col gap-5 w-full items-center text-center md:flex-row md:gap-10 md:flex-wrap">
      {moviesWithShowtimes.map((movieWithShowtime: ShowtimesData) => (
        <ShowtimeElement
          key={movieWithShowtime.movie.title}
          movieWithShowtime={movieWithShowtime}
        />
      ))}
    </div>
  );
}
