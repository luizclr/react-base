import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Base } from "~/pages/base/base";

describe("<Base />", () => {
  it("should be able to mount <Base /> component", async () => {
    // given
    const { asFragment } = render(
      <BrowserRouter>
        <Base />
      </BrowserRouter>
    );

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });
});
