//falsa entidade serve só para o formato que a tela consome

import { IUserDTO } from "@packages";
import { PetSpecies, sizePets } from "@packages";

export interface IPet {
  id: number;
  owner: IUserDTO;
  name: string;
  species: PetSpecies;
  size: sizePets;
  breed: string;
  birthDate: Date;
  specialNeeds: string | null;
  createdAt: Date;
  updatedAt: Date;
}
