import { User } from "~/entities/user";

export enum AuthActionTypes {
  signIn = "SIGN_IN",
  logOut = "LOG_OUT",
}

export interface SignInAction {
  type: AuthActionTypes.signIn;
  payload: {
    user: User;
    token: string;
  };
}

export interface LogOutAction {
  type: AuthActionTypes.logOut;
}

export type AuthActions = SignInAction | LogOutAction;
