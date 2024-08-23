import { useMutation, useQueryClient } from "@tanstack/react-query";
import IamService, { IamServiceKey } from "../iam.service";
import { LoginInput } from "../iam.model";

// login hook
export const useLogin = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async ({ email, password }: LoginInput) =>
      await IamService.login({
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
