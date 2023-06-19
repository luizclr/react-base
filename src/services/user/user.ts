import { StatusCodes } from "http-status-codes";

import { HttpClient } from "~/data/http/http-client";
import { ErrorHandler } from "~/infra/http/error-handler";
import { GetUserByIdResponseDTO } from "~/services/user/dto/get-user-by-id-response";
import { UserListeners } from "~/services/user/types";

export default class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  public async getUserById(id: string, listeners: UserListeners): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: `/users/${id}`,
        method: "get",
      });

      const user = await response.getData(GetUserByIdResponseDTO.parse);

      listeners.onSuccess(user);
    } catch (error) {
      const errorHandler = new ErrorHandler(error);

      if (errorHandler.hasStatus(StatusCodes.NOT_FOUND)) {
        listeners.onNotFound();
      } else {
        listeners.onError();
      }
    }
  }
}
