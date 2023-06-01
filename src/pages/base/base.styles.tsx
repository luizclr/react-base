import { getColorByTheme } from "react-styled-guide";
import styled from "styled-components";

export const BaseWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const BaseContent = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  font-size: 35pt;
  margin-left: 10px;
  color: ${getColorByTheme(
    ({ neutral }) => neutral.darkest,
    ({ neutral }) => neutral.lightest
  )};
`;
