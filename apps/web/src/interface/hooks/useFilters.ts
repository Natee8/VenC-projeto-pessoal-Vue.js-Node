import { CaregiverFilters } from "src/domain/dtos/caregivers.dto";
import { ref } from "vue";

export function useCaregiverFilters() {
  const filters = ref<CaregiverFilters>({});

  const setFilters = (newFilters: CaregiverFilters) => {
    filters.value = {
      ...filters.value,
      ...newFilters,
    };
  };

  const clearFilters = () => {
    filters.value = {};
  };

  return {
    filters,
    setFilters,
    clearFilters,
  };
}
