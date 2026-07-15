import { AnimalCategory, PetSpecies, sizePets } from "../../types/petTypes";

export type CaregiverPetPreferenceDTO = {
  id: number;
  caregiverId: number;
  animalType: PetSpecies;
  category: AnimalCategory;
  minSize: sizePets | null;
  maxSize: sizePets | null;
  accepted: boolean;
  notes?: string | null;
};
