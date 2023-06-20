import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email().nonempty(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters" })
    .nonempty(),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
