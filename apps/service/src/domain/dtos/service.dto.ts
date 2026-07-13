import { PetSpecies } from "@packages/types/petTypes.js";

export type ListCaregiversFilters = {
  city?: string;
  state?: string;
  serviceIds?: number[];
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  offersHosting?: boolean;
  petTypes?: PetSpecies[];
};
