import Image from "next/image";
import Select from "@/components/Select";
import { ShowtimesData } from "@/types/showtimesData.types";

interface Props {
  movieWithShowtime: ShowtimesData;
}

export default function ShowtimeElement(props: Props) {
  const { movieWithShowtime } = props;

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
        options={movieWithShowtime.showtimes.multiple.map((showtime) => {
          return {
            value: showtime.internalId,
            label: (
              <span>
                {new Date(showtime.startsAt).toLocaleString()}{" "}
                {showtime.diffusionVersion}
              </span>
            ),
          };
        })}
      />
    </div>
  );
}
