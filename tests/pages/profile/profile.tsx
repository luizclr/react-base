import { screen } from "@testing-library/react";

import Profile from "~/pages/profile/profile";

import { render } from "#/test-utils/render";

describe("<Profile />", () => {
  it("should be able to mount <Profile /> component", () => {
    // given
    const { asFragment } = render(<Profile />);

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });

  it("should find page title", () => {
    // given
    render(<Profile />);

    // when
    const title = screen.getByText("Profile");

    // then
    expect(title).toEqual("Profile");
  });
});
