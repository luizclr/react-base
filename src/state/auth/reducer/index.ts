import { AuthState } from "~/state/auth";
import { AuthActions, AuthActionTypes } from "~/state/auth/reducer/types";

export const AuthReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.signIn:
      return {
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case AuthActionTypes.logOut:
      return {
        user: undefined,
        token: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
