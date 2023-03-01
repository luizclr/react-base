import { PropsWithChildren, ReactElement, useMemo, useReducer } from "react";

import { User } from "~/entities/user";
import { initialServicesState } from "~/state";
import { initialAppState } from "~/state/app";
import { AppReducer } from "~/state/app/reducer";
import { AuthState, initialAuthState } from "~/state/auth";
import { AuthReducer } from "~/state/auth/reducer";
import GlobalContext from "~/state/global/context";

export const GlobalProvider = ({ children }: PropsWithChildren): ReactElement => {
  const getInitialAuthState = (): AuthState => {
    const { storageService } = initialServicesState;
    if (storageService.exists("token") && storageService.exists("user")) {
      const token = storageService.get("token", (item: string) => item);
      const user = storageService.get("user", (item: User) => {
        return new User(item.id, item.firstName, item.lastName, item.email);
      });

      return {
        user,
        token,
        isAuthenticated: true,
      };
    }

    return initialAuthState;
  };

  const [AppState, appDispatch] = useReducer(AppReducer, initialAppState);
  const [AuthState, authDispatch] = useReducer(AuthReducer, getInitialAuthState());

  const value = useMemo(
    () => ({
      app: AppState,
      appDispatch,
      auth: AuthState,
      authDispatch,
      ...initialServicesState,
    }),
    [AppState, AuthState]
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
