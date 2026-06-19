import {
  PrismaClient,
  CaregiverPetPreference as PrismaCaregiverPetPreference,
} from "../../../generated/prisma/index.js";

import type { Prisma } from "../../../generated/prisma/index.js";

import {
  AnimalCategory,
  CaregiverPetPreference,
  PetSpecies,
  sizePets,
} from "@packages";

export class CaregiverPetPreferenceRepository {
  private prisma = new PrismaClient();

  private mapToEntity(
    record: PrismaCaregiverPetPreference,
  ): CaregiverPetPreference {
    return new CaregiverPetPreference(
      record.id,
      record.caregiverId,
      record.animalType as PetSpecies,
      record.category as AnimalCategory,
      (record.minSize as sizePets) ?? null,
      (record.maxSize as sizePets) ?? null,
      record.accepted,
      record.notes ?? undefined,
    );
  }

  async create(
    preference: CaregiverPetPreference,
    tx?: Prisma.TransactionClient,
  ): Promise<CaregiverPetPreference> {
    const client = tx ?? this.prisma;

    const record = await client.caregiverPetPreference.create({
      data: {
        caregiverId: preference.caregiverId,
        animalType: preference.animalType,
        category: preference.category,
        minSize: preference.minSize,
        maxSize: preference.maxSize,
        accepted: preference.accepted,
        notes: preference.notes ?? null,
      },
    });

    return this.mapToEntity(record);
  }

  async findByCaregiverId(
    caregiverId: number,
    tx?: Prisma.TransactionClient,
  ): Promise<CaregiverPetPreference[]> {
    const client = tx ?? this.prisma;

    const records = await client.caregiverPetPreference.findMany({
      where: { caregiverId },
    });

    return records.map((record) => this.mapToEntity(record));
  }
}
