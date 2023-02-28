import { StatusCodes } from "http-status-codes";

import { HttpClient } from "~/data/http/http-client";
import { User } from "~/entities/user";
import { UserListeners } from "~/services/user/types";

export default class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  public async getUserById(id: string, listeners: UserListeners): Promise<void> {
    const { data, statusCode } = await this.httpClient.request<User>({
      url: `/users/${id}`,
      method: "get",
    });

    switch (statusCode) {
      case StatusCodes.OK:
        listeners.onSuccess(data);
        break;
      case StatusCodes.NOT_FOUND:
        listeners.onNotFound();
        break;
      default:
        listeners.onError();
    }
  }
}
