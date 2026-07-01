import { State } from "@packages";
import { z } from "zod";

import { addressSchema } from "./address.validator.js";

export const listCaregiversQuerySchema = z.object({
  city: z.string().optional(),

  state: z.nativeEnum(State).optional(),

  minRating: z
    .string()
    .optional()
    .transform((v) => (v ? Number(v) : undefined))
    .refine((v) => v === undefined || !isNaN(v), {
      message: "minRating inválido",
    }),

  serviceIds: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((val) => {
      if (!val) return undefined;

      if (Array.isArray(val)) {
        return val.map(Number);
      }

      return val.split(",").map(Number);
    })
    .refine(
      (arr) => !arr || arr.every((n) => !isNaN(n)),
      "serviceIds inválido",
    ),

  petTypes: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((val) => {
      if (!val) return undefined;

      if (Array.isArray(val)) return val;

      return val.split(",");
    }),
});

export const saveCaregiverSchema = z.object({
  userId: z.string().transform(Number),

  offersHosting: z
    .union([z.boolean(), z.string()])
    .optional()
    .transform((v) => v === true || v === "true")
    .default(false),

  serviceRadiusKm: z
    .string()
    .transform(Number)
    .refine((v) => !isNaN(v), {
      message: "serviceRadiusKm inválido",
    }),

  isPublicProfile: z.string().transform((v) => v === "true"),

  address: z
    .string()
    .transform((v) => JSON.parse(v))
    .pipe(addressSchema),
});
