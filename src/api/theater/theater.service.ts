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
    day: number;
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

  static getFavStatus({
    id,
    signal,
  }: {
    id: string;
    signal?: AbortSignal;
  }): Promise<StandardResponse<boolean>> {
    const response = API.get(`/theater/favorite/${id}`, { signal })
      .then((res: AxiosResponse<StandardResponse<boolean>>) => res.data)
      .catch((err) => {
        throw err;
      });

    return response;
  }

  static toggleFav({
    id,
    signal,
  }: {
    id: string;
    signal?: AbortSignal;
  }): Promise<StandardResponse<null>> {
    const response = API.put(`/theater/favorite/${id}`)
      .then((res: AxiosResponse<StandardResponse<null>>) => res.data)
      .catch((err) => {
        throw err;
      });

    return response;
  }
}
