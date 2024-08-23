import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class API {
  private static instance = axios.create();

  private static Config: AxiosRequestConfig = {
    baseURL: process.env.MOVIEPARTY_API_URL,
    withCredentials: true,
    headers: {
      Accept: "application/json",
    },
  };

  public static get config() {
    return this.Config;
  }

  static get baseUrl() {
    return this.Config.baseURL;
  }

  /**
   * Execute a GET Request against endpoint
   * @param url string url of endpoint without /api/mobile
   * @param config
   */
  static async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.get(url, await this.buildConfig(config));
  }

  /**
   * Execute a POST Request against endpoint
   * @param url string url of endpoint without /api/mobile
   * @param data unknown
   * @param config
   */
  static async post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.post(url, data, await this.buildConfig(config));
  }

  /**
   * Execute a PUT Request against endpoint
   * @param url string url of endpoint without /api/mobile
   * @param data unknown
   * @param config
   */
  static async put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.put(url, data, await this.buildConfig(config));
  }

  /**
   * Execute a PATCH Request against endpoint
   * @param url string url of endpoint without /api/mobile
   * @param data unknown
   * @param config
   */
  static async patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.patch(url, data, await this.buildConfig(config));
  }

  /**
   * Execute a DELETE Request against endpoint
   * @param url string url of endpoint without /api/mobile
   * @param config
   */
  static async delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.delete(url, await this.buildConfig(config));
  }

  static async head<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.head(url, await this.buildConfig(config));
  }

  static async getBlob(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Blob>> {
    return this.instance({
      url,
      method: "GET",
      responseType: "blob",
      ...(await this.buildConfig(config)),
    });
  }

  private static async buildConfig(config: AxiosRequestConfig | undefined) {
    const token = localStorage.getItem("token");

    if (token) {
      API.Config.headers!.Authorization = token ? `Bearer ${token}` : undefined;
    }

    return { ...API.Config, ...config };
  }
}
