import { useQuery } from "@tanstack/react-query";

import TheaterService, { TheaterServiceKey } from "../theater.service";

export default function useGetTheater(id: string) {
  return useQuery({
    queryFn: async () => await TheaterService.getTheater({ id }),
    queryKey: [TheaterServiceKey, "getTheater"],
  });
}
