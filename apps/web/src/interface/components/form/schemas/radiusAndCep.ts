import * as yup from "yup";

export const registerRadiusAndCepSchema = yup.object({
  zipCode: yup
    .string()
    .required("O CEP é obrigatório")
    .transform((value) => value.replace(/\D/g, ""))
    .length(8, "O CEP deve conter 8 números"),

  state: yup
    .string()
    .required("O estado é obrigatório")
    .length(2, "Estado inválido"),

  city: yup
    .string()
    .trim()
    .required("A cidade é obrigatória")
    .min(2, "Cidade inválida")
    .max(120, "Cidade muito longa"),

  neighborhood: yup
    .string()
    .trim()
    .required("O bairro é obrigatório")
    .min(2, "Bairro inválido")
    .max(120, "Bairro muito longo"),

  street: yup
    .string()
    .trim()
    .required("A rua é obrigatória")
    .min(3, "Rua inválida")
    .max(150, "Rua muito longa"),

  number: yup
    .string()
    .trim()
    .required("O número é obrigatório")
    .max(20, "Número inválido"),

  serviceRadius: yup
    .number()
    .required("O raio de atendimento é obrigatório")
    .min(5, "O raio mínimo é 5km")
    .max(64, "O raio máximo é 64km"),
});
