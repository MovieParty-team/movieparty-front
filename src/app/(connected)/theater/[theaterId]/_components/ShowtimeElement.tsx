import Image from "next/image";
import Select from "@/components/Select";
import { ShowtimesData } from "@/types/showtimesData.types";
import Button from "@/components/Button";
import { useCallback, useMemo, useState } from "react";
import useCreateGroup from "@/api/group/hooks/useCreateGroup";
import { useRouter } from "next/navigation";

interface Props {
  movieWithShowtime: ShowtimesData;
  theaterId: string;
}

export default function ShowtimeElement(props: Props) {
  const { movieWithShowtime } = props;

  const { push } = useRouter();

  const [showTimeDate, setShowTimeDate] = useState<string>("");

  const { mutate, data } = useCreateGroup({
    theaterId: props.theaterId,
    movieId: movieWithShowtime.movie.id,
    showtimeDate: showTimeDate,
  });

  const changeShowTimeDate = useCallback((date: string) => {
    console.log(date);
    setShowTimeDate(date);
  }, []);

  useMemo(() => {
    if (data) {
      push(`/group/${data.provided.id}`);
    }
  }, [data, push]);

  return (
    <div className="flex flex-col gap-2 w-full h-auto items-center md:w-[15%]">
      <Image
        src={movieWithShowtime.movie.poster.url}
        alt={movieWithShowtime.movie.title}
        className="object-cover md:w-full md:h-[100px] lg:h-[250px] xl:h-[380px]"
        width={200}
        height={300}
      />
      <h2 className="truncate ...">{movieWithShowtime.movie.title}</h2>
      <Select
        onChange={(value: string) => {
          console.log(value);
          changeShowTimeDate(value);
        }}
        options={movieWithShowtime.showtimes.multiple.map((showtime) => {
          return {
            value: showtime.startsAt,
            label: (
              <span>
                {new Date(showtime.startsAt).toLocaleString()}{" "}
                {showtime.diffusionVersion}
              </span>
            ),
          };
        })}
      />
      <Button type="primary" onClick={() => mutate()}>
        Créer un groupe
      </Button>
    </div>
  );
}
