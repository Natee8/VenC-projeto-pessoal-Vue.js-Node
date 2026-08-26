import { AnimalCategory, PetSpecies, sizePets } from "../../types/petTypes.js";

export class CaregiverPetPreference {
  constructor(
    public readonly id: number,
    public readonly caregiverId: number,
    public readonly animalType: PetSpecies,
    public readonly category: AnimalCategory,
    public readonly minSize: sizePets | null,
    public readonly maxSize: sizePets | null,
    public readonly accepted: boolean,
    public readonly notes?: string,
  ) {}

  isExotic(): boolean {
    return this.category === AnimalCategory.EXOTIC;
  }

  acceptsLargeAnimals(): boolean {
    return this.maxSize === "LARGE";
  }
}
