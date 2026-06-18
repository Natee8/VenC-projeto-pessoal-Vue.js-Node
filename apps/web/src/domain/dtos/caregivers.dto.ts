import { PetSpecies } from "@packages";

export interface CaregiverFilters {
  serviceIds?: number[];

  minRating?: number;

  state?: string;
  city?: string;

  petTypes?: PetSpecies[];

  offersHosting?: boolean;
}
