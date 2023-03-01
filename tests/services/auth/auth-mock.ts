import { RequestHandler } from "axios-mock-adapter";
import { StatusCodes } from "http-status-codes";

import { User } from "~/entities/user";
import { AuthenticateRequest } from "~/services/auth/types";

import { mock } from "#/test-utils/mock";

export class AuthServiceMock {
  private readonly mockInstance: RequestHandler;

  public constructor(
    private readonly params: AuthenticateRequest,
    private readonly token: string,
    private readonly user: User
  ) {
    this.mockInstance = mock.onGet("/auth", this.params);
  }

  public success(): void {
    this.mockInstance.replyOnce(StatusCodes.OK, { token: this.token, user: this.user });
  }

  public unauthorized(): void {
    this.mockInstance.replyOnce(StatusCodes.UNAUTHORIZED, {
      message: "email and password does not match",
    });
  }

  public genericError(): void {
    this.mockInstance.replyOnce(StatusCodes.BAD_REQUEST);
  }
}
