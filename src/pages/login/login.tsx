import { useEffect } from "react";

import {
  Button,
  ButtonWrapper,
  Card,
  Container,
  Flex,
  Input,
  Title,
} from "~/pages/login/login.styles";
import { useApp } from "~/state/app/hook";
import { AppActionTypes } from "~/state/app/reducer/types";

export const Login: React.FC = () => {
  const { isLoading, dispatch } = useApp();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch({
      type: AppActionTypes.loading,
      payload: {
        isLoading: true,
      },
    });
  }, [isLoading]);

  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <Flex>
            <label>E-mail</label>
            <Input type="email" placeholder="example@email.com" />
          </Flex>
          <Flex>
            <label>Password</label>
            <Input type="password" placeholder="**********" />
          </Flex>
          <ButtonWrapper>
            <Button type="submit">SIGN IN</Button>
          </ButtonWrapper>
        </form>
      </Card>
    </Container>
  );
};
