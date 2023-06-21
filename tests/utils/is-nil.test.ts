import { faker } from "@faker-js/faker";

import { isNil } from "~/utils";

describe("isNil()", () => {
  it("should return true if null is passed", async () => {
    // when
    const response = isNil(null);

    // then
    expect(response).toBe(true);
  });

  it("should return true if undefined is passed", async () => {
    // when
    const response = isNil(undefined);

    // then
    expect(response).toBe(true);
  });

  it("should return false if other value is passed", async () => {
    // given
    const number = faker.number.int();
    const string = faker.word.words(1);
    const boolean = faker;
    const object = {};

    // when
    const numberResult = isNil(number);
    const stringResult = isNil(string);
    const booleanResult = isNil(boolean);
    const objectResult = isNil(object);

    // then
    expect(numberResult).toBe(false);
    expect(stringResult).toBe(false);
    expect(booleanResult).toBe(false);
    expect(objectResult).toBe(false);
  });
});
