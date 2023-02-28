export interface StorageService {
  set: (key: string, value: unknown) => void;
  get: <T>(key: string, parser: (data: unknown) => T) => T;
  exists: (key: string) => boolean;
  delete: (key: string) => void;
}
