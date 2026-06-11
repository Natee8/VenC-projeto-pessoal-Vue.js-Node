import * as yup from "yup";

export const verifyCodeSchema = yup.object({
  code: yup
    .string()
    .required("Código é obrigatório")
    .length(6, "Código deve ter 6 dígitos")
    .matches(/^\d+$/, "Código deve conter apenas números"),
});
