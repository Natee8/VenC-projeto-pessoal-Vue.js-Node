import { ServiceRepository } from "apps/service/src/infrastructure/repositories/services/serviceModel.repository.js";
import { VectorSearchService } from "../../service/vectorSearchService.js";
import { FuzzySearchService } from "../../service/fuseSearchService.js";
import { ServiceModelDTO } from "@packages";

export class SearchServicesUseCase {
  constructor(
    private serviceRepo: ServiceRepository,
    private vectorService: VectorSearchService,
    private fuzzyService: FuzzySearchService,
  ) {}

  async execute(query: string) {
    const results: ServiceModelDTO[] = [];

    try {
      const ids = await this.vectorService.search(query);

      if (ids.length) {
        const services = await this.serviceRepo.findManyByIds(ids);
        const map = new Map(services.map((s) => [s.id, s]));

        for (const id of ids) {
          const service = map.get(id);

          if (service) {
            results.push(service);
          }
        }
      }
    } catch (error) {
      console.warn(
        "⚠️ Fallback IA:",
        error instanceof Error ? error.message : error,
      );
    }

    try {
      const allServices = await this.serviceRepo.findAll();
      const fuzzyResults = this.fuzzyService.search(query, allServices);

      results.push(...fuzzyResults);
    } catch (error) {
      console.warn(
        "⚠️ Fallback Fuzzy:",
        error instanceof Error ? error.message : error,
      );
    }

    try {
      const sqlResults = await this.serviceRepo.searchByText(query);
      results.push(...sqlResults);
    } catch (error) {
      console.warn(
        "⚠️ Fallback SQL:",
        error instanceof Error ? error.message : error,
      );
    }

    const unique = new Map<number, ServiceModelDTO>();

    for (const item of results) {
      if (item?.id) {
        unique.set(item.id, item);
      }
    }

    return Array.from(unique.values());
  }
}
