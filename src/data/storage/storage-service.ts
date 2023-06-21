export interface StorageService {
  set: (key: string, value: string) => void;
  get: <T>(key: string, parser: (data: string) => T) => T;
  exists: (key: string) => boolean;
  delete: (key: string) => void;
}
