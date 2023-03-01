import { useContext } from "react";

import { signIn } from "~/state/auth/actions/sign-in";
import { UseAuthTypes } from "~/state/auth/hook/types";
import GlobalContext from "~/state/global/context";

export const useAuth = (): UseAuthTypes => {
  const { auth, authDispatch } = useContext(GlobalContext);

  return { ...auth, dispatch: authDispatch, signIn: signIn(authDispatch) };
};
