import { useContext, useState } from "react";

import {
  Button,
  ButtonWrapper,
  Card,
  Container,
  Flex,
  Input,
  Title,
} from "~/pages/login/login.styles";
import { AppActionTypes } from "~/state/app/reducer/types";
import GlobalContext from "~/state/global/context";
import { isEmpty } from "~/utils";

export const Login: React.FC = () => {
  const { authService, appDispatch } = useContext(GlobalContext);

  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("123");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    appDispatch({
      type: AppActionTypes.loading,
      payload: { isLoading: true },
    });

    if (isEmpty(email) || isEmpty(password)) return;

    await authService.authenticate({ email, password }, { onSuccess, onUnauthorized, onError });
  };

  const onSuccess = (token: string): void => {
    appDispatch({
      type: AppActionTypes.loading,
      payload: { isLoading: false },
    });
  };

  const onUnauthorized = (): void => {
    appDispatch({
      type: AppActionTypes.loading,
      payload: { isLoading: false },
    });
  };

  const onError = (): void => {
    appDispatch({
      type: AppActionTypes.loading,
      payload: { isLoading: false },
    });
  };

  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <Flex>
            <label>E-mail</label>
            <Input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Flex>
          <Flex>
            <label>Password</label>
            <Input
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Flex>
          <ButtonWrapper>
            <Button type="submit">SIGN IN</Button>
          </ButtonWrapper>
        </form>
      </Card>
    </Container>
  );
};
