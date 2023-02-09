import { faker } from "@faker-js/faker";

import { isEmpty, isNil } from "~/utils";

describe("utils/", () => {
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
      const number = faker.random.numeric();
      const string = faker.random.word();
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

  describe("isEmpty()", () => {
    it("should return true if empty string is passed", async () => {
      // when
      const response = isEmpty("");

      // then
      expect(response).toBe(true);
    });

    it("should return true if empty string is passed", async () => {
      // when
      const response = isEmpty([]);

      // then
      expect(response).toBe(true);
    });

    it("should return true if empty string is passed", async () => {
      // given
      const value = faker.random.word();

      // when
      const response = isEmpty(value);

      // then
      expect(response).toBe(false);
    });

    it("should return true if empty string is passed", async () => {
      // given
      const value = [faker.random.word()];

      // when
      const response = isEmpty(value);

      // then
      expect(response).toBe(false);
    });
  });
});
