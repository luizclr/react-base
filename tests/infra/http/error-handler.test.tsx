import { AxiosError, HttpStatusCode } from "axios";

import { ErrorHandler } from "~/infra/http/error-handler";

describe("ErrorHandler", () => {
  it("should has axios status and message when pass AxiosError instance", () => {
    // given
    const instance = new ErrorHandler(new AxiosError("Error message"));

    // then
    expect(instance.statusCode).toEqual(HttpStatusCode.InternalServerError);
    expect(instance.message).toEqual("Error message");
  });

  it("should has default status and message when pass generic Error instance", () => {
    // given
    const instance = new ErrorHandler(new Error());

    // then
    expect(instance.statusCode).toEqual(0);
    expect(instance.message).toEqual("Application error");
  });
});
