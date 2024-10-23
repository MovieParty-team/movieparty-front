import { useQuery } from "@tanstack/react-query";
import TheaterService, { TheaterServiceKey } from "../theater.service";

export default function useGetFavStatus(id: string) {
    return useQuery({
        queryFn: async () => await TheaterService.getFavStatus({ id }),
        queryKey: [TheaterServiceKey, "getFavStatus"],
    });
}