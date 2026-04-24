import { reactive } from "vue";

export function createRegisterForm() {
  return reactive({
    base: {
      name: "",
      email: "",
      birthDate: "",
      cpf: "",
      password: "",
      confirmPassword: "",
    },

    address: {
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      zipCode: "",
      serviceRadiusKm: 10,
    },

    profile: {
      profilePhotoUrl: "",
      isPublicProfile: true,
      offersHosting: false,
    },
  });
}
