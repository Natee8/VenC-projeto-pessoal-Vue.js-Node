<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import SideBarCarregiver from "src/interface/components/filters/sideBarCarregiver/SideBarCarregiver.vue";
import { serviceModelRepository } from "src/infrastructure/repositories/servicesModel";
import type { ServiceResponseDTO } from "src/domain/dtos/serviceResponse.dto";
import { caregiverRepository } from "src/infrastructure/repositories/carregiverRepository.js";
import CardCarregiverPublic from "../../components/cards/CardCarregiverPublic.vue";
import { useCaregiverFilters } from "src/interface/hooks/useFilters.js";
import { CaregiverFilters } from "src/domain/dtos/caregivers.dto.js";

const services = ref<ServiceResponseDTO[]>([]);
const loading = ref(false);

const selectedService = ref<ServiceResponseDTO | null>(null);
const emit = defineEmits(["changeFilters"]);
const { filters, setFilters } = useCaregiverFilters();

const caregivers = ref<any[]>([]);
const loadingCaregivers = ref(false);

const fetchCaregivers = async (customFilters?: CaregiverFilters) => {
  const response = await caregiverRepository.getPublicCaregivers(
    customFilters || filters.value,
  );

  caregivers.value = response.data._value;
};
onMounted(async () => {
  try {
    loading.value = true;

    const servicesRes = await serviceModelRepository.getCatalog();

    services.value = servicesRes.data;
    selectedService.value = servicesRes.data[0] ?? null;

    await fetchCaregivers();
  } catch (error) {
    console.error("Erro ao carregar dados", error);
  } finally {
    loading.value = false;
  }
});
const handleFilters = (newFilters: CaregiverFilters) => {
  setFilters(newFilters);
};

watch(
  filters,
  () => {
    fetchCaregivers(filters.value);
  },
  { deep: true },
);
</script>

<template>
  <div class="flex gap-6">
    <SideBarCarregiver
      :services="services"
      :loading="loading"
      class="w-1/3"
      @select="selectedService = $event"
      @changeFilters="handleFilters"
    />

    <div
      class="w-full h-screen overflow-y-auto flex justify-center py-6 no-scrollbar"
    >
      <div class="w-fulll flex flex-col gap-6">
        <div class="w-full flex flex-col gap-6">
          <CardCarregiverPublic
            v-for="c in caregivers"
            :key="c.id"
            :name="c.name"
            :rating="c.rating"
            :reviewsCount="c.reviewsCount"
            :location="`${c.city ?? ''} - ${c.state ?? ''}`"
            :price="c.startingPrice"
            :avatarUrl="c.avatarUrl"
            :services="c.services"
            @viewProfile="console.log('ver perfil', c.id)"
            @requestQuote="console.log('pedido orçamento', c.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
