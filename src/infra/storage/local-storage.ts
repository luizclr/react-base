import { StorageService } from "~/data/storage/storage-service";
import { isNil } from "~/utils";

export class LocalStorageService implements StorageService {
  public get<T>(key: string, parse: (data: unknown) => T): T {
    const item = window.localStorage.getItem(key) ?? "{}";
    const jsonParseItem: unknown = JSON.parse(item);
    return parse(jsonParseItem);
  }

  public set(key: string, value: unknown): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  public exists(key: string): boolean {
    return !isNil(window.localStorage.getItem(key));
  }

  public delete(key: string): void {
    window.localStorage.removeItem(key);
  }
}
