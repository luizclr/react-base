import { User } from "~/entities/user";
import { AuthDispatch, AuthState } from "~/state/auth";

type AuthActionTypes = {
  signIn: (user: User, token: string) => void;
};

export type UseAuthTypes = AuthState & AuthActionTypes & { dispatch: AuthDispatch };
