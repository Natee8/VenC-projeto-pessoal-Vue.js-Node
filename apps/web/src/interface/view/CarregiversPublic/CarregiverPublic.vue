<script setup lang="ts">
import { ref, onMounted } from "vue";
import SideBarCarregiver from "src/interface/components/filters/sideBarCarregiver/SideBarCarregiver.vue";
import { serviceModelRepository } from "src/infrastructure/repositories/servicesModel";
import { ServiceResponseDTO } from "src/domain/dtos/serviceResponse.dto";

const services = ref<ServiceResponseDTO[]>([]);
const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;

    const response = await serviceModelRepository.getCatalog();

    services.value = response.data;
  } catch (error) {
    console.error("Erro ao carregar serviços", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div>
    <SideBarCarregiver :services="services" :loading="loading" />
  </div>
</template>
