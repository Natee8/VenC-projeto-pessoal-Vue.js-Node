import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Email é obrigatório").email("Email inválido"),

  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha muito curta"),
});
