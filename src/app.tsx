import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "~/app.styles";
import { Loading } from "~/components/loading/loading";
import { ApplicationProvider } from "~/providers/application/application";
import { AppRoutes } from "~/routes/routes";

export const App = (): ReactElement => (
  <BrowserRouter>
    <GlobalStyle />
    <ApplicationProvider>
      <Loading />
      <AppRoutes />
    </ApplicationProvider>
  </BrowserRouter>
);
