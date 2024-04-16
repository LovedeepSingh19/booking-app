import { z } from 'zod';

export const getUserData = z.object({
    email: z.string()
  }).strict();
export type GetUserData = z.infer<typeof getUserData>;

export const getUserDataByName = z.object({
    name: z.string()
  }).strict();
export type GetUserDataByName = z.infer<typeof getUserDataByName>;
