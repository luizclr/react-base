import { ThemeDispatch, ThemeState } from "~/state/theme";

type ThemeActionTypes = {
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

export type UseThemeTypes = ThemeState & ThemeActionTypes & { dispatch: ThemeDispatch };
