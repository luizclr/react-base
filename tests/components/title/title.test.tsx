import { faker } from "@faker-js/faker";
import { StyleGuide, ThemeTypes } from "react-styled-guide";

import { Title } from "~/components/title/title";
import initialStyleGuide from "~/style-guide";

import { render } from "#/test-utils/render";

const makeSut = (): {
  sut: HTMLElement;
  styleGuide: StyleGuide;
} => {
  const titleText = faker.word.sample();
  const { getByText } = render(<Title>{titleText}</Title>);

  const sut = getByText(titleText);

  const styleGuide = initialStyleGuide.styleGuide;

  return { sut, styleGuide };
};

describe("<Title />", () => {
  it("should be able to mount <Title /> component", () => {
    // given
    const { asFragment } = render(<Title>Hello world</Title>);

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });

  it("should has dark color on light theme", () => {
    // given
    localStorage.setItem("theme", ThemeTypes.light);
    const { sut, styleGuide } = makeSut();
    const { darkest } = styleGuide.colors.neutral;

    // then
    expect(sut).toHaveStyleRule("color", darkest);
  });

  it("should has light color on dark theme", () => {
    // given
    localStorage.setItem("theme", ThemeTypes.dark);
    const { sut, styleGuide } = makeSut();
    const { lightest } = styleGuide.colors.neutral;

    // then
    expect(sut).toHaveStyleRule("color", lightest);
  });
});
