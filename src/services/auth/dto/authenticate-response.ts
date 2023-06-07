import { z } from "zod";

import { userDTO } from "~/services/user/dto/user";

export const AuthenticateResponse = z.object({
  token: z.string(),
  user: userDTO,
});
