import styled from "styled-components";

import { getColorByTheme } from "~/style-guide/helpers";

export const Title = styled.h1`
  color: #838383;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  font-size: 35pt;
  margin-left: 10px;
  color: ${getColorByTheme(
    ({ neutral }) => neutral.darkest,
    ({ neutral }) => neutral.lightest
  )};
`;
