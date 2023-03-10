import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "~/entities/user";
import { Login as BaseLogin } from "~/pages/login/login";
import { useApp } from "~/state/app/hook";
import { useAuth } from "~/state/auth/hook";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setIsLoading, storageService } = useApp();
  const { signIn, isAuthenticated, authService } = useAuth();

  useEffect((): void => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleSubmit = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);

    await authService.authenticate({ email, password }, { onSuccess, onUnauthorized, onError });
  };

  const onSuccess = (token: string, user: User): void => {
    storageService.set("token", token);
    storageService.set("user", user);

    signIn(user, token);

    setIsLoading(false);
    navigate("/");
  };

  const onUnauthorized = (): void => {
    setIsLoading(false);
  };

  const onError = (): void => {
    setIsLoading(false);
  };

  return <BaseLogin handleSubmit={handleSubmit} />;
};
