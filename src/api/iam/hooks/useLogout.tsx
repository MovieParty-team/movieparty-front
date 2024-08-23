import { useMutation, useQueryClient } from "@tanstack/react-query";
import IamService, { IamServiceKey } from "../iam.service";

// login hook
export const useLogout = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async () => await IamService.logout(),
    onSettled: async () => {
      await client.invalidateQueries({
        queryKey: [IamServiceKey],
      });
    },
  });
};
