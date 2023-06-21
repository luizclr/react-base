import { useEffect } from "react";

import ErrorBoundary from "~/components/error-boundary/error-boundary";

import { render } from "#/test-utils/render";

const ThrowerComponent: React.FC<{ shouldThrow: boolean }> = ({
  shouldThrow = false,
}: {
  shouldThrow: boolean;
}) => {
  useEffect(() => {
    if (shouldThrow) {
      throw new Error();
    }
  }, []);

  return <h1>Thrower Component</h1>;
};

describe("<ErrorBoundary />", () => {
  it("should show error message when any component throws", () => {
    // given
    const { getByText } = render(
      <ErrorBoundary>
        <ThrowerComponent shouldThrow={false} />
      </ErrorBoundary>
    );

    // then
    expect(getByText("Thrower Component")).toBeInTheDocument();
  });

  it("should show error message when any component throws", () => {
    // given
    const { getByText } = render(
      <ErrorBoundary>
        <ThrowerComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    // then
    expect(getByText("Sorry.. there was an error")).toBeInTheDocument();
  });
});
