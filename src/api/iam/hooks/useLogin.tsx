import { useMutation } from "@tanstack/react-query";
import IamService, { IamServiceKey } from "../iam.service";
import { LoginInput } from "../iam.model";

// login hook
export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email, password }: LoginInput) =>
      await IamService.login({
        email,
        password,
      }),
    mutationKey: [IamServiceKey, "login"],
  });
};
