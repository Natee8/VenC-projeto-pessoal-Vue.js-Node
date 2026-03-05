<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import RadiusComponent from "../utils/RadiusComponent.vue";

const props = defineProps({
  street: String,
  number: String,
  neighborhood: String,
  city: String,
  state: String,
  zipCode: String,
  country: String,
  isLoading: Boolean,
});

const emit = defineEmits<{
  (e: "update:street", val: string): void;
  (e: "update:number", val: string): void;
  (e: "update:neighborhood", val: string): void;
  (e: "update:city", val: string): void;
  (e: "update:state", val: string): void;
  (e: "update:zipCode", val: string): void;
  (e: "update:country", val: string): void;
  (e: "update:serviceRadius", val: number): void;
  (e: "submit"): void;
}>();

const serviceRadius = ref(5);

const handleSubmit = (e: Event) => {
  e.preventDefault();
  emit("submit");
};
const route = useRoute();
const userType = computed(() => route.query.user as string);

const updateField = (event: Event, emitName: string) => {
  const target = event.target as HTMLInputElement;
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
        <label for="country" class="text-white font-semibold">País</label>
        <input
          :value="country"
          @input="(e) => updateField(e, 'update:country')"
          type="text"
          id="country"
          placeholder="Digite o país"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />
      </div>

      <div class="flex-1 flex flex-col gap-2">
        <label for="state" class="text-white font-semibold">Estado</label>
        <input
          :value="state"
          @input="(e) => updateField(e, 'update:state')"
          type="text"
          id="state"
          placeholder="Digite o estado"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />
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

    <div class="my-5" v-if="userType === 'carrehiver'">
      <radius-component
        v-model="serviceRadius"
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
