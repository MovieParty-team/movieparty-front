import API from "../Api";
import { ErrorResponse } from "../global.model";
import { Credentials, LoginInput, RegisterInput } from "./auth.model";

export default class AuthService {
  static async login(data: LoginInput): Promise<Credentials | ErrorResponse> {
    const response = await API.post("/auth/login", data);
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

  static async register(
    data: RegisterInput
  ): Promise<Credentials | ErrorResponse> {
    const response = await API.post("/auth/register", data);
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
}
