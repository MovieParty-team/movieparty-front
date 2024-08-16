import { useMutation } from "@tanstack/react-query";
import IamService, { IamServiceKey } from "../iam.service";

// login hook
export const useLogin = () => {
  return useMutation({
    mutationFn: async ({
      email,
      username,
      password,
    }: {
      email: string;
      username: string;
      password: string;
    }) =>
      await IamService.register({
        email,
        username,
        password,
      }),
    mutationKey: [IamServiceKey, "login"],
  });
};
