import { useQuery } from "@tanstack/react-query";

import TheaterService, { TheaterServiceKey } from "../theater.service";

export default function useGetShowtimes(id: string, day: number = 0) {
  return useQuery({
    queryFn: async () => await TheaterService.getShowtimes({ id, day }),
    queryKey: [TheaterServiceKey, "getShowtimes", day],
  });
}
