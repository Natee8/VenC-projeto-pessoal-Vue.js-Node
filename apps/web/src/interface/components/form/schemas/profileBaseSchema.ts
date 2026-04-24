import * as yup from "yup";

export const profileFormSchema = yup.object({
  profileImage: yup
    .string()
    .nullable()
    .required("A foto de perfil é obrigatória")
    .test("is-base64-image", "Imagem inválida", (value) => {
      if (!value) return false;

      return value.startsWith("data:image/");
    })
    .test("max-size", "A imagem deve ter no máximo 5MB", (value) => {
      if (!value) return false;

      const sizeInBytes = (value.length * 3) / 4;

      const maxSize = 5 * 1024 * 1024;

      return sizeInBytes <= maxSize;
    }),

  publicProfile: yup.boolean().default(false),

  acceptPetHosting: yup.boolean().default(false),

  acceptTerms: yup
    .boolean()
    .oneOf([true], "Você precisa aceitar os termos de uso"),
});
