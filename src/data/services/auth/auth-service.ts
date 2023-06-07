import { AuthenticateListeners, AuthenticateRequest } from "~/services/auth/types";

export interface AuthService {
  authenticate: (request: AuthenticateRequest, listeners: AuthenticateListeners) => Promise<void>;
}
