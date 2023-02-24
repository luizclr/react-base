import { Dispatch, useContext } from "react";

import { AppState } from "~/state/app";
import { AppActions } from "~/state/app/reducer/types";
import GlobalContext from "~/state/global/context";

export const useApp = (): AppState & { dispatch: Dispatch<AppActions> } => {
  const { app, appDispatch } = useContext(GlobalContext);

  return { ...app, dispatch: appDispatch };
};
