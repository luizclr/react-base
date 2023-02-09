import { ApplicationContextType } from "~/contexts/application/types";
import { ApplicationActions, ApplicationActionTypes } from "~/reducers/application/types";

export const ApplicationReducer = (
  state: ApplicationContextType,
  action: ApplicationActions
): ApplicationContextType => {
  switch (action.type) {
    case ApplicationActionTypes.loading:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case ApplicationActionTypes.error:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case ApplicationActionTypes.reset:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    default:
      return state;
  }
};
