import { createGlobalStyle } from "styled-components";

import { getColorByTheme } from "~/style-guide/helpers";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: color 1s, background-color 1s;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  div {
    background-color: ${getColorByTheme(
      ({ neutral }) => neutral.lightest,
      ({ primary }) => primary.darkest
    )};
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #6f6f6f;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background: #c6c6c6;
    width: 8px;
  }
`;

export default GlobalStyle;
