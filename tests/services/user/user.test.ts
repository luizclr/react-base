import { faker } from "@faker-js/faker";

import { User } from "~/entities/user";
import { AxiosAdapter } from "~/infra/http/axios-adapter";
import { UserListeners } from "~/services/user/types";
import UserService from "~/services/user/user";

import { UserServiceMock } from "#/services/user/user-mock";

type makeSutType = {
  sut: UserService;
  listeners: UserListeners;
};

const makeSut = (): makeSutType => {
  const sut = new UserService(new AxiosAdapter("http://www.example.com"));
  const listeners: UserListeners = {
    onSuccess: jest.fn(),
    onNotFound: jest.fn(),
    onError: jest.fn(),
  };

  return {
    sut,
    listeners,
  };
};

describe("UserService", (): void => {
  it("should call success listener when request is succeeded", async (): Promise<void> => {
    // given
    const { sut, listeners } = makeSut();
    const id = faker.string.uuid();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const response = new User(id, firstName, lastName, email);
    const userServiceMock = new UserServiceMock(id, response);

    // when
    userServiceMock.success();

    await sut.getUserById(id, listeners);

    // then
    expect(listeners.onSuccess).toHaveBeenCalledWith(response);
    expect(listeners.onNotFound).not.toHaveBeenCalled();
    expect(listeners.onError).not.toHaveBeenCalled();
  });

  it("should call noFound listener when user not found", async (): Promise<void> => {
    // given
    const { sut, listeners } = makeSut();
    const id = faker.string.uuid();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const response = new User(id, firstName, lastName, email);
    const userServiceMock = new UserServiceMock(id, response);

    // when
    userServiceMock.notFound();

    await sut.getUserById(id, listeners);

    // then
    expect(listeners.onSuccess).not.toHaveBeenCalled();
    expect(listeners.onNotFound).toHaveBeenCalled();
    expect(listeners.onError).not.toHaveBeenCalled();
  });

  it("should call error listener when get an general error", async (): Promise<void> => {
    // given
    const { sut, listeners } = makeSut();
    const id = faker.string.uuid();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const response = new User(id, firstName, lastName, email);
    const userServiceMock = new UserServiceMock(id, response);

    // when
    userServiceMock.genericError();

    await sut.getUserById(id, listeners);

    // then
    expect(listeners.onSuccess).not.toHaveBeenCalled();
    expect(listeners.onNotFound).not.toHaveBeenCalled();
    expect(listeners.onError).toHaveBeenCalled();
  });
});
