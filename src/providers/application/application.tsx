import { PropsWithChildren, ReactElement, useContext, useMemo, useReducer } from "react";

import ApplicationContext, { initialState } from "~/contexts/application/application";
import { ApplicationContextType } from "~/contexts/application/types";
import { ApplicationReducer } from "~/reducers/application/application";

export const ApplicationProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [{ isLoading, error }, dispatch] = useReducer(ApplicationReducer, initialState);

  const value = useMemo(
    () => ({
      isLoading,
      error,
      // authService,
      dispatch,
    }),
    [isLoading, error]
  );

  return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>;
};

export const useApplication = (): ApplicationContextType => useContext(ApplicationContext);
