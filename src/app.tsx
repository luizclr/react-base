import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import { Loading } from "~/components/loading/loading";
import { AppRoutes } from "~/routes/routes";
import { initialGlobalProps } from "~/state";
import { GlobalProvider } from "~/state/global/provider";

export const App = (): ReactElement => (
  <BrowserRouter>
    <GlobalProvider value={initialGlobalProps}>
      <Loading />
      <AppRoutes />
    </GlobalProvider>
  </BrowserRouter>
);
