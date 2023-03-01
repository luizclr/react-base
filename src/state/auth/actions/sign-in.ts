import { User } from "~/entities/user";
import { AuthDispatch } from "~/state/auth";
import { AuthActionTypes } from "~/state/auth/reducer/types";

export const signIn = (dispatch: AuthDispatch) => (user: User, token: string) => {
  dispatch({
    type: AuthActionTypes.signIn,
    payload: {
      user,
      token,
    },
  });
};
