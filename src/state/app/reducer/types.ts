export enum AppActionTypes {
  loading = "LOADING",
  error = "ERROR",
  reset = "RESET",
}

export interface LoadingAction {
  type: AppActionTypes.loading;
  payload: {
    isLoading: boolean;
  };
}

export interface ErrorAction {
  type: AppActionTypes.error;
}

export interface ResetAction {
  type: AppActionTypes.reset;
}

export type AppActions = LoadingAction | ErrorAction | ResetAction;
