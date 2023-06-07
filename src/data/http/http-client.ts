import { HttpRequest } from "~/data/http/http-request";
import { HttpResponse } from "~/data/http/http-response";

export interface HttpClient {
  request: (request: HttpRequest) => Promise<HttpResponse>;
}
