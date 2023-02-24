import { User } from "~/entities/user";

export type AuthState = {
  user?: User;
  token: string;
  isAuthenticated: boolean;
};

export const initialAuthState: AuthState = {
  user: undefined,
  token: "",
  isAuthenticated: false,
};
