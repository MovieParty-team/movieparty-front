import { useQuery } from "@tanstack/react-query";

import IamService, { IamServiceKey } from "../iam.service";

export default function useGetUserInfo() {
  return useQuery({
    queryFn: async () => await IamService.geUser(localStorage.getItem("uuid") as string),
    queryKey: [IamServiceKey, "user"],
  });
}
