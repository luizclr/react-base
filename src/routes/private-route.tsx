import { Navigate } from "react-router-dom";

import { PATHS } from "~/routes/paths";
import { PrivateRouteProps } from "~/routes/types";
import { useAuth } from "~/state/auth/hook";

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ outlet }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: PATHS.LOGIN }} />;
  }
};
