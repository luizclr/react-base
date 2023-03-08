import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Base } from "~/pages/base/base";
import { defaultStyleGuide } from "~/style-guide";

describe("<Base />", () => {
  it("should be able to mount <Base /> component", async () => {
    // given
    const { asFragment } = render(
      <BrowserRouter>
        <ThemeProvider theme={defaultStyleGuide}>
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
