import { Dispatch, useContext } from "react";

import { AuthState } from "~/state/auth";
import { AuthActions } from "~/state/auth/reducer/types";
import GlobalContext from "~/state/global/context";

export const useAuth = (): AuthState & { dispatch: Dispatch<AuthActions> } => {
  const { auth, authDispatch } = useContext(GlobalContext);

  return { ...auth, dispatch: authDispatch };
};
