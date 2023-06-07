import axios, { AxiosError } from "axios";

export class ErrorHandler {
  public readonly statusCode: number;
  public readonly message: string;

  constructor(private readonly error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      this.statusCode = axiosError.response?.status ?? 500;
      this.message = axiosError.message;
    } else {
      this.statusCode = 0;
      this.message = "Application error";
    }
  }

  public hasStatus(status: number): boolean {
    return this.statusCode === status;
  }
}
