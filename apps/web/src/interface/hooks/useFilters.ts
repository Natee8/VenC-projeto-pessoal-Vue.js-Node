import { CaregiverFilters } from "src/domain/dtos/caregivers.dto";
import { ref } from "vue";

const filters = ref<CaregiverFilters>({});

export function useCaregiverFilters() {
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
