import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  username: z
    .string()
    .min(3, "Username must be at least 3 characters"),

  email: z.email("Enter a valid email"),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid mobile number"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;