import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Login } from "~/pages/login/login.container";

describe("<Login />", () => {
  it("should be able to mount <Login /> component", async () => {
    // given
    const { asFragment } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });
});
