import { ReactElement } from "react";
import { RouterProvider } from "react-router-dom";

import { Loading } from "~/components/loading/loading";
import { router } from "~/routes/routes";
import { initialGlobalProps } from "~/state";
import { GlobalProvider } from "~/state/global/provider";

export const App = (): ReactElement => (
  <GlobalProvider value={initialGlobalProps}>
    <Loading />
    <RouterProvider router={router} />
  </GlobalProvider>
);
