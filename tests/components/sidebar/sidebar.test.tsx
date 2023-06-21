import { fireEvent, screen } from "@testing-library/react";
import { StyleGuide } from "react-styled-guide";

import { Sidebar } from "~/components/sidebar/sidebar.container";
import initialStyleGuide from "~/style-guide";

import { render } from "#/test-utils/render";

const makeSut = (): {
  sut: HTMLElement;
  changeThemeButton: HTMLElement;
  logoutButton: HTMLElement;
  styleGuide: StyleGuide;
} => {
  const { getByTestId } = render(<Sidebar />);

  const sut = getByTestId("sidebar");

  const changeThemeButton = screen.getByText("Change theme");
  const logoutButton = screen.getByText("Logout");

  const styleGuide = initialStyleGuide.styleGuide;

  return { sut, changeThemeButton, logoutButton, styleGuide };
};

describe("<Sidebar />", () => {
  it("should change theme to DARK when click in 'Change Theme' button", () => {
    // given
    localStorage.setItem("theme", "LIGHT");
    const { sut, changeThemeButton, styleGuide } = makeSut();
    const { primary, neutral } = styleGuide.colors;

    // then
    expect(sut).toHaveStyleRule("background-color", primary.darkest);

    // when
    fireEvent.click(changeThemeButton);

    // then
    expect(sut).toHaveStyleRule("background-color", neutral.darkest);
  });

  it("should change theme to LIGHT when click in 'Change Theme' button", () => {
    // given
    localStorage.setItem("theme", "DARK");
    const { sut, changeThemeButton, styleGuide } = makeSut();
    const { primary, neutral } = styleGuide.colors;

    // then
    expect(sut).toHaveStyleRule("background-color", neutral.darkest);

    // when
    fireEvent.click(changeThemeButton);

    // then
    expect(sut).toHaveStyleRule("background-color", primary.darkest);
  });

  it("should logout when click in logout button", () => {
    // given
    const { logoutButton } = makeSut();

    // then
    expect(localStorage.length).toBe(3);

    // // when
    fireEvent.click(logoutButton);

    // // then
    expect(localStorage.length).toBe(1);
    expect(localStorage.key(0)).toBe("theme");
  });
});
