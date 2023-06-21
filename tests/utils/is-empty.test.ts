import { faker } from "@faker-js/faker";

import { isEmpty } from "~/utils";

describe("isEmpty()", () => {
  it("should return true if empty string is passed", async () => {
    // when
    const response = isEmpty("");

    // then
    expect(response).toBe(true);
  });

  it("should return true if empty array is passed", async () => {
    // when
    const response = isEmpty([]);

    // then
    expect(response).toBe(true);
  });

  it("should return false if valid string is passed", async () => {
    // given
    const value = faker.word.words(1);

    // when
    const response = isEmpty(value);

    // then
    expect(response).toBe(false);
  });

  it("should return false if valid array is passed", async () => {
    // given
    const value = [faker.word.words(1)];

    // when
    const response = isEmpty(value);

    // then
    expect(response).toBe(false);
  });
});
