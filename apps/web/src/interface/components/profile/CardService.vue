<script setup lang="ts">
import { ref, computed } from "vue";
import ModalBase from "../modal/ModalBase.vue";
import ModalProfileService from "../modal/modalProfileService.vue";

const showModal = ref(false);

interface Service {
  id: number;
  name: string;
  price: number;
  description: string;
}

const props = defineProps<{
  services: Service[];
  averagePrice: number;
}>();

const selectedIds = ref<number[]>([]);

const toggleService = (id: number) => {
  if (selectedIds.value.includes(id)) {
    selectedIds.value = selectedIds.value.filter((s) => s !== id);
  } else {
    selectedIds.value.push(id);
  }
};

const formattedAveragePrice = computed(() => {
  if (!props.averagePrice) return "R$ 0,00";

  return `R$ ${props.averagePrice.toFixed(2).replace(".", ",")}`;
});

const isSelected = (id: number) => {
  return selectedIds.value.includes(id);
};
</script>
<template>
  <div class="bg-white shadow p-6 rounded-2xl w-full max-w-3xl">
    <!-- HEADER -->
    <header class="flex items-center justify-between mb-4">
      <p class="text-sm font-medium text-gray-700">
        Serviços Oferecidos
        <span class="text-gray-400">({{ services.length }})</span>
      </p>

      <button
        @click="showModal = true"
        class="flex items-center gap-2 bg-secondary text-white text-sm px-6 py-2 rounded-lg"
      >
        <i class="fas fa-plus"></i>
        Gerenciar
      </button>
    </header>

    <!-- BANNER DE EXCLUSÃO -->
    <div
      v-if="selectedIds.length"
      class="bg-softs-primary text-primaryHover text-sm px-4 py-3 rounded flex justify-between items-center mb-4"
    >
      <span class="font-semibold">
        {{ selectedIds.length }} serviço(s) selecionado(s). Deseja realmente
        excluir?
      </span>
      <i class="fas fa-trash"></i>
    </div>

    <!-- LISTA DE SERVIÇOS -->
    <div v-if="services.length" class="flex flex-col gap-4">
      <div
        v-for="service in services"
        :key="service.id"
        class="flex items-center gap-4"
      >
        <!-- CHECKBOX -->
        <div
          @click="toggleService(service.id)"
          class="w-6 h-6 rounded-md border flex items-center justify-center cursor-pointer"
          :class="
            isSelected(service.id)
              ? 'bg-primary border-primary'
              : 'border-gray-400'
          "
        >
          <i
            v-if="isSelected(service.id)"
            class="fas fa-check text-white text-xs"
          ></i>
        </div>

        <!-- CARD -->
        <div class="flex-1 border border-default rounded-xl p-4 bg-white">
          <div class="flex items-center gap-3 mb-2">
            <div
              class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-dog text-green-500"></i>
            </div>

            <div>
              <h1 class="text-sm font-semibold text-gray-800">
                {{ service.name }}
              </h1>
              <p class="text-xs text-gray-500">
                R$ {{ service.price.toFixed(2) }}
              </p>
            </div>
          </div>

          <p class="text-xs text-gray-600 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- FALLBACK -->
    <div
      v-else
      class="text-center py-10 text-gray-500 text-sm border border-dashed rounded-xl"
    >
      <p>Você ainda não cadastrou nenhum serviço.</p>

      <button class="mt-3 text-primary font-medium">Adicionar serviço</button>
    </div>

    <!-- FOOTER -->
    <footer class="mt-6">
      <h1 class="text-sm font-medium text-gray-700 mb-1">Preço base</h1>

      <p class="text-sm text-gray-400 mb-2">
        (mínimo global calculado com a média dos seus serviços oferecidos)
      </p>

      <input
        type="text"
        :value="formattedAveragePrice"
        disabled
        class="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 mb-4"
      />

      <div class="flex justify-end gap-2">
        <button
          class="w-8 h-8 rounded-full bg-details flex items-center justify-center text-white"
        >
          <i class="fas fa-chevron-left text-xs"></i>
        </button>

        <button
          class="w-8 h-8 rounded-full bg-details flex items-center justify-center text-white"
        >
          <i class="fas fa-chevron-right text-xs"></i>
        </button>
      </div>
    </footer>
  </div>
  <ModalBase :show="showModal" width="700px" @close="showModal = false">
    <ModalProfileService />
  </ModalBase>
</template>
