import { useMutation } from "@tanstack/react-query";
import { CreateGroupInput } from "../group.model";
import GroupService from "../group.service";

export default function useCreateGroup(data: CreateGroupInput) {
  return useMutation({
    mutationFn: async () => await GroupService.createGroup(data),
  });
}
