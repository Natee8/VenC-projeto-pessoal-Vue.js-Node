import { UploadedFile } from "../../types/formData.js";
import { IAddress } from "./IAddress.dto.js";
export interface RegisterOutput {
    id: number;
    email: string;
    cpf: string;
    profilePhotoUrl?: string;
    message: string;
}
export interface IUserDTO {
    id: number;
    name: string;
    email: string;
    cpf: string;
    birthDate: string;
    /** conteúdo da propriedade profilePhotoUrl do usuário (string vazia se não houver) */
    profilePhotoUrl: string | null;
}
export interface RegisterInput {
    name: string;
    email: string;
    cpf: string;
    birthDate: string;
    password: string;
    profileImage?: UploadedFile;
}
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
