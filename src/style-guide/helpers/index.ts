import { StyleGuide, ThemeStyle } from "~/style-guide";
import { Colors } from "~/style-guide/tokens/colors";
import { FontSize } from "~/style-guide/tokens/font-size";
import { FontWeight } from "~/style-guide/tokens/font-weight";
import { Sizes } from "~/style-guide/tokens/sizes";

type BasicProps = Record<string, any>;
type PropsWithTheme = BasicProps & { theme: StyleGuide };

export const getTheme =
  (callback: (theme: StyleGuide) => string | number) =>
  (props: PropsWithTheme): string | number => {
    return callback(props.theme);
  };

/**
 *
 * @param lightCallback callback to be called if theme is 'dark'
 * @param rightCallback callback to be called if theme is 'light'
 * @returns string | number to use as css value
 */
export const getColorByTheme =
  (
    lightCallback: (colors: Colors) => string | number,
    rightCallback: (colors: Colors) => string | number
  ) =>
  (props: PropsWithTheme): string | number => {
    if (props.theme.themeStyle === ThemeStyle.light) return lightCallback(props.theme.colors);
    return rightCallback(props.theme.colors);
  };

export const getColors =
  (callback: (colors: Colors) => string | number) =>
  (props: PropsWithTheme): string | number => {
    return callback(props.theme.colors);
  };

export const getFontSizes =
  (callback: (colors: FontSize) => string | number) =>
  (props: PropsWithTheme): string | number => {
    return callback(props.theme.fontSize);
  };

export const getFontWeight =
  (callback: (colors: FontWeight) => string | number) =>
  (props: PropsWithTheme): string | number => {
    return callback(props.theme.fontWeight);
  };

export const getSizes =
  (callback: (colors: Sizes) => string | number) =>
  (props: PropsWithTheme): string | number => {
    return callback(props.theme.sizes);
  };
