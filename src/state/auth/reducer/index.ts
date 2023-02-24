import { AuthState } from "~/state/auth";
import { AuthActions, AuthActionTypes } from "~/state/auth/reducer/types";

export const AuthReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.signIn:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case AuthActionTypes.logOut:
      return {
        ...state,
        user: undefined,
        token: "",
      };
    default:
      return state;
  }
};
