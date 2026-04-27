//form base
export interface RegisterFormBaseProps {
  name?: string;
  email?: string;
  birthDate?: string;
  cpf?: string;
  password?: string;
  confirmPassword?: string;
  isLoading?: boolean;
}

export interface RegisterFormBaseEmits {
  (e: "update:name", val: string): void;
  (e: "update:email", val: string): void;
  (e: "update:birthDate", val: string): void;
  (e: "update:cpf", val: string): void;
  (e: "update:password", val: string): void;
  (e: "update:confirmPassword", val: string): void;
  (e: "submit"): void;
}

//profilebase

export interface FormProfileBaseProps {
  isLoading?: boolean;
}

export interface FormProfileBaseEmits {
  (e: "submit", payload: FormData): void;
}

//registerradiusandcep

export interface RegisterRadiusAndCEPProps {
  street?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  serviceRadius?: number;
  isLoading?: boolean;
}

export interface RegisterRadiusAndCEPEmits {
  (e: "update:street", val: string): void;
  (e: "update:number", val: string): void;
  (e: "update:neighborhood", val: string): void;
  (e: "update:city", val: string): void;
  (e: "update:state", val: string): void;
  (e: "update:zipCode", val: string): void;
  (e: "update:serviceRadius", val: number): void;
  (e: "submit"): void;
}

export type RegisterRadiusAndCEPTextFieldEmits =
  | "update:street"
  | "update:number"
  | "update:neighborhood"
  | "update:city"
  | "update:state"
  | "update:zipCode";
