// registerFormBase.schema.ts

import { cpfIsValid } from "src/infrastructure/utils/functionValidCPF";
import * as yup from "yup";

export const registerFormBaseSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(120, "O nome é muito longo"),

  email: yup
    .string()
    .trim()
    .email("Digite um email válido")
    .required("O email é obrigatório")
    .max(150, "O email é muito longo"),

  birthDate: yup
    .string()
    .required("A data de nascimento é obrigatória")
    .test("is-adult", "Você precisa ter pelo menos 18 anos", (value) => {
      if (!value) return false;

      const today = new Date();
      const birth = new Date(value);

      let age = today.getFullYear() - birth.getFullYear();

      const monthDifference = today.getMonth() - birth.getMonth();

      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birth.getDate())
      ) {
        age--;
      }

      return age >= 18;
    }),

  cpf: yup
    .string()
    .required("O CPF é obrigatório")
    .transform((value) => value.replace(/\D/g, ""))
    .test("cpf-length", "CPF deve conter 11 números", (value) => {
      if (!value) return false;

      return value.length === 11;
    })
    .test("cpf-valid", "CPF inválido", (value) => {
      if (!value) return false;

      return cpfIsValid(value);
    }),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(/[A-Z]/, "A senha precisa ter uma letra maiúscula")
    .matches(/[a-z]/, "A senha precisa ter uma letra minúscula")
    .matches(/[0-9]/, "A senha precisa ter um número")
    .matches(/[^A-Za-z0-9]/, "A senha precisa ter um caractere especial"),

  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
