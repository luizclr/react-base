export type HttpMethod = "post" | "get" | "put" | "delete";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
  params?: unknown;
};

export interface HttpClient {
  request: <ResponseType>(request: HttpRequest) => Promise<HttpResponse<ResponseType>>;
}

export type HttpResponse<T = unknown> = {
  statusCode: number;
  data: T;
};
