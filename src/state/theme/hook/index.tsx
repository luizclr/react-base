import { useContext } from "react";

import GlobalContext from "~/state/global/context";
import { setDarkTheme, setLightTheme } from "~/state/theme/actions/set-theme";
import { UseThemeTypes } from "~/state/theme/hook/types";

export const useTheme = (): UseThemeTypes => {
  const { theme, themeDispatch } = useContext(GlobalContext);

  return {
    ...theme,
    dispatch: themeDispatch,
    setDarkTheme: setDarkTheme(themeDispatch),
    setLightTheme: setLightTheme(themeDispatch),
  };
};
