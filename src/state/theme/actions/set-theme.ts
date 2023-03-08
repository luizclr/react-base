import { ThemeDispatch } from "~/state/theme";
import { ThemeActionTypes } from "~/state/theme/reducer/types";

export const setLightTheme = (dispatch: ThemeDispatch) => () => {
  dispatch({
    type: ThemeActionTypes.setLightTheme,
  });
};

export const setDarkTheme = (dispatch: ThemeDispatch) => () => {
  dispatch({
    type: ThemeActionTypes.setDarkTheme,
  });
};
