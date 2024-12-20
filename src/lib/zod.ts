import { object, string } from "zod";

export const RegisterSchema = object({
  name: string().min(3, "Nama Harus lebih dari 3 karakter"),
  email: string().email("Email tidak valid"),
  password: string()
    .min(6, "Password harus lebih dari 6 karakter")
    .max(32, "Password harus kurang dari 32 karakter"),
  ConFirmPassword: string()
    .min(6, "Password tidak sama")
    .max(32, "Password harus kurang dari 32 karakter"),
}).refine((data) => data.password === data.ConFirmPassword, {
  message: "Password tidak sama",
  path: ["ConFirmPassword"],
})

export const SignInSchema = object({
  email: string().email("Email tidak valid"),
  password: string()
    .min(6, "Password harus lebih dari 6 karakter")
    .max(32, "Password harus kurang dari 32 karakter"),
})
