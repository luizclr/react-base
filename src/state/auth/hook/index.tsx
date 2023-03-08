import { useContext } from "react";

import { signIn } from "~/state/auth/actions/sign-in";
import { signOut } from "~/state/auth/actions/sign-out";
import { UseAuthTypes } from "~/state/auth/hook/types";
import GlobalContext from "~/state/global/context";

export const useAuth = (): UseAuthTypes => {
  const { auth, authDispatch, authService } = useContext(GlobalContext);

  return {
    ...auth,
    authService,
    dispatch: authDispatch,
    signIn: signIn(authDispatch),
    signOut: signOut(authDispatch),
  };
};
