export type HttpMethod = "post" | "get" | "put" | "delete";

export type DataParser<T> = (data: unknown) => Promise<T> | T;
