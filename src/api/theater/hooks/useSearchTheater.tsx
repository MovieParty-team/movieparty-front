import { useQuery } from "@tanstack/react-query";
import TheaterService from "../theater.service";
import { SearchTheaterInput } from "../theater.model";

interface Props {
  input: SearchTheaterInput;
  signal?: AbortSignal;
  enabled: boolean;
}

export default function useSearchTheater(props: Props) {
  return useQuery({
    queryFn: async () =>
      await TheaterService.searchTheater({
        input: props.input,
        signal: props.signal,
      }),
    queryKey: [TheaterService, props.input],
    enabled: props.enabled,
  });
}
