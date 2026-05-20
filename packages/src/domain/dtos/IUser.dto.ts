import { UploadedFile } from "../../types/formData.js";
import { IAddress } from "./IAddress.dto.js";

//dato de saida do registro do usuario
export interface RegisterOutput {
  id: number;
  email: string;
  cpf: string;
  profilePhotoUrl?: string;
  message: string;
}

//dto de usuario completo para ser utilizado em outras partes do sistema
export interface IUserDTO {
  id: number;
  name: string;
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

  profileImage?: UploadedFile;
}

// dto de entrada para o registro do perfil do usuario, pode ser extendido para owner ou caregiver
export interface RegisterInputProfiles {
  type: "owner" | "caregiver";

  name: string;
  email: string;
  password: string;
  cpf: string;
  birthDate: string;

  profileImage?: UploadedFile;

  searchRadiusKm?: number;
  phone?: string;

  offersHosting?: boolean;
  serviceRadiusKm?: number;
  isPublicProfile?: boolean;

  address: IAddress;
}
