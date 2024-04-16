import { z } from 'zod';

export const phoneUpdateInput = z.object({
    phone: z.string(),
    email: z.string(),
    city: z.string(),
    temp: z.string(),
  }).strict();
  export type PhoneUpdateInput = z.infer<typeof phoneUpdateInput>;

  
  export const phoneUpdateOutput = z.object({
    phone: z.string().nullable(),
    email: z.string(),
    city: z.string().nullable(),
    temp: z.string().nullable(),
    name: z.string(),
  }).strict();
  export type PhoneUpdateOutput = z.infer<typeof phoneUpdateOutput>;