import Fuse from "fuse.js";
import { ServiceModelDTO } from "@packages";

export class FuzzySearchService {
  search(query: string, services: ServiceModelDTO[]) {
    const fuse = new Fuse(services, {
      keys: ["name", "description"],
      threshold: 0.4,
    });

    const result = fuse.search(query);

    return result.map((r) => r.item);
  }
}
