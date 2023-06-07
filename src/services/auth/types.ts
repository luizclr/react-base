import { User } from "~/entities/user";

export type AuthenticateRequest = {
  email: string;
  password: string;
};

export type AuthenticateListeners = {
  onSuccess: (token: string, user: User) => void;
  onUnauthorized: () => void;
  onError: () => void;
};
