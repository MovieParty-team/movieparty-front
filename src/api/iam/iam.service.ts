import API from "../Api";

export const IamServiceKey: string = "IamService";
export default class IamService {
  static async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<object> {
    const response = await API.post("/auth/login", { email, password });
    if (response.status === 200) {
      return {
        data: response.data.provided,
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
  }: {
    email: string;
    username: string;
    password: string;
  }) {
    const response = await API.post("/auth/register", {
      email,
      username,
      password,
    });
    if (response.status === 200) {
      return {
        data: response.data.provided,
      };
    } else {
      return {
        error: "Signup failed",
        status: response.status,
      };
    }
  }

  static async logout() {
    return API.post("/auth/logout");
  }

  static async geUser(uuid: string): Promise<any> {
    return API.get(`/user`, { params: { uuid } });
  }
}
