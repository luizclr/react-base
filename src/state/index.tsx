import { Dispatch } from "react";

import { AppState, initialAppState } from "~/state/app";
import { AppActions } from "~/state/app/reducer/types";
import { AuthState, initialAuthState } from "~/state/auth";
import { AuthActions } from "~/state/auth/reducer/types";

type DispatchesState = {
  appDispatch: Dispatch<AppActions>;
  authDispatch: Dispatch<AuthActions>;
};

const initialDispatchesState: DispatchesState = {
  appDispatch: (() => undefined) as Dispatch<AppActions>,
  authDispatch: (() => undefined) as Dispatch<AuthActions>,
};

type CombinedStates = { app: AppState; auth: AuthState };

export type GlobalState = CombinedStates & DispatchesState;

export const initialGlobalState: GlobalState = {
  app: initialAppState,
  auth: initialAuthState,
  ...initialDispatchesState,
};
