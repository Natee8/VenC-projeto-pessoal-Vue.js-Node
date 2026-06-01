import * as yup from "yup";

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Digite um email válido")
    .required("O email é obrigatório")
    .max(150, "O email é muito longo"),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
});
