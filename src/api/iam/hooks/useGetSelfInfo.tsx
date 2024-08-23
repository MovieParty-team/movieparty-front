import { useQuery } from "@tanstack/react-query";

import IamService, { IamServiceKey } from "../iam.service";

export default function useGetSelfInfo() {
  return useQuery({
    queryFn: async () => await IamService.geMyself(),
    queryKey: [IamServiceKey],
  });
}
