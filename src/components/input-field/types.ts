import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type InputFieldProps = {
  label?: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  labelTestId?: string;
  inputTestId?: string;
  errorTestId?: string;
};
