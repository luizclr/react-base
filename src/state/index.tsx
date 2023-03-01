import { AxiosAdapter } from "~/infra/http/axios-adapter";
import { LocalStorageService } from "~/infra/storage/local-storage/local-storage";
import AuthService from "~/services/auth/auth";
import UserService from "~/services/user/user";
import { AppDispatch, AppState, initialAppState } from "~/state/app";
import { AuthDispatch, AuthState, initialAuthState } from "~/state/auth";
import { ServicesTypes } from "~/state/types";

// states and dispatches
type DispatchesState = {
  appDispatch: AppDispatch;
  authDispatch: AuthDispatch;
};

const initialDispatchesState: DispatchesState = {
  appDispatch: (() => undefined) as AppDispatch,
  authDispatch: (() => undefined) as AuthDispatch,
};

// services
const httpClient = new AxiosAdapter(process.env.BASE_URL);

export const initialServicesState: ServicesTypes = {
  authService: new AuthService(httpClient),
  userService: new UserService(httpClient),
  storageService: new LocalStorageService(),
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
