export const isNil = (data: unknown): boolean => {
  if (data === null || data === undefined) return true;
  return false;
};
