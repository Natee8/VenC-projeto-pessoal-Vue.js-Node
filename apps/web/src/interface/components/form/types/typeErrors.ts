//profilebase
export type ProfileErrors = {
  profileImage?: string;
  acceptTerms?: string;
};

//formbase
export type RegisterFormErrors = {
  name?: string;
  email?: string;
  birthDate?: string;
  cpf?: string;
  password?: string;
  confirmPassword?: string;
};

//registerradiusandcep
export interface RegisterRadiusAndCepErrors {
  zipCode?: string;
  state?: string;
  city?: string;
  neighborhood?: string;
  street?: string;
  number?: string;
  serviceRadius?: string;
}
