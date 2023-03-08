import { Colors, defaultColors } from "~/style-guide/tokens/colors";
import { defaultFontSize, FontSize } from "~/style-guide/tokens/font-size";
import { defaultFontWeight, FontWeight } from "~/style-guide/tokens/font-weight";
import { defaultSizes, Sizes } from "~/style-guide/tokens/sizes";

export enum ThemeStyle {
  dark = "DARK",
  light = "LIGHT",
}

export type StyleGuide = {
  themeStyle: ThemeStyle;
  colors: Colors;
  fontSize: FontSize;
  fontWeight: FontWeight;
  sizes: Sizes;
};

export const defaultStyleGuide: StyleGuide = {
  themeStyle: ThemeStyle.light,
  colors: defaultColors,
  fontSize: defaultFontSize,
  fontWeight: defaultFontWeight,
  sizes: defaultSizes,
};
