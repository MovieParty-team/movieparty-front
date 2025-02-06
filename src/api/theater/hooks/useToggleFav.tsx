import { useMutation, useQueryClient } from "@tanstack/react-query";
import TheaterService, { TheaterServiceKey } from "../theater.service";

export default function useToggleFav(id: string) {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async () => await TheaterService.toggleFav({ id }),
    onSuccess: async () => {
      await client.invalidateQueries({
        queryKey: [TheaterServiceKey, "getFavStatus"],
      });
    },
  });
}
