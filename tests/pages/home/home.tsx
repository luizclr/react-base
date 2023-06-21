import { screen } from "@testing-library/react";

import Home from "~/pages/home/home";

import { render } from "#/test-utils/render";

describe("<Home />", () => {
  it("should be able to mount <Home /> component", () => {
    // given
    const { asFragment } = render(<Home />);

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });

  it("should find page title", () => {
    // given
    render(<Home />);

    // when
    const title = screen.getByText("Home");

    // then
    expect(title).toEqual("home");
  });
});
