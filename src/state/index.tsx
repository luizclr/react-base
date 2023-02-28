import { Dispatch } from "react";

import { AxiosAdapter } from "~/infra/http/axios-adapter";
import AuthService from "~/services/auth/auth";
import UserService from "~/services/user/user";
import { AppState, initialAppState } from "~/state/app";
import { AppActions } from "~/state/app/reducer/types";
import { AuthState, initialAuthState } from "~/state/auth";
import { AuthActions } from "~/state/auth/reducer/types";
import { ServicesTypes } from "~/state/types";

// states and dispatches
type DispatchesState = {
  appDispatch: Dispatch<AppActions>;
  authDispatch: Dispatch<AuthActions>;
};

const initialDispatchesState: DispatchesState = {
  appDispatch: (() => undefined) as Dispatch<AppActions>,
  authDispatch: (() => undefined) as Dispatch<AuthActions>,
};

// services
const httpClient = new AxiosAdapter(process.env.BASE_URL);

export const initialServicesState: ServicesTypes = {
  authService: new AuthService(httpClient),
  userService: new UserService(httpClient),
};

// global state
type CombinedStates = { app: AppState; auth: AuthState };

export type GlobalState = CombinedStates & DispatchesState & ServicesTypes;

export const initialGlobalState: GlobalState = {
  app: initialAppState,
  auth: initialAuthState,
  ...initialDispatchesState,
  ...initialServicesState,
};
