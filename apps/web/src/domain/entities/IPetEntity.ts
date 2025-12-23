import { PetSpecies, sizePets } from '../../../../../packages/types/petTypes';
import { IUser } from './IUserEntity';

//falsa entidade serve só para o formato que a tela consome 

export interface IPet {
    id: number,
    owner: IUser,
    name: string,
    species: PetSpecies,
    size: sizePets,
    breed: string,
    birthDate: Date,
    specialNeeds: string | null,
    createdAt: Date,
    updatedAt: Date
}

