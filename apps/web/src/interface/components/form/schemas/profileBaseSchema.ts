import * as yup from "yup";

export const profileFormSchema = yup.object({
  profileImage: yup
    .string()
    .nullable()
    .notRequired()
    .test("is-base64-image", "Imagem inválida", (value) => {
      if (!value) return true; // <- aqui é o ponto principal
      return value.startsWith("data:image/");
    }),
  publicProfile: yup.boolean().default(false),

  acceptPetHosting: yup.boolean().default(false),

  acceptTerms: yup
    .boolean()
    .oneOf([true], "Você precisa aceitar os termos de uso"),
});
