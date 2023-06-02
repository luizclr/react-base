import { StorageService } from "~/data/storage/storage-service";
import { isNil } from "~/utils";

export class LocalStorageService implements StorageService {
  public get<T>(key: string, parse: (data: unknown) => T): T {
    const item = localStorage.getItem(key) ?? "{}";

    return parse(item);
  }

  public set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public exists(key: string): boolean {
    return !isNil(localStorage.getItem(key));
  }

  public delete(key: string): void {
    localStorage.removeItem(key);
  }
}
