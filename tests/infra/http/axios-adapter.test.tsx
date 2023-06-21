import { AxiosAdapter } from "~/infra/http/axios-adapter";

describe("AxiosAdapter", () => {
  it("should return a a valid instance of AxiosAdapter", () => {
    const instance = new AxiosAdapter("http://www.example.com");

    // then
    expect(instance).toBeInstanceOf(AxiosAdapter);
  });

  it("should throw if baseURL ir empty", () => {
    const makeInstance = (): AxiosAdapter => {
      return new AxiosAdapter("");
    };

    // then
    expect(makeInstance).toThrow();
  });
});
