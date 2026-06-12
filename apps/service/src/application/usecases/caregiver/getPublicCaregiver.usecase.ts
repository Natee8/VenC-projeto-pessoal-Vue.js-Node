import { Caregiver } from "@packages";
import {
  Either,
  left,
  right,
} from "apps/service/src/core/interface/IEighter.js";
import { normalizeText } from "apps/service/src/core/utils/normalizeText.js";
import { ListCaregiversFilters } from "apps/service/src/domain/dtos/service.dto.js";
import { CaregiverRepository } from "apps/service/src/infrastructure/repositories/user/userCaregiver.repository.js";

export class ListPublicCaregiversUseCase {
  constructor(private readonly caregiverRepo: CaregiverRepository) {}

  async execute(
    filters?: ListCaregiversFilters,
  ): Promise<Either<{ message: string }, Caregiver[]>> {
    if (
      filters?.minRating &&
      (filters.minRating < 1 || filters.minRating > 5)
    ) {
      return left({
        message: "A avaliação mínima deve estar entre 1 e 5",
      });
    }

    const normalizedFilters: ListCaregiversFilters = {
      ...filters,
      city: normalizeText(filters?.city),
      state: normalizeText(filters?.state),
    };

    const caregivers =
      await this.caregiverRepo.findPublicCaregivers(normalizedFilters);

    return right(caregivers);
  }
}
