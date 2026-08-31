<script setup lang="ts">
import { serviceModelRepository } from "src/infrastructure/repositories/servicesModel";
import { useAuthStore } from "src/infrastructure/stores/auth/authStore";
import { ref, onMounted, computed } from "vue";

interface ServiceCatalog {
  id: number;
  name: string;
}

const authStore = useAuthStore();
const caregiverId = computed(() => {
  return authStore.profile?.caregiverProfile?.id ?? null;
});

console.log("PROFILE:", authStore.profile);

const submitting = ref(false);

const services = ref<ServiceCatalog[]>([]);
const selectedServiceId = ref<number | null>(null);
const price = ref<number | null>(null);
const description = ref("");
const loading = ref(false);

const isValid = computed(() => {
  return (
    selectedServiceId.value !== null &&
    price.value !== null &&
    caregiverId.value !== null
  );
});

console.log({
  selectedServiceId: selectedServiceId.value,
  price: price.value,
  caregiverId: caregiverId.value,
});

const handleAddService = async () => {
  if (!isValid.value) return;

  try {
    submitting.value = true;

    await serviceModelRepository.createCarregiverService(
      caregiverId.value!,
      selectedServiceId.value!,
      price.value!,
      description.value,
    );

    await authStore.fetchMe();

    console.log({
      selectedServiceId: selectedServiceId.value,
      price: price.value,
      caregiverId: caregiverId.value,
    });

    selectedServiceId.value = null;
    price.value = null;
    description.value = "";
  } catch (error) {
    console.error("Erro ao criar serviço", error);
  } finally {
    submitting.value = false;
  }
};

onMounted(async () => {
  try {
    loading.value = true;
    services.value = await serviceModelRepository.getCatalog();
  } catch (error) {
    console.error("Erro ao buscar catálogo", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <!-- HEADER -->
    <div>
      <h1 class="text-base font-semibold text-gray-800">Adicionar serviço</h1>
      <p class="text-xs text-gray-500">Preencha os dados abaixo</p>
    </div>

    <!-- FORM -->
    <div class="space-y-2">
      <!-- Serviço -->
      <div>
        <label class="text-xs text-gray-500">Serviço</label>
        <select
          v-model="selectedServiceId"
          :disabled="loading"
          class="mt-1 w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        >
          <option :value="null" disabled>
            {{ loading ? "Carregando..." : "Selecione" }}
          </option>

          <option
            v-for="service in services"
            :key="service.id"
            :value="service.id"
          >
            {{ service.name }}
          </option>
        </select>
      </div>

      <!-- Preço -->
      <div>
        <label class="text-xs text-gray-500">Preço</label>
        <div class="mt-1 relative">
          <span class="absolute left-3 top-2 text-gray-400 text-sm">R$</span>

          <input
            v-model="price"
            type="number"
            placeholder="0,00"
            class="w-full pl-8 bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      <!-- Descrição -->
      <div>
        <label class="text-xs text-gray-500">Descrição</label>
        <textarea
          v-model="description"
          rows="2"
          placeholder="Opcional"
          class="mt-1 w-full min-h-[150px] bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
        />
      </div>
    </div>

    <!-- PREVIEW SIMPLES -->
    <div
      v-if="selectedServiceId || price || description"
      class="bg-gray-50 border border-gray-200 rounded-md p-3 text-xs flex flex-col gap-1"
    >
      <p class="font-medium text-gray-700">
        {{
          services.find((s) => s.id === selectedServiceId)?.name || "Serviço"
        }}
      </p>

      <p class="text-gray-500">
        {{ price ? `R$ ${price.toFixed(2)}` : "Sem preço" }}
      </p>

      <p v-if="description" class="text-gray-400 mt-1 break-words">
        {{ description }}
      </p>
    </div>

    <button
      @click="handleAddService"
      :disabled="!isValid || submitting"
      class="w-full bg-details text-white rounded-md py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ submitting ? "Salvando..." : "Adicionar" }}
    </button>
  </div>
</template>
