import { loginSchema } from "../schemas/users.schema";
import { z } from "zod";

export type iLogin = z.infer<typeof loginSchema>;
