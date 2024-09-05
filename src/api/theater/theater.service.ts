import { StandardResponse } from "@/types/ApiResponse.type";
import API from "../Api";
import { SearchTheaterInput } from "./theater.model";
import {
  ExternalApiData,
  InternalApiData,
} from "@/types/theaterSearchData.types";
import { Axios, AxiosResponse } from "axios";

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
}
