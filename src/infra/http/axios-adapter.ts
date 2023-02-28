import axios, { AxiosInstance, AxiosResponse } from "axios";

import { HttpClient, HttpRequest, HttpResponse } from "~/data/http/http-client";
import { isEmpty } from "~/utils";

export class AxiosAdapter implements HttpClient {
  protected readonly axios: AxiosInstance;

  public constructor(public readonly baseUrl: string) {
    if (isEmpty(baseUrl)) {
      throw new Error("baseUrl is required");
    }

    this.axios = axios.create({
      baseURL: baseUrl,
      headers: { "Content-Type": "application/json" },
    });
  }

  async request<ResponseType>(data: HttpRequest): Promise<HttpResponse<ResponseType>> {
    let axiosResponse: AxiosResponse<ResponseType>;
    try {
      axiosResponse = await this.axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse.data,
    };
  }
}
