import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IamServiceKey } from "../../iam/iam.service";
import { RegisterInput } from "../auth.model";
import AuthService from "../auth.service";

// login hook
export const useRegister = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async (data: RegisterInput) => await AuthService.register(data),
    onSuccess: async () => {
      await client.invalidateQueries({
        queryKey: [IamServiceKey],
      });
    },
  });
};
