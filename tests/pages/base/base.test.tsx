import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Base from "~/pages/base/base";
import initialStyleGuide from "~/style-guide";

describe("<Base />", () => {
  it("should be able to mount <Base /> component", () => {
    // given
    const { asFragment } = render(
      <BrowserRouter>
        <ThemeProvider theme={initialStyleGuide}>
          <Base />
        </ThemeProvider>
      </BrowserRouter>
    );

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });
});
