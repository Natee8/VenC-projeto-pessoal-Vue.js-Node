import {
  Either,
  left,
  right,
} from "apps/service/src/core/interface/IEighter.js";

import { PetSpecies, sizePets, speciesCategoryMap } from "@packages";
import { CaregiverPetPreferenceRepository } from "apps/service/src/infrastructure/repositories/user/caregiverPetPreference.repository.js";
import { CaregiverPetPreference } from "@packages";

export class CaregiverPetPreferenceFacadeUseCase {
  constructor(
    private caregiverPetPreferenceRepo: CaregiverPetPreferenceRepository,
  ) {}

  async create(input: {
    caregiverId: number;
    animalType: PetSpecies;
    minSize?: sizePets;
    maxSize?: sizePets;
    accepted: boolean;
    notes?: string;
  }): Promise<Either<Error, CaregiverPetPreference>> {
    const category = speciesCategoryMap[input.animalType];

    if (!category) {
      return left(new Error("Animal inválido"));
    }

    const existing = await this.caregiverPetPreferenceRepo.findByCaregiverId(
      input.caregiverId,
    );

    const alreadyExists = existing.some(
      (p) => p.animalType === input.animalType,
    );

    if (alreadyExists) {
      return left(new Error("Preferência já cadastrada para esse animal"));
    }

    const sizeOrder = ["SMALL", "MEDIUM", "LARGE"];

    if (input.minSize && input.maxSize) {
      const minIndex = sizeOrder.indexOf(input.minSize);
      const maxIndex = sizeOrder.indexOf(input.maxSize);

      if (minIndex > maxIndex) {
        return left(new Error("minSize não pode ser maior que maxSize"));
      }
    }

    const preference = new CaregiverPetPreference(
      0,
      input.caregiverId,
      input.animalType,
      category,
      input.minSize ?? null,
      input.maxSize ?? null,
      input.accepted,
      input.notes,
    );

    const saved = await this.caregiverPetPreferenceRepo.create(preference);

    return right(saved);
  }

  async listByCaregiver(
    caregiverId: number,
  ): Promise<Either<Error, CaregiverPetPreference[]>> {
    const preferences =
      await this.caregiverPetPreferenceRepo.findByCaregiverId(caregiverId);

    return right(preferences);
  }
}
