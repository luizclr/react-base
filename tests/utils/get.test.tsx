import { get } from "~/utils";

describe("get()", () => {
  it("should return a number value", () => {
    // given
    const value = { x: { y: { a: 10, b: "hello", c: true } } };

    // when
    const response = get(value, "x.y.a");

    // then
    expect(response).toEqual(10);
  });

  it("should return a string value", () => {
    // given
    const value = { x: { y: { a: 10, b: "hello", c: true } } };

    // when
    const response = get(value, "x.y.b");

    // then
    expect(response).toEqual("hello");
  });

  it("should return a boolean value", () => {
    // given
    const value = { x: { y: { a: 10, b: "hello", c: true } } };

    // when
    const response = get(value, "x.y.c");

    // then
    expect(response).toBe(true);
  });

  it("should return a object value", () => {
    // given
    const value = { x: { y: { a: 10, b: "hello", c: true } } };

    // when
    const response = get(value, "x.y");

    // then
    expect(response).toEqual({ a: 10, b: "hello", c: true });
  });

  it("should return default value when key not found", () => {
    // given
    const value = { x: { y: { a: 10, b: "hello", c: true } } };

    // when
    const response = get(value, "x.y.z");

    // then
    expect(response).toEqual("");
  });

  it("should return default parameter value when key not found", () => {
    // given
    const value = { x: { y: { a: 10, b: "hello", c: true } } };

    // when
    const response = get(value, "x.y.z", "defaultValue");

    // then
    expect(response).toEqual("defaultValue");
  });
});
