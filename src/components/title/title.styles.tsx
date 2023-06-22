import { getColorByTheme, getFontSize } from "react-styled-guide";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${getFontSize(({ xxl }) => xxl)};
  color: ${getColorByTheme(
    ({ neutral }) => neutral.darkest,
    ({ neutral }) => neutral.lightest
  )};
`;
