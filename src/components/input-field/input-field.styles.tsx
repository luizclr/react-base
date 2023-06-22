import { getColor, getFontSize, getSize } from "react-styled-guide";
import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
`;

export const Input = styled.input<{ hasError: boolean }>`
  padding: ${getSize(({ nano }) => nano)};
  border-radius: ${getSize(({ quark }) => quark)};
  border: 1px solid
    ${({ hasError }) =>
      hasError ? getColor(({ error }) => error.light) : getColor(({ neutral }) => neutral.light)};
  outline: none;
  margin-top: ${getSize(({ quark }) => quark)};

  :focus {
    border-color: ${({ hasError }) =>
      hasError ? getColor(({ error }) => error.light) : getColor(({ neutral }) => neutral.dark)};
  }
`;

export const Label = styled.label`
  font-size: ${getFontSize(({ xxs }) => xxs)};
  color: ${getColor(({ neutral }) => neutral.tinyDark)};
`;

export const Error = styled.p`
  font-size: ${getFontSize(({ xxxs }) => xxxs)};
  color: ${getColor(({ error }) => error.light)};
  margin-top: ${getSize(({ quark }) => quark)};
  min-height: ${getSize(({ xxxs }) => xxxs)};
`;
