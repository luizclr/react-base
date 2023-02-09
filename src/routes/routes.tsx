import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Base } from "~/pages/base/base";
import { Login } from "~/pages/login/login";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export const PrivateRoute = ({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps): ReactElement => {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};

export const AppRoutes = (): ReactElement => {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: true, // !!authContext.isAuthenticated,
    authenticationPath: "/login",
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} index />
      <Route
        path="/"
        element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<Base />} />}
      />
    </Routes>
  );
};
