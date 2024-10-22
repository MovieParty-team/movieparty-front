import { StandardResponse } from "@/types/ApiResponse.type";
import API from "../Api";
import { SearchTheaterInput } from "./theater.model";
import {
  ExternalApiData,
  InternalApiData,
} from "@/types/theaterSearchData.types";
import { AxiosResponse } from "axios";
import { ShowtimesData } from "@/types/showtimesData.types";

export const TheaterServiceKey: string = "TheaterService";
export default class TheaterService {
  static searchTheater = ({
    input,
    signal,
  }: {
    input: SearchTheaterInput;
    signal?: AbortSignal;
  }): Promise<StandardResponse<ExternalApiData[] | InternalApiData[]>> => {
    const response = API.get(`/theater/search`, {
      params: input,
      signal,
    })
      .then(
        (
          res: AxiosResponse<
            StandardResponse<ExternalApiData[] | InternalApiData[]>
          >
        ) => res.data
      )
      .catch((err) => {
        throw err;
      });

    return response;
  };

  static getTheater = ({
    id,
    signal,
  }: {
    id: string;
    signal?: AbortSignal;
  }): Promise<StandardResponse<InternalApiData>> => {
    const response = API.get(`/theater/data/${id}`, {
      signal,
    })
      .then((res: AxiosResponse<StandardResponse<InternalApiData>>) => res.data)
      .catch((err) => {
        throw err;
      });

    return response;
  };

  static getShowtimes = ({
    id,
    day,
    signal,
  }: {
    id: string;
    day: string;
    signal?: AbortSignal;
  }): Promise<StandardResponse<ShowtimesData[]>> => {
    const response = API.get(`/theater/showtimes/${id}/${day}`, {
      signal,
    })
      .then((res: AxiosResponse<StandardResponse<any>>) => res.data)
      .catch((err) => {
        throw err;
      });

    console.log(response);
    return response;
  };
}
