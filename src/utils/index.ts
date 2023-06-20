export const isNil = (data: unknown): boolean => {
  if (data === null || data === undefined) return true;
  return false;
};

export const isEmpty = (data: string | unknown[]): boolean => {
  if (data.length === 0) return true;
  return false;
};

export const get = (
  object: object,
  path: string | object,
  defaultValue: string = ""
): object | string | number | boolean => {
  let _path: string[] = [];
  if (typeof path === "string") _path = path.split(".").filter((key) => key.length);
  const result = _path.reduce((dive, key) => {
    if (typeof dive === "object" && Object.keys(dive).includes(key)) {
      // @ts-expect-error: -
      return dive[key];
    }
    return {};
  }, object);

  if (isNil(result) || (typeof result === "string" && isEmpty(result))) return defaultValue;
  return result;
};
