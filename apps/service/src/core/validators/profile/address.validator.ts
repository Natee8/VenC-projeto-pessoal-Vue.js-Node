import { State } from "@packages";
import { z } from "zod";

export const addressSchema = z.object({
  street: z.string(),
  number: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.nativeEnum(State),
  zipCode: z.string().min(8, "CEP inválido"),
  complement: z.string().optional(),
});
