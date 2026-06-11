import * as yup from "yup";

export const resetPasswordFormSchema = yup.object({
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(/[a-z]/, "Deve conter pelo menos uma letra minúscula")
    .matches(/[A-Z]/, "Deve conter pelo menos uma letra maiúscula")
    .matches(/\d/, "Deve conter pelo menos um número")
    .matches(
      /[@$!%*?&]/,
      "Deve conter pelo menos um caractere especial (@$!%*?&)",
    )
    .matches(/^\S*$/, "Não pode conter espaços"),

  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
