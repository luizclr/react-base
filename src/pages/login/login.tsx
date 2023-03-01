import { useState } from "react";

import {
  Button,
  ButtonWrapper,
  Card,
  Container,
  Flex,
  Input,
  Title,
} from "~/pages/login/login.styles";
import { isEmpty } from "~/utils";

type Props = {
  handleSubmit: (email: string, password: string) => Promise<void>;
};

export const Login: React.FC<Props> = (props: Props) => {
  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("123");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password)) return;

    await props.handleSubmit(email, password);
  };

  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <Flex>
            <label htmlFor="email">E-mail</label>
            <Input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Flex>
          <Flex>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              placeholder="**********"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Flex>
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
