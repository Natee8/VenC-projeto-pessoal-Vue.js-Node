import * as yup from "yup";

export const profileFormSchema = yup.object({
  profileImage: yup
    .mixed<File>()
    .notRequired()
    .test("file-type", "Imagem inválida", (file) => {
      if (!file) return true;

      return file.type.startsWith("image/");
    })
    .test("file-size", "Máximo 5MB", (file) => {
      if (!file) return true;

      return file.size <= 5 * 1024 * 1024;
    }),
  publicProfile: yup.boolean().default(false),

  acceptPetHosting: yup.boolean().default(false),

  acceptTerms: yup
    .boolean()
    .oneOf([true], "Você precisa aceitar os termos de uso"),
});
