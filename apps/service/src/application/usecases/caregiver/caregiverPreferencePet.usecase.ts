import {
  Either,
  left,
  right,
} from "apps/service/src/core/interface/IEighter.js";

import { PetSpecies, sizePets, speciesCategoryMap } from "@packages";
import { CaregiverPetPreferenceRepository } from "apps/service/src/infrastructure/repositories/user/caregiverPetPreference.repository.js";
import { CaregiverPetPreference } from "@packages";
import type { Prisma } from "../../../generated/prisma/index.js";

type CreatePetPreferenceInput = {
  caregiverId: number;
  animalType: PetSpecies;
  minSize?: sizePets;
  maxSize?: sizePets;
  accepted: boolean;
  notes?: string;
};

export class CaregiverPetPreferenceFacadeUseCase {
  constructor(
    private caregiverPetPreferenceRepo: CaregiverPetPreferenceRepository,
  ) {}

  async create(
    input: CreatePetPreferenceInput,
    tx?: Prisma.TransactionClient,
  ): Promise<Either<Error, CaregiverPetPreference>> {
    const category = speciesCategoryMap[input.animalType];

    if (!category) {
      return left(new Error("Animal inválido"));
    }

    const existing = await this.caregiverPetPreferenceRepo.findByCaregiverId(
      input.caregiverId,
      tx,
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

    const saved = await this.caregiverPetPreferenceRepo.create(
      preference,
      tx,
    );

    return right(saved);
  }

  async createMany(
    inputs: CreatePetPreferenceInput[],
  ): Promise<Either<Error, CaregiverPetPreference[]>> {
    try {
      const created = await this.caregiverPetPreferenceRepo.runInTransaction(
        async (tx) => {
          const results: CaregiverPetPreference[] = [];

          for (const input of inputs) {
            const result = await this.create(input, tx);

            if (result.type === "left") {
              throw new Error(result.error.message);
            }

            results.push(result.value);
          }

          return results;
        },
      );

      return right(created);
    } catch (error) {
      return left(
        error instanceof Error
          ? error
          : new Error("Erro ao criar preferências"),
      );
    }
  }

  async listByCaregiver(
    caregiverId: number,
  ): Promise<Either<Error, CaregiverPetPreference[]>> {
    const preferences =
      await this.caregiverPetPreferenceRepo.findByCaregiverId(caregiverId);

    return right(preferences);
  }
}
