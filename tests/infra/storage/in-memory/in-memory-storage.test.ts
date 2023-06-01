import { faker } from "@faker-js/faker";

import { InMemoryStorageService } from "~/infra/services/storage/in-memory/in-memory-storage";

describe("InMemoryStorageService", (): void => {
  it("should be able to set value by key and get it back", (): void => {
    // given
    const key = faker.random.word();
    const storage = new InMemoryStorageService();
    const username = faker.name.firstName();
    const user = {
      name: username,
    };
    const parser = <user>(data: unknown): user => {
      return data as user;
    };

    // when
    storage.set(key, user);
    const localUser = storage.get<typeof user>(key, parser);

    // then
    expect(storage.exists(key)).toBe(true);
    expect(localUser.name).toBe(username);
  });

  it("should be able to delete item", (): void => {
    // given
    const key = faker.random.word();
    const storage = new InMemoryStorageService();
    const user = {
      name: faker.name.firstName(),
    };

    // when
    storage.set(key, user);
    storage.delete(key);

    // then
    expect(storage.exists(key)).toBe(false);
  });
});
