import {AxiosInstance} from "axios";

import {
  authenticateRequest,
  authenticateResponse
} from "~/services/authentication/types";

export default class AuthService {
  constructor(private readonly httpClient: AxiosInstance) {}

  async authenticate(request: authenticateRequest): Promise<authenticateResponse> {
    return await this.httpClient.post("/auth", request);
  }
}
