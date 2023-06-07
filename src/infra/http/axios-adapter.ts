import axios, { AxiosInstance } from "axios";

import { HttpClient } from "~/data/http/http-client";
import { HttpRequest } from "~/data/http/http-request";
import { HttpResponse } from "~/data/http/http-response";
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

  async request(data: HttpRequest): Promise<HttpResponse> {
    const axiosResponse = await this.axios.request({
      url: data.url,
      method: data.method,
      data: data.body,
      headers: data.headers,
    });

    return new HttpResponse(axiosResponse.status, axiosResponse.data);
  }
}
