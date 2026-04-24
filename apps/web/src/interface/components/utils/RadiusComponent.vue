<script setup lang="ts">
import { computed, ref } from "vue";
import type { RadiusSelectorProps } from "./types/radiusTypes";
import { CheckIcon, MapPinIcon } from "@heroicons/vue/16/solid";

const props = withDefaults(defineProps<RadiusSelectorProps>(), {
  min: 5,
  max: 64,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const address = ref("Seu endereço aqui");

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100;
});

const updateValue = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value);
  emit("update:modelValue", value);
};

const radiusLevel = computed(() => {
  const value = props.modelValue;
  if (value < 20) return "Pequeno";
  if (value <= 30) return "Médio";
  return "Alto";
});
</script>

<template>
  <div class="flex flex-col gap-8 w-full">
    <div class="flex flex-col items-center gap-2">
      <h1 class="text-2xl font-bold text-white text-center">{{ title }}</h1>
      <div class="text-white text-lg font-semibold">{{ modelValue }} km</div>
    </div>

    <div class="relative w-full h-8">
      <div
        class="absolute top-1/2 left-0 w-full h-2 bg-white/30 rounded-full -translate-y-1/2 pointer-events-none"
      ></div>
      <div
        class="absolute top-1/2 left-0 h-2 bg-details rounded-full -translate-y-1/2 pointer-events-none"
        :style="{ width: percentage + '%' }"
      ></div>
      <input
        type="range"
        :min="min"
        :max="max"
        :value="props.modelValue"
        @input="updateValue"
        class="w-full h-8 appearance-none bg-transparent cursor-pointer relative z-10"
      />
    </div>

    <div
      class="flex justify-between font-semibold text-white text-1xl relative"
    >
      <span>{{ min }} km</span>
      <span class="absolute left-1/2 -translate-x-1/2"
        >{{ Math.round((min + max) / 2) }} km</span
      >
      <span>{{ max }} km</span>
    </div>

    <div class="bg-white rounded-lg p-10 shadow-md flex flex-col gap-4">
      <div class="flex gap-6">
        <div
          class="flex items-center justify-center w-10 h-10 border-2 border-green-500 rounded-full bg-white"
        >
          <CheckIcon class="w-6 h-6 text-green-500" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-3">
            <span class="font-semibold text-gray-800"
              >Área de atendimento configurada</span
            >
          </div>

          <div class="flex items-center gap-3">
            <span class="font-semibold">Endereço:</span>
            <span class="text-gray-800"> {{ address }}</span>
          </div>

          <div class="flex items-center gap-3">
            <span class="font-semibold">Raio:</span>

            <span class="text-gray-800"
              >{{ props.modelValue }} km - {{ radiusLevel }}</span
            >
          </div>
        </div>
      </div>

      <hr class="my-4 border-gray-300" />

      <div class="flex items-center gap-6 text-gray-800">
        <div
          class="flex items-center justify-center w-10 h-10 border-2 border-secondary rounded-full bg-white"
        >
          <MapPinIcon class="w-6 h-6 text-secondary" />
        </div>
        <div class="flex flex-col gap-1">
          <span class="font-semibold"
            >Você atenderá clientes em um raio de:</span
          >
          <span class="text-lg font-bold"
            >{{ props.modelValue }} quilômetros</span
          >
          <span class="font-semibold">A partir do seu endereço</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  border: 3px solid #69ce96;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

input[type="range"]::-moz-range-thumb {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  border: 3px solid #69ce96;
  cursor: pointer;
}

input[type="range"]::-moz-range-track {
  height: 25px;
  background: transparent;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 30px;
  background: transparent;
}
</style>
