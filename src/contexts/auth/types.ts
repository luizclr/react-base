import { Dispatch } from "react";

import { User } from "~/entities/user";
import { ApplicationActions } from "~/reducers/application/types";

export type AuthContextType = {
  user: User | null;
  token: string;
  // authService: AuthService;
  dispatch: Dispatch<ApplicationActions>;
};
