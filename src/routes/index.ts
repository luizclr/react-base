import { ReactElement } from "react";
import { Switch, Route, Redirect, Navigate } from "react-router-dom";

import Login from "~/home/home";
const isAuthenticated = false;

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function PrivateRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }}>;
  }
}

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/home" component={Home} />
  </Switch>
);

export default Routes;
