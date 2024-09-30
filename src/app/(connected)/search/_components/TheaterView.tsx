import useSearchTheater from "@/api/theater/hooks/useSearchTheater";
import CustomLoading from "@/components/CustomLoading";
import {
  ExternalApiData,
  InternalApiData,
} from "@/types/theaterSearchData.types";
import { useMemo } from "react";
import Theater from "./Theater";

interface Props {
  theater: string;
}

interface TheaterData {
  name: string;
  address: string;
  city: string;
  thumbnail: string;
}

export default function TheaterView(props: Props) {
  const { theater } = props;

  const { data, refetch } = useSearchTheater({
    input: {
      name: theater,
    },
    enabled: theater.length > 0,
  });

  useMemo(() => {
    if (theater) {
      refetch();
    }
  }, [refetch, theater]);

  const theaterData = useMemo<TheaterData[] | undefined>(() => {
    if (data && data.provided && data.provided.length > 0) {
      const { provided } = data;
      if ("data" in provided[0]) {
        // from External Api
        const parse = provided as ExternalApiData[];
        const theaterData = parse.map((item: ExternalApiData) => {
          return {
            name: item.label,
            address: item.data.address,
            city: item.data.city,
            thumbnail: item.data.thumbnail,
          };
        });
        return theaterData;
      } else {
        // from Internal Api
        const parse = provided as InternalApiData[];
        return parse.map((item: InternalApiData) => {
          return {
            name: item.name,
            address: item.address,
            city: item.city,
            thumbnail: item.thumbnail,
          };
        });
      }
    }
  }, [data]);

  if (!theaterData) {
    return (
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <CustomLoading />
      </div>
    );
  } else {
    return (
      <div className="p-5 flex flex-row gap-5 flex-wrap items-center md:px-60 md:gap-20">
        {theaterData.map((item, index) => {
          return <Theater key={index} {...item} />;
        })}
      </div>
    );
  }
}
