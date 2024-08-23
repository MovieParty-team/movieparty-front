import { useMutation, useQueryClient } from "@tanstack/react-query";
import IamService, { IamServiceKey } from "../iam.service";
import { RegisterInput } from "../iam.model";

// login hook
export const useRegister = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async (data: RegisterInput) => await IamService.register(data),
    onSuccess: async () => {
      await client.invalidateQueries({
        queryKey: [IamServiceKey],
      });
    },
  });
};
