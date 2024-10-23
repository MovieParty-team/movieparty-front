import { useMutation, useQueryClient } from "@tanstack/react-query";
import  { IamServiceKey } from "../../iam/iam.service";
import AuthService from "../auth.service";

// login hook
export const useLogout = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async () => await AuthService.logout(),
    onSettled: async () => {
      await client.invalidateQueries({
        queryKey: [IamServiceKey, "geMyself"],
      });
    },
  });
};
