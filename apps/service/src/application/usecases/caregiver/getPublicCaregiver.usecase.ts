import {
  Either,
  left,
  right,
} from "apps/service/src/core/interface/IEighter.js";
import { ListCaregiversFilters } from "apps/service/src/domain/dtos/caregiver.dto.js";
import { Caregiver } from "@packages";
import { CaregiverRepository } from "apps/service/src/infrastructure/repositories/user/userCaregiver.repository.js";

export class ListPublicCaregiversUseCase {
  constructor(private readonly caregiverRepo: CaregiverRepository) {}

  async execute(
    filters?: ListCaregiversFilters,
  ): Promise<Either<{ message: string }, Caregiver[]>> {
    // regra de negócio
    if (filters?.radiusKm && (!filters.userLat || !filters.userLng)) {
      return left({
        message: "Latitude e longitude são obrigatórias para busca por raio",
      });
    }

    if (filters?.radiusKm && filters.radiusKm > 100) {
      return left({ message: "Raio máximo permitido é 100km" });
    }

    const caregivers = await this.caregiverRepo.findPublicCaregivers(filters);

    return right(caregivers);
  }
}
