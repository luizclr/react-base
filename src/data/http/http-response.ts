import { DataParser } from "~/data/http/types";

export class HttpResponse {
  constructor(private readonly statusCode: number, private readonly data: unknown) {}

  public async getData<T>(parser: DataParser<T>): Promise<T> {
    return await parser(this.data);
  }
}
