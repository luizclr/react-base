import { Error, Flex, Input, Label } from "~/components/input-field/input-field.styles";
import { InputFieldProps } from "~/components/input-field/types";
import { get, isEmpty } from "~/utils";

export const InputFIeld: React.FC<InputFieldProps> = ({
  label,
  name,
  errors,
  register,
  labelTestId = `${name}-label`,
  inputTestId = `${name}-input`,
  errorTestId = `${name}-error`,
  ...otherProps
}: InputFieldProps) => {
  const errorResult = get(errors, `${name}.message`);
  const errorMessage = typeof errorResult === "object" ? "" : errorResult.toString();

  return (
    <Flex>
      <Label data-testid={labelTestId} htmlFor={name}>
        {label}
      </Label>
      <Input
        hasError={!isEmpty(errorMessage)}
        data-testid={inputTestId}
        {...register(name)}
        {...otherProps}
      />
      <Error role="form-field-error" data-testid={errorTestId}>
        {errorMessage}
      </Error>
    </Flex>
  );
};
