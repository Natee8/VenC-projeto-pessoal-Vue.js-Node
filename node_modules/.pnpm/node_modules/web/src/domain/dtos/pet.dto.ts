import { PetSpecies, sizePets } from "../../../../../packages/types/petTypes";

export type CreatePetParams = {
  ownerId: string;
  name: string;
  species: PetSpecies;
  breed?: string;
  age?: number;
  size?: sizePets
};

export type UpdatePetParams = {
  name?: string;
  breed?: string;
  age?: number;
  size?: sizePets
};
