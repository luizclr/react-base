import { fireEvent, screen } from "@testing-library/react";
import { StyleGuide } from "react-styled-guide";

import { Sidebar } from "~/components/sidebar/sidebar.container";
import initialStyleGuide from "~/style-guide";

import { render } from "#/test-utils/render";

const makeSut = (): {
  sut: HTMLElement;
  changeThemeButton: HTMLElement;
  styleGuide: StyleGuide;
} => {
  const { getByTestId } = render(<Sidebar />);

  const sut = getByTestId("sidebar");

  const changeThemeButton = screen.getByText("Change theme");

  const styleGuide = initialStyleGuide.styleGuide;

  return { sut, changeThemeButton, styleGuide };
};

describe("<Sidebar />", () => {
  it("should change theme when click in 'Change Theme' button", () => {
    // given
    const { sut, changeThemeButton, styleGuide } = makeSut();
    const { primary, neutral } = styleGuide.colors;

    // then
    expect(sut).toHaveStyleRule("background-color", primary.darkest);

    // when
    fireEvent.click(changeThemeButton);

    // then
    expect(sut).toHaveStyleRule("background-color", neutral.darkest);
  });
});
