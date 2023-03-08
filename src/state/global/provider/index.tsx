import { PropsWithChildren, ReactElement, useMemo, useReducer } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "~/app.styles";
import { User } from "~/entities/user";
import { initialServicesState } from "~/state";
import { initialAppState } from "~/state/app";
import { AppReducer } from "~/state/app/reducer";
import { AuthState, initialAuthState } from "~/state/auth";
import { AuthReducer } from "~/state/auth/reducer";
import GlobalContext from "~/state/global/context";
import { initialThemeState } from "~/state/theme";
import { ThemeReducer } from "~/state/theme/reducer";
import { ServicesTypes } from "~/state/types";
import { defaultStyleGuide } from "~/style-guide";

export const GlobalProvider = ({
  children,
  value: services,
}: PropsWithChildren<{ value: ServicesTypes }>): ReactElement => {
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

  const [appState, appDispatch] = useReducer(AppReducer, initialAppState);
  const [authState, authDispatch] = useReducer(AuthReducer, getInitialAuthState());
  const [themeState, themeDispatch] = useReducer(ThemeReducer, initialThemeState);

  const value = useMemo(
    () => ({
      app: appState,
      appDispatch,
      auth: authState,
      authDispatch,
      theme: themeState,
      themeDispatch,
      ...services,
    }),
    [appState, authState, themeState]
  );

  return (
    <GlobalContext.Provider value={value}>
      <ThemeProvider theme={{ ...defaultStyleGuide, themeStyle: themeState.themeStyle }}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
