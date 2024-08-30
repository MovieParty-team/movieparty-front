import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IamServiceKey } from "../../iam/iam.service";
import AuthService from "../auth.service";
import { LoginInput } from "../auth.model";

// login hook
export const useLogin = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async ({ email, password }: LoginInput) =>
      await AuthService.login({
        email,
        password,
      }),
    onSuccess: async () => {
      await client.invalidateQueries({
        queryKey: [IamServiceKey],
      });
    },
  });
};
