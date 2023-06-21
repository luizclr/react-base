import { isEmpty } from "~/utils";

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
    } else if (typeof dive === "object" && !Object.keys(dive).includes(key)) {
      return defaultValue;
    }
    return dive;
  }, object);

  if (typeof result === "string" && isEmpty(result)) return defaultValue;
  return result;
};
