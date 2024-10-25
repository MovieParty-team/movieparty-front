import { useQuery } from "@tanstack/react-query";
import GroupService, { GroupServiceKey } from "../group.service";

export default function useGetGroup(id: number) {
  return useQuery({
    queryFn: async () => await GroupService.getGroup({ id }),
    queryKey: [GroupServiceKey, "getGroup", id],
  });
}
