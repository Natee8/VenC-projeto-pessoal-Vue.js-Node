<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { cepService } from "@/infrastructure/utils/cepService";
import { BRAZIL_STATES } from "@/types/IStates";
import RadiusComponent from "../utils/RadiusComponent.vue";

const props = defineProps({
  street: String,
  number: String,
  neighborhood: String,
  city: String,
  state: String,
  zipCode: String,
  serviceRadius: Number,
  isLoading: Boolean,
});

const emit = defineEmits<{
  (e: "update:street", val: string): void;
  (e: "update:number", val: string): void;
  (e: "update:neighborhood", val: string): void;
  (e: "update:city", val: string): void;
  (e: "update:state", val: string): void;
  (e: "update:zipCode", val: string): void;
  (e: "update:serviceRadius", val: number): void;
  (e: "submit"): void;
}>();

let timeout: any;

const serviceRadiusModel = computed<number>({
  get: () => props.serviceRadius ?? 5,
  set: (val) => emit("update:serviceRadius", val),
});

watch(
  () => props.zipCode,
  (newCep) => {
    const cep = (newCep || "").replace(/\D/g, "");

    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      if (cep.length !== 8) return;

      const data = await cepService.getAddressByCep(cep);
      if (!data) return;

      emit("update:street", data.logradouro || "");
      emit("update:neighborhood", data.bairro || "");
      emit("update:city", data.localidade || "");
      emit("update:state", data.uf || "");
    }, 500);
  },
);

const handleSubmit = (e: Event) => {
  e.preventDefault();

  emit("submit");
};

const updateField = (event: Event, emitName: string) => {
  const target = event.target as HTMLInputElement | HTMLSelectElement;
  emit(emitName as any, target.value);
};
</script>

<template>
  <form class="flex flex-col gap-5" @submit="handleSubmit">
    <div class="flex flex-col gap-2">
      <label for="zipCode" class="text-white font-semibold">CEP</label>
      <input
        :value="zipCode"
        @input="(e) => updateField(e, 'update:zipCode')"
        type="text"
        id="zipCode"
        placeholder="Digite o CEP"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
      />
    </div>

    <div class="flex gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label for="state" class="text-white font-semibold">Estado</label>

        <select
          :value="state"
          @change="(e) => updateField(e, 'update:state')"
          id="state"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        >
          <option value="" disabled>Selecione o estado</option>

          <option v-for="s in BRAZIL_STATES" :key="s.value" :value="s.value">
            {{ s.label }}
          </option>
        </select>
      </div>
    </div>

    <div class="flex gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label for="city" class="text-white font-semibold">Cidade</label>
        <input
          :value="city"
          @input="(e) => updateField(e, 'update:city')"
          type="text"
          id="city"
          placeholder="Digite a cidade"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />
      </div>

      <div class="flex-1 flex flex-col gap-2">
        <label for="neighborhood" class="text-white font-semibold"
          >Bairro</label
        >
        <input
          :value="neighborhood"
          @input="(e) => updateField(e, 'update:neighborhood')"
          type="text"
          id="neighborhood"
          placeholder="Digite o bairro"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />
      </div>
    </div>

    <div class="flex gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label for="street" class="text-white font-semibold">Rua</label>
        <input
          :value="street"
          @input="(e) => updateField(e, 'update:street')"
          type="text"
          id="street"
          placeholder="Digite a rua"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />
      </div>

      <div class="flex-1 flex flex-col gap-2">
        <label for="number" class="text-white font-semibold">Número</label>
        <input
          :value="number"
          @input="(e) => updateField(e, 'update:number')"
          type="text"
          id="number"
          placeholder="Digite o número"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />
      </div>
    </div>

    <div class="my-5">
      <radius-component
        v-model="serviceRadiusModel"
        title="Escolha o raio do seu atendimento"
        :min="5"
        :max="64"
      />
    </div>

    <button
      type="submit"
      :disabled="isLoading"
      class="w-full h-16 bg-details text-white font-semibold rounded-lg mt-6 hover:opacity-90 transition disabled:opacity-50"
    >
      <slot>{{ isLoading ? "Continuar" : "Continuar" }}</slot>
    </button>
  </form>
</template>
