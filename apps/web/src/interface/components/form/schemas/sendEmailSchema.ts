import * as yup from "yup";

export const sendEmailSchema = yup.object({
  email: yup.string().required("Email é obrigatório").email("Email inválido"),

  confirmEmail: yup
    .string()
    .required("Confirme o email")
    .oneOf([yup.ref("email")], "Os emails não coincidem"),
});
