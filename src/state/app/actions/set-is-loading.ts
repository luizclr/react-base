import { AppDispatch } from "~/state/app";
import { AppActionTypes } from "~/state/app/reducer/types";

export const setIsLoading = (dispatch: AppDispatch) => (isLoading: boolean) => {
  dispatch({
    type: AppActionTypes.loading,
    payload: { isLoading },
  });
};
