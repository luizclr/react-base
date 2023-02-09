import { createContext, Dispatch } from "react";

import { ApplicationContextType } from "~/contexts/application/types";
import { ApplicationActions } from "~/reducers/application/types";
// import AuthService from "~/services/authentication/authentication";

export const initialState: ApplicationContextType = {
  isLoading: false,
  error: false,
  // AuthService: new AuthService(axiosClient),
  dispatch: (() => undefined) as Dispatch<ApplicationActions>,
};

const ApplicationContext = createContext<ApplicationContextType>(initialState);

export default ApplicationContext;
