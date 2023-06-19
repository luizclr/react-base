import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Base from "~/pages/base/base";
import { Login } from "~/pages/login/login.container";
import { PrivateRoute } from "~/routes/private-route";

const Home = lazy(async () => await import("~/pages/home/home"));
const Profile = lazy(async () => await import("~/pages/profile/profile"));

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    index: true,
  },
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: "/",
        element: <PrivateRoute outlet={<Home />} />,
      },
      {
        path: "/profile",
        element: <PrivateRoute outlet={<Profile />} />,
      },
    ],
  },
]);
