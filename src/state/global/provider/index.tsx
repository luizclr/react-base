import { PropsWithChildren, ReactElement, useMemo, useReducer } from "react";

import { initialAppState } from "~/state/app";
import { AppReducer } from "~/state/app/reducer";
import { initialAuthState } from "~/state/auth";
import { AuthReducer } from "~/state/auth/reducer";
import GlobalContext from "~/state/global/context";

export const GlobalProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [AppState, appDispatch] = useReducer(AppReducer, initialAppState);
  const [AuthState, authDispatch] = useReducer(AuthReducer, initialAuthState);

  const value = useMemo(
    () => ({
      app: AppState,
      appDispatch,
      auth: AuthState,
      authDispatch,
    }),
    [AppState, AuthState]
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
