<script setup lang="ts">
import { ref, onMounted } from "vue";
import SideBarCarregiver from "src/interface/components/filters/sideBarCarregiver/SideBarCarregiver.vue";
import { serviceModelRepository } from "src/infrastructure/repositories/servicesModel";
import type { ServiceResponseDTO } from "src/domain/dtos/serviceResponse.dto";
import CardCarregiverPublic from "../../components/cards/CardCarregiverPublic.vue";

const services = ref<ServiceResponseDTO[]>([]);
const loading = ref(false);

const selectedService = ref<ServiceResponseDTO | null>(null);

onMounted(async () => {
  try {
    loading.value = true;

    const response = await serviceModelRepository.getCatalog();
    services.value = response.data;

    selectedService.value = response.data[0] ?? null;
  } catch (error) {
    console.error("Erro ao carregar serviços", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="flex gap-6">
    <!-- SIDEBAR -->
    <SideBarCarregiver
      :services="services"
      :loading="loading"
      class="w-1/3"
      @select="selectedService = $event"
    />

    <div class="w-2/3">
      <CardCarregiverPublic
        :name="'Maria Silva'"
        :rating="4.8"
        :reviewsCount="120"
        :location="'São Paulo - SP'"
        :lastActive="'há 2 horas'"
        :price="85"
        :description="'Cuidadora com mais de 5 anos de experiência em cuidados domiciliares, idosos e pós-operatório. Atendimento humanizado e atenção integral.'"
        :avatarUrl="'https://i.pravatar.cc/150?img=32'"
        :services="[
          { id: 1, name: 'Cuidados com idosos' },
          { id: 2, name: 'Pós-operatório' },
          { id: 3, name: 'Acompanhamento hospitalar' },
        ]"
        @viewProfile="console.log('ver perfil')"
        @requestQuote="console.log('pedido orçamento')"
      />
    </div>
  </div>
</template>
