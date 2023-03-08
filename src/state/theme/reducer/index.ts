import { ThemeState } from "~/state/theme";
import { ThemeActions, ThemeActionTypes } from "~/state/theme/reducer/types";
import { ThemeStyle } from "~/style-guide";

export const ThemeReducer = (state: ThemeState, action: ThemeActions): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.setLightTheme:
      return {
        ...state,
        themeStyle: ThemeStyle.light,
      };
    case ThemeActionTypes.setDarkTheme:
      return {
        ...state,
        themeStyle: ThemeStyle.dark,
      };
    default:
      return state;
  }
};
