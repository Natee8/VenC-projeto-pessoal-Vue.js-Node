import { PetSpecies } from "../../../../../packages/types/petTypes"

export interface PetDTO {
  id: number;
  ownerId: string;
  name: string;
  species: PetSpecies;
  breed: string;
  age: number;
  specialNeeds: string | null;
  createdAt: string;
  updatedAt: string;
}
