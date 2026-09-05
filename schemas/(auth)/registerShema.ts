import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().trim().min(3, "Імя повинне бути не менше 3 символи"),
    password: z.string().min(6, "Парль повинен бути не менше 6 символів"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  });
export type RegisterForm = z.infer<typeof registerSchema>;
