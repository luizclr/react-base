import { PropsWithChildren, ReactElement, useMemo, useReducer } from "react";
import { StyledGuideProvider, ThemeTypes } from "react-styled-guide";

import GlobalStyle from "~/app.styles";
import { userDTO } from "~/services/user/dto/user";
import { initialServicesState } from "~/state";
import { initialAppState } from "~/state/app";
import { AppReducer } from "~/state/app/reducer";
import { AuthState, initialAuthState } from "~/state/auth";
import { AuthReducer } from "~/state/auth/reducer";
import GlobalContext from "~/state/global/context";
import { GlobalProviderProps } from "~/state/global/provider/types";

export const GlobalProvider = ({
  children,
  value: { services, styleGuide },
}: PropsWithChildren<{ value: GlobalProviderProps }>): ReactElement => {
  const { storageService } = initialServicesState;

  const getInitialTheme = (): ThemeTypes => {
    const storedItem = storageService.get("theme", (item: unknown) => JSON.stringify(item));
    let theme = ThemeTypes.light;

    if (storedItem === ThemeTypes.dark) theme = ThemeTypes.dark;

    storageService.set("theme", theme);

    return theme;
  };

  const getInitialAuthState = (): AuthState => {
    try {
      if (!storageService.exists("token") && !storageService.exists("user"))
        throw new Error("Parsing: can't parse user from storage - invalid schema");

      const token = storageService.get("token", (item: unknown) => JSON.stringify(item));
      const user = storageService.get("user", (item: unknown) => userDTO.parse(item));

      return {
        user,
        token,
        isAuthenticated: true,
      };
    } catch (error) {
      return initialAuthState;
    }
  };

  const [appState, appDispatch] = useReducer(AppReducer, initialAppState);
  const [authState, authDispatch] = useReducer(AuthReducer, getInitialAuthState());

  const value = useMemo(
    () => ({
      app: appState,
      appDispatch,
      auth: authState,
      authDispatch,
      ...services,
    }),
    [appState, authState]
  );

  return (
    <GlobalContext.Provider value={value}>
      <StyledGuideProvider value={{ ...styleGuide, theme: getInitialTheme() }}>
        <GlobalStyle />
        {children}
      </StyledGuideProvider>
    </GlobalContext.Provider>
  );
};
