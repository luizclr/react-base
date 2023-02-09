import {AxiosResponse} from "axios";


export type authenticateRequest = {
  email: string;
  password: string;
};

export type authenticateResponse = AxiosResponse<{
  token: string;
}>;
