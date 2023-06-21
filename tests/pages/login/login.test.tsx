import { faker } from "@faker-js/faker";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { StyleGuide } from "react-styled-guide";

import { Login } from "~/pages/login/login.container";
import initialStyleGuide from "~/style-guide";

import { render } from "#/test-utils/render";

const makeSut = (): {
  emailInput: HTMLInputElement;
  emailError: HTMLElement;
  passInput: HTMLInputElement;
  passError: HTMLElement;
  submitButton: HTMLElement;
  styleGuide: StyleGuide;
} => {
  const { getByRole, getByTestId } = render(<Login />);

  const submitButton = getByRole("button");
  const emailInput = getByTestId("email-input") as HTMLInputElement;
  const emailError = getByTestId("email-error");
  const passInput = getByTestId("password-input") as HTMLInputElement;
  const passError = getByTestId("password-error");

  const styleGuide = initialStyleGuide.styleGuide;

  return { emailInput, emailError, passInput, passError, submitButton, styleGuide };
};

describe("<Login />", () => {
  it("should not show errors on component's first render", async () => {
    // given
    const { emailError, passError } = makeSut();

    // then
    expect(emailError.innerHTML).toEqual("");
    expect(passError.innerHTML).toEqual("");
  });

  it("should show errors when values are invalid", async () => {
    // given
    const { emailInput, emailError, passInput, passError, submitButton } = makeSut();
    const emailErrorMessage = "Invalid email";
    const emailPassMessage = "Password must contain at least 8 characters";

    // when
    fireEvent.change(emailInput, { target: { value: faker.word.sample() } });
    fireEvent.change(passInput, { target: { value: faker.string.alphanumeric(7) } });

    await waitFor(() => fireEvent.submit(submitButton));
    // then

    expect(await screen.findAllByRole("form-field-error")).toHaveLength(2);
    expect(emailError.innerHTML).toEqual(emailErrorMessage);
    expect(passError.innerHTML).toEqual(emailPassMessage);
  });

  it("should show errors when values are valid", async () => {
    // given
    const { emailInput, emailError, passInput, passError, submitButton } = makeSut();

    // when
    fireEvent.change(emailInput, { target: { value: faker.internet.email() } });
    fireEvent.change(passInput, { target: { value: faker.string.alphanumeric(8) } });

    await waitFor(() => fireEvent.submit(submitButton));
    // then

    expect(await screen.findAllByRole("form-field-error")).toHaveLength(2);
    expect(emailError.innerHTML).toEqual("");
    expect(passError.innerHTML).toEqual("");
  });

  it("should be able to mount <Login /> component", async () => {
    // given
    const { asFragment } = render(<Login />);

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });
});
