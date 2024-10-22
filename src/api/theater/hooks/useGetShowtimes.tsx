import { useQuery } from "@tanstack/react-query";

import TheaterService, { TheaterServiceKey } from "../theater.service";

export default function useGetShowtimes(id: string, day: string) {
  return useQuery({
    queryFn: async () => await TheaterService.getShowtimes({ id, day }),
    queryKey: [TheaterServiceKey, "getShowtimes"],
  });
}
