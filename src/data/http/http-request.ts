import { HttpMethod } from "~/data/http/types";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
  params?: unknown;
};
