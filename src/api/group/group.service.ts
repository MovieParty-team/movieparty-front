import { StandardResponse } from "@/types/ApiResponse.type";
import API from "../Api";
import { CreateGroupInput } from "./group.model";
import { Group } from "@/types/group.type";
import { AxiosResponse } from "axios";

export const GroupServiceKey = "GroupService";

export default class GroupService {
  static createGroup = async (
    data: CreateGroupInput
  ): Promise<StandardResponse<Group>> => {
    const response = await API.post("/group/", data)
      .then((res: AxiosResponse<StandardResponse<Group>>) => res.data)
      .catch((err) => {
        throw err;
      });

    return response;
  };

  static getGroup = async ({
    id,
  }: {
    id: number;
  }): Promise<StandardResponse<Group>> => {
    const response = await API.get(`/group/${id}`)
      .then((res: AxiosResponse<StandardResponse<Group>>) => res.data)
      .catch((err) => {
        throw err;
      });

    return response;
  };
}
