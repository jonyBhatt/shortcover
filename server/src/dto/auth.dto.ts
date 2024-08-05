import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6).max(16),
});

export type CreateUserType = z.infer<typeof createUserSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(16),
});

export type LoginUserType = z.infer<typeof loginSchema>;
