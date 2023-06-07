import { DataParser } from "~/data/http/types";

export class HttpResponse {
  constructor(private readonly statusCode: number, private readonly data: unknown) {}

  public hasStatus(status: number): boolean {
    return this.statusCode === status;
  }

  public async getData<T>(parse: DataParser<T>): Promise<T> {
    return await parse(this.data);
  }
}
