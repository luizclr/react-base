import { AuthDispatch } from "~/state/auth";
import { AuthActionTypes } from "~/state/auth/reducer/types";

export const signOut = (dispatch: AuthDispatch) => () => {
  dispatch({ type: AuthActionTypes.logOut });
};
