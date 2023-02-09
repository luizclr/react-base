import { Dispatch } from "react";

import { ApplicationActions } from "~/reducers/application/types";

export type ApplicationContextType = {
  isLoading: boolean;
  error: boolean;
  // authService: AuthService;
  dispatch: Dispatch<ApplicationActions>;
};
