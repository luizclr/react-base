import { useContext } from "react";

import { setIsLoading } from "~/state/app/actions/set-is-loading";
import { UseAppTypes } from "~/state/app/hook/types";
import GlobalContext from "~/state/global/context";

export const useApp = (): UseAppTypes => {
  const { app, appDispatch, storageService } = useContext(GlobalContext);

  return {
    ...app,
    storageService,
    dispatch: appDispatch,
    setIsLoading: setIsLoading(appDispatch),
  };
};
