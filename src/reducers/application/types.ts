export enum ApplicationActionTypes {
  loading = "LOADING",
  error = "ERROR",
  reset = "RESET",
}

export interface LoadingAction {
  type: ApplicationActionTypes.loading;
  payload: {
    isLoading: boolean;
  };
}

export interface ErrorAction {
  type: ApplicationActionTypes.error;
}

export interface ResetAction {
  type: ApplicationActionTypes.reset;
}

export type ApplicationActions = LoadingAction | ErrorAction | ResetAction;
