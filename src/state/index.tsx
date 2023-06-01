import { AxiosAdapter } from "~/infra/http/axios-adapter";
import { LocalStorageService } from "~/infra/services/storage/local-storage/local-storage";
import AuthService from "~/services/auth/auth";
import AppUserService from "~/services/user/user";
import { AppDispatch, AppState, initialAppState } from "~/state/app";
import { AuthDispatch, AuthState, initialAuthState } from "~/state/auth";
import { GlobalProviderProps } from "~/state/global/provider/types";
import { ServicesTypes } from "~/state/types";
import initialStyleGuide from "~/style-guide";

// states and dispatches
export type DispatchesState = {
  appDispatch: AppDispatch;
  authDispatch: AuthDispatch;
};

export const initialDispatchesState: DispatchesState = {
  appDispatch: (() => undefined) as AppDispatch,
  authDispatch: (() => undefined) as AuthDispatch,
};

// services
const httpClient = new AxiosAdapter(process.env.BASE_URL);

export const initialServicesState: ServicesTypes = {
  authService: new AuthService(httpClient),
  userService: new AppUserService(httpClient),
  storageService: new LocalStorageService(),
};

export const initialGlobalProps: GlobalProviderProps = {
  services: initialServicesState,
  styleGuide: initialStyleGuide,
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
