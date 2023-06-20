import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Login } from "~/pages/login/login.container";
import initialStyleGuide from "~/style-guide";

describe("<Login />", () => {
  it("should be able to mount <Login /> component", async () => {
    // given
    const { asFragment } = render(
      <BrowserRouter>
        <ThemeProvider theme={initialStyleGuide}>
          <Login />
        </ThemeProvider>
      </BrowserRouter>
    );

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });
});
