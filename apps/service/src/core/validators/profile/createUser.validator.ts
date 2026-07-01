import { cpf } from "cpf-cnpj-validator";
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),

  email: z.string().email("Email inválido"),

  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .regex(/[A-Z]/, "Deve ter letra maiúscula")
    .regex(/[a-z]/, "Deve ter letra minúscula")
    .regex(/\d/, "Deve ter número")
    .regex(/[^A-Za-z0-9]/, "Deve ter caractere especial"),

  cpf: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((value) => cpf.isValid(value), {
      message: "CPF inválido",
    }),

  birthDate: z
    .string()
    .refine((date) => !isNaN(new Date(date).getTime()), {
      message: "Data inválida",
    })
    .transform((v) => new Date(v)),
});
