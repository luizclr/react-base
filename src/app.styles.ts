import { getColorByTheme, getSize } from "react-styled-guide";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: color 0.3s, background-color 0.3s;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  div {
    background-color: ${getColorByTheme(
      ({ neutral }) => neutral.lightest,
      ({ neutral }) => neutral.darkest
    )};
  }

  &::-webkit-scrollbar {
    width: ${getSize(({ nano }) => nano)};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${getSize(({ quark }) => quark)};
    background: ${getColorByTheme(
      ({ neutral }) => neutral.tinyDark,
      ({ neutral }) => neutral.light
    )};
    width: ${getSize(({ nano }) => nano)};
  }

  &::-webkit-scrollbar-track {
    background: ${getColorByTheme(
      ({ neutral }) => neutral.light,
      ({ neutral }) => neutral.tinyDark
    )};
    width: ${getSize(({ nano }) => nano)};
  }
`;

export default GlobalStyle;
