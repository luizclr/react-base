import { getColor, getFontSize, getFontWeight, getSize } from "react-styled-guide";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${getColor(({ success }) => success.medium)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: ${getSize(({ xxxs }) => xxxs)};
  color: ${getColor(({ neutral }) => neutral.dark)};
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: ${getSize(({ nano }) => nano)};
  padding: ${getSize(({ xxs }) => xxs)};
  max-width: 100%;
  width: 400px;
`;

export const Title = styled.h2`
  font-size: ${getFontSize(({ m }) => m)};
  margin-bottom: ${getSize(({ xxs }) => xxs)};
  color: ${getColor(({ neutral }) => neutral.dark)};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: inherit;
`;

export const Button = styled.button`
  background-color: ${getColor(({ secondary }) => secondary.medium)};
  border-radius: ${getSize(({ quark }) => quark)};
  padding: ${getSize(({ nano }) => nano)};
  border: none;
  color: #fff;
  font-weight: ${getFontWeight(({ bold }) => bold)};
  margin: 0 auto;
  margin-top: ${getSize(({ nano }) => nano)};
  width: 50%;

  :hover {
    background-color: ${getColor(({ secondary }) => secondary.tinyDark)};
    cursor: pointer;
  }
`;
