import { faker } from "@faker-js/faker";

import { AxiosAdapter } from "~/infra/http/axios-adapter";
import AuthService from "~/services/auth/auth";
import { AuthenticateListeners } from "~/services/auth/types";

import { AuthServiceMock } from "#/services/auth/auth-mock";

type makeSutType = {
  sut: AuthService;
  listeners: AuthenticateListeners;
};

const makeSut = (): makeSutType => {
  const sut = new AuthService(new AxiosAdapter("http://www.example.com"));
  const listeners: AuthenticateListeners = {
    onSuccess: jest.fn(),
    onUnauthorized: jest.fn(),
    onError: jest.fn(),
  };

  return {
    sut,
    listeners,
  };
};

describe("AuthService", (): void => {
  it("should call success listener when request is succeeded", async (): Promise<void> => {
    // given
    const { sut, listeners } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const token = faker.random.alphaNumeric(20);
    const authNock = new AuthServiceMock({ email, password }, token);

    // when
    authNock.success();

    await sut.authenticate({ email, password }, listeners);

    // then
    expect(listeners.onSuccess).toHaveBeenCalledWith(token);
    expect(listeners.onUnauthorized).not.toHaveBeenCalled();
    expect(listeners.onError).not.toHaveBeenCalled();
  });

  it("should call unauthorized listener when parameters doesn't match", async (): Promise<void> => {
    // given
    const { sut, listeners } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const token = faker.random.alphaNumeric(20);
    const authNock = new AuthServiceMock({ email, password }, token);

    // when
    authNock.unauthorized();

    await sut.authenticate({ email, password }, listeners);

    // then
    expect(listeners.onSuccess).not.toHaveBeenCalled();
    expect(listeners.onUnauthorized).toHaveBeenCalled();
    expect(listeners.onError).not.toHaveBeenCalled();
  });

  it("should call error listener when get an general error", async (): Promise<void> => {
    // given
    const { sut, listeners } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const token = faker.random.alphaNumeric(20);
    const authNock = new AuthServiceMock({ email, password }, token);

    // when
    authNock.genericError();

    await sut.authenticate({ email, password }, listeners);

    // then
    expect(listeners.onSuccess).not.toHaveBeenCalled();
    expect(listeners.onUnauthorized).not.toHaveBeenCalled();
    expect(listeners.onError).toHaveBeenCalled();
  });
});
