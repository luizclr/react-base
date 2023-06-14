import { faker } from "@faker-js/faker";
import { RenderResult, render as reactRender } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import { AxiosAdapter } from "~/infra/http/axios-adapter";
import { LocalStorageService } from "~/infra/services/storage/local-storage/local-storage";
import AuthService from "~/services/auth/auth";
import UserService from "~/services/user/user";
import { initialDispatchesState } from "~/state";
import { GlobalProvider } from "~/state/global/provider";
import { GlobalProviderProps } from "~/state/global/provider/types";
import { ServicesTypes } from "~/state/types";
import initialStyleGuide from "~/style-guide";
import { isNil } from "~/utils";

const httpClient = new AxiosAdapter("http://www.example.com");

const mockServiceState: ServicesTypes = {
  authService: new AuthService(httpClient),
  storageService: new LocalStorageService(),
  userService: new UserService(httpClient),
};

export const initialGlobalProps: GlobalProviderProps = {
  services: mockServiceState,
  styleGuide: initialStyleGuide,
  ...initialDispatchesState,
  ...mockServiceState,
};

type OptionsType = {
  isLogged?: boolean;
};

export const render = (children: ReactElement, options?: OptionsType): RenderResult => {
  const user = {
    id: "9c4082cb-7b51-4202-8465-145fe1cfa3fc",
    firstName: "Will",
    lastName: "Smith",
    email: "will@example.com.br",
  };

  if (isNil(options?.isLogged)) {
    localStorage.setItem("token", faker.string.alphanumeric(20));
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.clear();
  }

  return reactRender(
    <BrowserRouter>
      <GlobalProvider value={initialGlobalProps}>{children}</GlobalProvider>
    </BrowserRouter>
  );
};
