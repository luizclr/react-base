import { useContext } from "react";

import { setIsLoading } from "~/state/app/actions/set-is-loading";
import { UseAppTypes } from "~/state/app/hook/types";
import GlobalContext from "~/state/global/context";

export const useApp = (): UseAppTypes => {
  const { app, appDispatch } = useContext(GlobalContext);

  return { ...app, dispatch: appDispatch, setIsLoading: setIsLoading(appDispatch) };
};
