import { ServiceRepository } from "apps/service/src/infrastructure/repositories/services/serviceModel.repository.js";
import { VectorSearchService } from "../../service/vectorSearchService.js";

export class SearchServicesUseCase {
  constructor(
    private serviceRepo: ServiceRepository,
    private vectorService: VectorSearchService,
  ) {}

  async execute(query: string) {
    const ids = await this.vectorService.search(query);

    const services = await this.serviceRepo.findManyByIds(ids);

    return ids.map((id) => services.find((s) => s.id === id));
  }
}
