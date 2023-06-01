/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { StorageService } from "~/data/storage/storage-service";
import { isNil } from "~/utils";

export class InMemoryStorageService implements StorageService {
  private items: Record<string, unknown> = {};

  public get<T>(key: string, parse: (data: unknown) => T): T {
    return parse(this.items[key]);
  }

  public set(key: string, value: unknown): void {
    this.items[key] = value;
  }

  public exists(key: string): boolean {
    return !isNil(this.items[key]);
  }

  public delete(key: string): void {
    delete this.items[key];
  }
}
