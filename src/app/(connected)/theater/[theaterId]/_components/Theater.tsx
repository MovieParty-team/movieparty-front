"use client";

import { useMemo } from "react";
import { InternalApiData } from "@/types/theaterSearchData.types";
import Image from "next/image";
import TheaterImage from "@/assets/theaterImage.jpg";
import useGetFavStatus from "@/api/theater/hooks/useGetFavStatus";
import useToggleFav from "@/api/theater/hooks/useToggleFav";
import GreyStart from "@/assets/greyStar.svg";
import Star from "@/assets/star.svg";

interface Props {
  theater: InternalApiData;
}

export default function Theater(props: Props) {
  const { theater } = props;

  const { data, isSuccess } = useGetFavStatus(theater.provider_id);

  const { mutate } = useToggleFav(theater.provider_id);

  const favoriteStatus = useMemo(() => {
    if (isSuccess && data) {
      return data.provided;
    }
  }, [data, isSuccess]);

  return (
    <section className="text-center flex flex-col items-center gap-2 md:self-stretch md:basis-1/4">
      <h1 className="text-3xl font-bold text-center">{theater.name}</h1>
      <Image
        src={theater.thumbnail ?? TheaterImage}
        className="w-[50%] h-auto pt-5"
        alt={theater.name}
        width={100}
        height={100}
        unoptimized
      />
      <h2>{theater.address}</h2>
      <h3>{theater.city}</h3>
      <button onClick={() => mutate()}>
        {favoriteStatus ? (
          <Image src={Star} alt="star" width={50} height={50} />
        ) : (
          <Image src={GreyStart} alt="star" width={50} height={50} />
        )}
      </button>
    </section>
  );
}
