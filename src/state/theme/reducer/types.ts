export enum ThemeActionTypes {
  setLightTheme = "SET_LIGHT_THEME",
  setDarkTheme = "SET_DARK_THEME",
}

export interface SetLightThemeAction {
  type: ThemeActionTypes.setLightTheme;
}

export interface SetDarkThemeAction {
  type: ThemeActionTypes.setDarkTheme;
}
export type ThemeActions = SetLightThemeAction | SetDarkThemeAction;
