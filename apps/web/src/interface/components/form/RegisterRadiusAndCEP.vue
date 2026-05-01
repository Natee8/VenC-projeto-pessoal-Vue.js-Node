<script setup lang="ts">
import { computed, ref, watch } from "vue";
import RadiusComponent from "../utils/RadiusComponent.vue";
import { cepService } from "src/infrastructure/utils/cepService";
import { BRAZIL_STATES } from "src/types/IStates";
import {
  RegisterRadiusAndCEPEmits,
  RegisterRadiusAndCEPProps,
} from "./types/propsRegister";
import { RegisterRadiusAndCepErrors } from "./types/typeErrors";
import { registerRadiusAndCepSchema } from "./schemas/radiusAndCep";

const props = defineProps<RegisterRadiusAndCEPProps>();
const emit = defineEmits<RegisterRadiusAndCEPEmits>();
const errors = ref<RegisterRadiusAndCepErrors>({});

let timeout: ReturnType<typeof setTimeout>;

const updateField = (event: Event, emitName: string) => {
  const target = event.target as HTMLInputElement | HTMLSelectElement;

  emit(emitName as any, target.value);
};

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

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  errors.value = {};

  try {
    await registerRadiusAndCepSchema.validate(
      {
        zipCode: props.zipCode,
        state: props.state,
        city: props.city,
        neighborhood: props.neighborhood,
        street: props.street,
        number: props.number,
        serviceRadius: props.serviceRadius,
      },
      {
        abortEarly: false,
      },
    );

    emit("submit");
  } catch (error: any) {
    const validationErrors = error.inner?.length ? error.inner : [error];

    validationErrors.forEach((err: any) => {
      const field = err.path as keyof RegisterRadiusAndCepErrors;

      errors.value[field] = err.message;
    });
  }
};
</script>

<template>
  <form class="flex flex-col gap-5 md:gap-6" @submit="handleSubmit">
    <div class="flex flex-col gap-2">
      <label for="zipCode" class="text-white font-semibold"> CEP </label>

      <input
        :value="zipCode"
        @input="(e) => updateField(e, 'update:zipCode')"
        type="text"
        id="zipCode"
        placeholder="Digite o CEP"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
      />

      <span v-if="errors.zipCode" class="text-red-400 text-sm">
        {{ errors.zipCode }}
      </span>
    </div>

    <div class="flex gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label for="state" class="text-white font-semibold"> Estado </label>

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

        <span v-if="errors.state" class="text-red-400 text-sm">
          {{ errors.state }}
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label for="city" class="text-white font-semibold"> Cidade </label>

        <input
          :value="city"
          @input="(e) => updateField(e, 'update:city')"
          type="text"
          id="city"
          placeholder="Digite a cidade"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />

        <span v-if="errors.city" class="text-red-400 text-sm">
          {{ errors.city }}
        </span>
      </div>

      <div class="flex-1 flex flex-col gap-2">
        <label for="neighborhood" class="text-white font-semibold">
          Bairro
        </label>

        <input
          :value="neighborhood"
          @input="(e) => updateField(e, 'update:neighborhood')"
          type="text"
          id="neighborhood"
          placeholder="Digite o bairro"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />

        <span v-if="errors.neighborhood" class="text-red-400 text-sm">
          {{ errors.neighborhood }}
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label for="street" class="text-white font-semibold"> Rua </label>

        <input
          :value="street"
          @input="(e) => updateField(e, 'update:street')"
          type="text"
          id="street"
          placeholder="Digite a rua"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />

        <span v-if="errors.street" class="text-red-400 text-sm">
          {{ errors.street }}
        </span>
      </div>

      <div class="flex-1 flex flex-col gap-2">
        <label for="number" class="text-white font-semibold"> Número </label>

        <input
          :value="number"
          @input="(e) => updateField(e, 'update:number')"
          type="text"
          id="number"
          placeholder="Digite o número"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />

        <span v-if="errors.number" class="text-red-400 text-sm">
          {{ errors.number }}
        </span>
      </div>
    </div>

    <div class="my-5">
      <RadiusComponent
        v-model="serviceRadiusModel"
        title="Escolha o raio do seu atendimento"
        :min="5"
        :max="64"
      />

      <span v-if="errors.serviceRadius" class="text-red-400 text-sm">
        {{ errors.serviceRadius }}
      </span>
    </div>

    <button
      type="submit"
      :disabled="isLoading"
      class="w-full h-16 bg-details text-white font-semibold rounded-lg mt-6 hover:opacity-90 transition disabled:opacity-50"
    >
      <slot>
        {{ isLoading ? "Continuar..." : "Continuar" }}
      </slot>
    </button>
  </form>
</template>
