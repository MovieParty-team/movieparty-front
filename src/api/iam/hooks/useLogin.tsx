import { useMutation } from "@tanstack/react-query";
import IamService, { IamServiceKey } from "../iam.service";

// login hook
export const useLogin = () => {
  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) =>
      await IamService.login({
        email,
        password,
      }),
    mutationKey: [IamServiceKey, "login"],
  });
};
