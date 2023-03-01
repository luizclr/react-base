import { Dispatch } from "react";

import { User } from "~/entities/user";
import { AuthActions } from "~/state/auth/reducer/types";

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

export type AuthDispatch = Dispatch<AuthActions>;
