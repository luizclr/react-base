import { User } from "~/entities/user";
import AuthService from "~/services/auth/auth";
import { AuthDispatch, AuthState } from "~/state/auth";

type AuthActionTypes = {
  signIn: (user: User, token: string) => void;
  signOut: () => void;
  authService: AuthService;
};

export type UseAuthTypes = AuthState & AuthActionTypes & { dispatch: AuthDispatch };
