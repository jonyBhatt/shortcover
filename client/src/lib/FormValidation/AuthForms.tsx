import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email!" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6 characters long" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email!" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6 characters long" }),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.string(),
  phoneNumber: z.string(),
  country: z.string(),
  postCode: z.string(),
});
