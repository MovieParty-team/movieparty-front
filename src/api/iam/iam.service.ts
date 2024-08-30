import { userInfosType } from "@/types/userData.types";
import API from "../Api";
import { GeUserInput } from "./iam.model";

export const IamServiceKey: string = "IamService";
export default class IamService {
  static async geUser(): Promise<userInfosType> {
    return API.get(`/iam/user`);
  }

  static async geMyself(): Promise<userInfosType> {
    return API.get(`/iam/user/me`);
  }
}
