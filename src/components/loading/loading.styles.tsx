import { getColor, getFontWeight, getSize } from "react-styled-guide";
import styled from "styled-components";

import { LoadingProps } from "~/components/loading/types";

export const Background = styled.div<LoadingProps>`
  z-index: 10;
  width: 100%;
  height: 100%;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.466);
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Text = styled.p`
  color: ${getColor(({ neutral }) => neutral.lightest)};
  font-weight: ${getFontWeight(({ bold }) => bold)};
  margin-bottom: ${getSize(({ xxxs }) => xxxs)};
`;
