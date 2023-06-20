import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

import { InputFIeld } from "~/components/input-field/input-field";
import { LoginSchema } from "~/pages/login/login.schema";
import { Button, ButtonWrapper, Card, Container, Title } from "~/pages/login/login.styles";

type Props = {
  handleSubmit: (email: string, password: string) => Promise<void>;
};

export const Login: React.FC<Props> = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async ({ email, password }: FieldValues): Promise<void> => {
    await props.handleSubmit(email, password);
  };

  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title>Login</Title>
          <InputFIeld
            type="email"
            name="email"
            label="E-mail"
            register={register}
            placeholder="example@example.com"
            errors={errors}
          />
          <InputFIeld
            type="password"
            name="password"
            label="Password"
            register={register}
            placeholder="**********"
            errors={errors}
          />
          <ButtonWrapper>
            <Button data-testid="submit" type="submit">
              SIGN IN
            </Button>
          </ButtonWrapper>
        </form>
      </Card>
    </Container>
  );
};
