import {render} from "@testing-library/react";

import {App} from "~/app";

describe("<App />", () => {
  test("Should be able to mount component", async () => {
    const { getByText } = render(<App />);

    expect(getByText("React Base").textContent).toBeTruthy();
  });
});
