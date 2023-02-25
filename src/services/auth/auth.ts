import { StatusCodes } from "http-status-codes";

import { HttpClient } from "~/data/interfaces/http-client";
import {
  AuthenticateListeners,
  AuthenticateRequest,
  AuthenticateResponse,
} from "~/services/auth/types";

export default class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  public async authenticate(
    request: AuthenticateRequest,
    listeners: AuthenticateListeners
  ): Promise<void> {
    const { data, statusCode } = await this.httpClient.request<AuthenticateResponse>({
      url: "/auth",
      method: "get",
      body: request,
    });

    switch (statusCode) {
      case StatusCodes.OK:
        listeners.onSuccess(data.token);
        break;
      case StatusCodes.UNAUTHORIZED:
        listeners.onUnauthorized();
        break;
      default:
        listeners.onError();
    }
  }
}
