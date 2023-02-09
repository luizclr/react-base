export const isNil = (data: unknown): boolean => {
  if (data === null || data === undefined) return true;
  return false;
};

export const isEmpty = (data: string | unknown[]): boolean => {
  if (data.length === 0) return true;
  return false;
};
