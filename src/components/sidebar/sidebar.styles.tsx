import styled from "styled-components";

import {
  getColorByTheme,
  getColors,
  getFontSizes,
  getFontWeight,
  getSizes,
} from "~/style-guide/helpers";

export const Container = styled.div`
  background-color: ${getColorByTheme(
    ({ primary }) => primary.darkest,
    ({ neutral }) => neutral.darkest
  )};
`;

export const SidebarWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-right: 1px solid
    ${getColorByTheme(
      ({ primary }) => primary.dark,
      ({ neutral }) => neutral.darker
    )};
  color: ${getColors(({ neutral }) => neutral.lightest)};
  padding: ${getSizes(({ xxxs }) => xxxs)} 0;
`;

export const Text = styled.h1`
  padding: 0 ${getSizes(({ xxxs }) => xxxs)};
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  background-color: inherit;
`;

export const List = styled.ul`
  list-style-type: none;
  margin-top: ${getSizes(({ xs }) => xs)};
`;

export const ListItem = styled.li`
  transition: none;
  padding: ${getSizes(({ xxxs }) => xxxs)};
  font-weight: ${getFontWeight(({ medium }) => medium)};
  border-bottom: 1px solid
    ${getColorByTheme(
      ({ primary }) => primary.dark,
      ({ neutral }) => neutral.darker
    )};

  :hover {
    cursor: pointer;
    background-color: ${getColorByTheme(
      ({ primary }) => primary.darker,
      ({ neutral }) => neutral.darker
    )};
  }

  :last-child {
    border: none;
  }
`;

export const Version = styled.p`
  text-align: center;
  font-size: ${getFontSizes(({ xs }) => xs)};
  margin-top: ${getSizes(({ xxxs }) => xxxs)};
`;
