import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(4),
  password: z.string().min(4),
  firstname: z.string().min(4),
  lastname: z.string().min(4),
  birthday: z.string(),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const logoutSchema = z.object({});

export type LogoutInput = z.infer<typeof logoutSchema>;

export const geUserSchema = z.object({
  uuid: z.string(),
});

export type GeUserInput = z.infer<typeof geUserSchema>;

export interface Credentials {
  provided: {
    accessToken: string | null;
  };
}

export interface ErrorResponse {
  error: string;
  status: number;
}
