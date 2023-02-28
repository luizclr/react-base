import AuthService from "~/services/auth/auth";
import UserService from "~/services/user/user";

export type ServicesTypes = {
  authService: AuthService;
  userService: UserService;
};
