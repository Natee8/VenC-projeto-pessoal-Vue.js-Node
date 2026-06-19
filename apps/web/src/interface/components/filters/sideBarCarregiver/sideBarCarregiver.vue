<script setup lang="ts">
import { ref, watch } from "vue";
import Checkbox from "../../inputs/Checkbox.vue";
import Radio from "../../inputs/Radio.vue";
import { StarIcon } from "@heroicons/vue/24/outline";
import { ServiceResponseDTO } from "src/domain/dtos/serviceResponse.dto.js";
import {
  BrazilianState,
  BrazilianStateLabels,
} from "src/infrastructure/utils/enumState.js";
import { brasilApiRepository } from "src/infrastructure/external/brasilAPi.js";
import { useCaregiverFilters } from "src/interface/hooks/useFilters.js";
import { PetSpecies, PetSpeciesLabels } from "@packages";

const props = defineProps<{
  services: ServiceResponseDTO[];
  loading: boolean;
}>();

const { setFilters } = useCaregiverFilters();

const selectedServices = ref<number[]>([]);
const rating = ref<number | null>(null);
const petTypes = ref<PetSpecies[]>([]);

const selectedState = ref<BrazilianState | "">("");
const selectedCity = ref<string>("");

const cities = ref<{ nome: string }[]>([]);
const loadingCities = ref(false);

const petSpeciesOptions = Object.values(PetSpecies);

watch(selectedState, async (uf) => {
  selectedCity.value = "";
  cities.value = [];

  if (!uf) return;

  try {
    loadingCities.value = true;

    const data = await brasilApiRepository.getCitiesByState(uf);
    cities.value = data;
  } catch (error) {
    console.error("Erro ao carregar cidades", error);
  } finally {
    loadingCities.value = false;
  }
});

watch(
  [selectedServices, rating, selectedState, selectedCity, petTypes],
  () => {
    setFilters({
      serviceIds: selectedServices.value,
      minRating: rating.value || undefined,
      state: selectedState.value || undefined,
      city: selectedCity.value || undefined,
      petTypes: petTypes.value,
    });
  },
  { deep: true },
);
</script>

<template>
  <aside
    class="w-full max-w-lg min-h-screen p-6 bg-secondary border-r border-white/10"
  >
    <header class="mb-6">
      <h1 class="text-xl font-bold text-details">
        Encontre o melhor cuidador para seu pet
      </h1>
      <p class="text-white/60 mt-1 text-sm">Refine sua busca com filtros</p>
    </header>

    <form class="flex flex-col gap-8">
      <section>
        <h2 class="font-semibold text-white mb-3">Serviços desejados</h2>
        <div v-if="loading" class="text-white/60 text-sm">
          Carregando serviços...
        </div>

        <div v-else class="flex flex-col gap-3">
          <Checkbox
            v-for="service in services"
            :key="service.id"
            size="lg"
            v-model="selectedServices"
            :value="service.id"
            :label="service.name"
          />
        </div>
      </section>

      <section class="space-y-4">
        <div>
          <label class="block font-semibold text-white mb-2 text-sm">
            Estado
          </label>

          <select
            v-model="selectedState"
            class="w-full h-12 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details text-sm"
          >
            <option value="">Selecione o estado</option>

            <option
              v-for="uf in Object.values(BrazilianState)"
              :key="uf"
              :value="uf"
            >
              {{ BrazilianStateLabels[uf] }}
            </option>
          </select>
        </div>
        <div>
          <label class="block font-semibold text-white mb-2 text-sm">
            Cidade
          </label>

          <select
            v-model="selectedCity"
            :disabled="!selectedState || loadingCities"
            class="w-full h-12 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details text-sm disabled:opacity-50"
          >
            <option value="">
              {{ loadingCities ? "Carregando..." : "Selecione a cidade" }}
            </option>

            <option v-for="city in cities" :key="city.nome" :value="city.nome">
              {{ city.nome }}
            </option>
          </select>
        </div>
      </section>

      <section>
        <h2 class="font-semibold text-white mb-8">Avaliação mínima</h2>

        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-6">
            <Radio v-for="n in 5" v-model="rating" :value="n">
              <p class="text-sm text-white w-6">{{ n }}+</p>
              <StarIcon
                v-for="i in n"
                :key="i"
                class="w-5 h-5 text-stars fill-stars"
              />
            </Radio>
          </div>
        </div>
      </section>
      <section>
        <h2 class="font-semibold text-white mb-3">Tipo de animal:</h2>
        <div class="flex flex-col gap-6">
          <Checkbox
            v-for="type in petSpeciesOptions"
            :key="type"
            size="lg"
            v-model="petTypes"
            :value="type"
            :label="PetSpeciesLabels[type]"
          />
        </div>
      </section>
    </form>
  </aside>
</template>
