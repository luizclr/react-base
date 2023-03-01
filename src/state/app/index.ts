import { Dispatch } from "react";

import { AppActions } from "~/state/app/reducer/types";

export type AppState = {
  isLoading: boolean;
  error: boolean;
};

export const initialAppState: AppState = {
  isLoading: false,
  error: false,
};

export type AppDispatch = Dispatch<AppActions>;
