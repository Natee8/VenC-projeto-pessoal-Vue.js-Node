import { Name } from "../../valuesObjects/name.js";
import { IAddress } from "./IAddress.dto.js";

//deto de saida do registro do usuario
export interface RegisterOutput {
  id: number;
  email: string;
  cpf: string;
  /** URL da foto de perfil (pode ser vazio) */
  profilePhotoUrl?: string;
}

//dto de usuario completo para ser utilizado em outras partes do sistema
export interface IUserDTO {
  id: number;
  name: Name;
  email: string;
  cpf: string;
  birthDate: string;
  /** conteúdo da propriedade profilePhotoUrl do usuário (string vazia se não houver) */
  profilePhotoUrl: string | null;
}

//dto de entrada para o registro do usuario
export interface RegisterInput {
  name: string;
  email: string;
  cpf: string;
  birthDate: string;
  password: string;

  profilePhotoBuffer?: Buffer;
}

// dto de entrada para o registro do perfil do usuario, pode ser extendido para owner ou caregiver
export type RegisterInputProfiles = {
  type: "owner" | "caregiver";

  // base
  name: string;
  email: string;
  password: string;
  cpf: string;
  birthDate: string;
  profilePhotoBuffer?: Buffer;

  // owner
  searchRadiusKm?: number;
  phone?: string;

  // caregiver
  offersHosting?: boolean;
  serviceRadiusKm?: number;
  isPublicProfile?: boolean;

  address: IAddress;
};
