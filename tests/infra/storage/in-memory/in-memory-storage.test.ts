import { faker } from "@faker-js/faker";

import { InMemoryStorageService } from "~/infra/services/storage/in-memory/in-memory-storage";

describe("InMemoryStorageService", (): void => {
  it("should be able to set value by key and get it back", (): void => {
    // given
    const key = faker.string.sample();
    const storage = new InMemoryStorageService();
    const username = faker.person.firstName();
    const user = {
      name: username,
    };
    const parser = <user>(data: string): user => {
      return JSON.parse(data) as user;
    };

    // when
    storage.set(key, JSON.stringify(user));
    const localUser = storage.get<typeof user>(key, parser);

    // then
    expect(storage.exists(key)).toBe(true);
    expect(localUser.name).toBe(username);
  });

  it("should be able to delete item", (): void => {
    // given
    const key = faker.string.sample();
    const storage = new InMemoryStorageService();
    const user = {
      name: faker.person.firstName(),
    };

    // when
    storage.set(key, JSON.stringify(user));
    storage.delete(key);

    // then
    expect(storage.exists(key)).toBe(false);
  });
});
