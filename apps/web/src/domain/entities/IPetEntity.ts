
//falsa entidade serve só para o formato que a tela consome 

import { IUserDto } from "../../../../../packages/src/domain/dtos/IUser.dto.js";
import { PetSpecies, sizePets } from "../../../../../packages/src/types/petTypes.js";

export interface IPet {
    id: number,
    owner: IUserDto,
    name: string,
    species: PetSpecies,
    size: sizePets,
    breed: string,
    birthDate: Date,
    specialNeeds: string | null,
    createdAt: Date,
    updatedAt: Date
}

