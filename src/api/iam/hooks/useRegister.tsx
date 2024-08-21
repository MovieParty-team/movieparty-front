import { useMutation } from "@tanstack/react-query";
import IamService, { IamServiceKey } from "../iam.service";
import { RegisterInput } from "../iam.model";

// login hook
export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterInput) =>
      await IamService.register(data),
    mutationKey: [IamServiceKey, "login"],
  });
};
