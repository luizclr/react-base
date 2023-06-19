import { StatusCodes } from "http-status-codes";

import { HttpClient } from "~/data/http/http-client";
import { AuthService } from "~/data/services/auth/auth-service";
import { ErrorHandler } from "~/infra/http/error-handler";
import { AuthenticateResponseDTO } from "~/services/auth/dto/authenticate-response";
import { AuthenticateListeners, AuthenticateRequest } from "~/services/auth/types";

export default class AppAuthService implements AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  public async authenticate(
    request: AuthenticateRequest,
    listeners: AuthenticateListeners
  ): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: "/auth",
        method: "get",
        body: request,
      });

      const { token, user } = await response.getData(AuthenticateResponseDTO.parse);

      listeners.onSuccess(token, user);
    } catch (error) {
      const errorHandler = new ErrorHandler(error);

      if (errorHandler.hasStatus(StatusCodes.UNAUTHORIZED)) {
        listeners.onUnauthorized();
      } else {
        listeners.onError();
      }
    }
  }
}
