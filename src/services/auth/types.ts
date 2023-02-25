export type AuthenticateRequest = {
  email: string;
  password: string;
};

export type AuthenticateResponse = {
  token: string;
};

export type AuthenticateListeners = {
  onSuccess: (token: string) => void;
  onUnauthorized: () => void;
  onError: () => void;
};
