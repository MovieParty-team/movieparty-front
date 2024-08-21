import { useMutation } from "@tanstack/react-query";
import IamService, { IamServiceKey } from "../iam.service";

// login hook
export const useLogout = () => {
  return useMutation({
    mutationFn: async () => await IamService.logout(),
    mutationKey: [IamServiceKey, "login"],
  });
};
