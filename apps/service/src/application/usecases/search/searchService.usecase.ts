import { ServiceRepository } from "apps/service/src/infrastructure/repositories/services/serviceModel.repository.js";
import { VectorSearchService } from "../../service/vectorSearchService.js";

export class SearchServicesUseCase {
  constructor(
    private serviceRepo: ServiceRepository,
    private vectorService: VectorSearchService,
  ) {}

  async execute(query: string) {
    try {
      const ids = await this.vectorService.search(query);

      if (ids.length) {
        const services = await this.serviceRepo.findManyByIds(ids);

        const map = new Map(services.map((s) => [s.id, s]));

        return ids.map((id) => map.get(id)).filter(Boolean);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.warn("⚠️ Fallback ativado:", error.message);
      } else {
        console.warn("⚠️ Fallback ativado:", error);
      }
    }

    return this.serviceRepo.searchByText(query);
  }
}
