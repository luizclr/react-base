import { Error, Flex, Input, Label } from "~/components/input-field/input-field.styles";
import { InputFieldProps } from "~/components/input-field/types";
import { get, isEmpty } from "~/utils";

export const InputFIeld: React.FC<InputFieldProps> = ({
  label,
  name,
  errors,
  register,
  ...otherProps
}: InputFieldProps) => {
  const errorResult = get(errors, `${name}.message`);
  const errorMessage = typeof errorResult === "object" ? "" : errorResult.toString();

  return (
    <Flex>
      <Label htmlFor={name}>{label}</Label>
      <Input hasError={!isEmpty(errorMessage)} {...register(name)} {...otherProps} />
      <Error>{errorMessage}</Error>
    </Flex>
  );
};
