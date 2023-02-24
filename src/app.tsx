import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "~/app.styles";
import { Loading } from "~/components/loading/loading";
import { AppRoutes } from "~/routes/routes";
import { GlobalProvider } from "~/state/global/provider";

export const App = (): ReactElement => (
  <BrowserRouter>
    <GlobalStyle />
    <GlobalProvider>
      <Loading />
      <AppRoutes />
    </GlobalProvider>
  </BrowserRouter>
);
