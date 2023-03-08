import { Dispatch } from "react";

import { ThemeActions } from "~/state/theme/reducer/types";
import { ThemeStyle } from "~/style-guide";

export type ThemeState = {
  themeStyle: ThemeStyle;
};

export const initialThemeState: ThemeState = {
  themeStyle: ThemeStyle.light,
};

export type ThemeDispatch = Dispatch<ThemeActions>;
