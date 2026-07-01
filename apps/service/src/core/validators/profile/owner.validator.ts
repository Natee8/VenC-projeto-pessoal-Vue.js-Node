import { z } from "zod";

import { addressSchema } from "./address.validator.js";

export const ownerSaveSchema = z.object({
  userId: z.string().transform(Number),

  phone: z.string().optional(),

  searchRadiusKm: z
    .string()
    .optional()
    .transform((v) => (v ? Number(v) : undefined))
    .refine((v) => v === undefined || !isNaN(v), {
      message: "searchRadiusKm inválido",
    }),

  address: z
    .string()
    .transform((v) => JSON.parse(v))
    .pipe(addressSchema),
});
