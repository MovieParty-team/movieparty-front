import { userInfosType } from "@/types/userData.types";
import API from "../Api";
import {
  Credentials,
  ErrorResponse,
  LoginInput,
  RegisterInput,
} from "./iam.model";

export const IamServiceKey: string = "IamService";
export default class IamService {
  static async login({
    email,
    password,
  }: LoginInput): Promise<Credentials | ErrorResponse> {
    const response = await API.post("/auth/login", { email, password });
    if (response.status === 200) {
      return {
        provided: response.data.provided,
      };
    } else {
      return {
        error: "Login failed",
        status: response.status,
      };
    }
  }

  static async register({
    email,
    username,
    password,
    firstName,
    lastName,
    birthday,
  }: RegisterInput): Promise<Credentials | ErrorResponse> {
    const response = await API.post("/auth/register", {
      email,
      username,
      password,
      firstName,
      lastName,
      birthday,
    });
    if (response.status === 200) {
      return {
        provided: response.data.provided,
      };
    } else {
      return {
        error: "Signup failed",
        status: response.status,
      };
    }
  }

  static async logout(): Promise<Credentials | ErrorResponse> {
    const reponse = await API.get("/auth/logout");
    if (reponse.status === 200) {
      return {
        provided: reponse.data.provided,
      };
    } else {
      return {
        error: "Logout failed",
        status: reponse.status,
      };
    }
  }

  static async geUser(uuid: string): Promise<userInfosType> {
    return API.get(`/user`, { params: { uuid } });
  }

  static async geMyself(): Promise<userInfosType> {
    return API.get(`/user/me`);
  }
}
