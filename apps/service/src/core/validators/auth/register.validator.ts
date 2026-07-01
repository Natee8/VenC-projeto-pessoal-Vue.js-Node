import { z } from "zod";

export const registerSchema = z.object({
  type: z.enum(["OWNER", "CAREGIVER"]),

  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  cpf: z.string().min(11),
  birthDate: z.string(),

  profileImage: z.any().optional(),

  address: z.string().transform((v) => JSON.parse(v)),

  offersHosting: z
    .string()
    .optional()
    .transform((v) => v === "true"),

  isPublicProfile: z
    .string()
    .optional()
    .transform((v) => v === "true"),

  serviceRadiusKm: z
    .string()
    .optional()
    .transform((v) => (v ? Number(v) : undefined)),

  searchRadiusKm: z
    .string()
    .optional()
    .transform((v) => (v ? Number(v) : undefined)),

  phone: z.string().optional(),
});
