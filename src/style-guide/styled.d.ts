import { StyleGuide } from "~/style-guide";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends StyleGuide {}
}
