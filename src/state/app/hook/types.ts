import { AppDispatch, AppState } from "~/state/app";

type AppActionTypes = {
  setIsLoading: (isLoading: boolean) => void;
};

export type UseAppTypes = AppState & AppActionTypes & { dispatch: AppDispatch };
