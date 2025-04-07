import {z} from 'zod';

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const loginSchema = authSchema
export const registerSchema = authSchema.extend({
    name: z.string().min(1).max(255).default('')
})

export type LoginSchema = z.output<typeof loginSchema>;
export type RegisterSchema = z.output<typeof registerSchema>;