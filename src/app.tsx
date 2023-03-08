import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import { Loading } from "~/components/loading/loading";
import { AppRoutes } from "~/routes/routes";
import { initialServicesState } from "~/state";
import { GlobalProvider } from "~/state/global/provider";

export const App = (): ReactElement => (
  <BrowserRouter>
    <GlobalProvider value={initialServicesState}>
      <Loading />
      <AppRoutes />
    </GlobalProvider>
  </BrowserRouter>
);
