<script setup lang="ts">
import { computed } from "vue";
import type { RadiusSelectorProps } from "./types/radiusTypes";

const props = withDefaults(defineProps<RadiusSelectorProps>(), {
  min: 5,
  max: 64,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100;
});

const updateValue = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value);
  emit("update:modelValue", value);
};
</script>
<template>
  <div class="flex flex-col gap-8 w-full">
    <h1 class="text-2xl font-bold text-white text-center">
      {{ title }}
    </h1>

    <div class="text-center text-white text-lg font-semibold">
      {{ modelValue }} km
    </div>

    <div class="relative w-full">
      <input
        type="range"
        :min="min"
        :max="max"
        :value="modelValue"
        @input="updateValue"
        class="w-full appearance-none bg-transparent cursor-pointer"
      />

      <div
        class="absolute top-1/2 left-0 w-full h-2 bg-white/30 rounded-full -translate-y-1/2 pointer-events-none"
      ></div>

      <div
        class="absolute top-1/2 left-0 h-2 bg-details rounded-full -translate-y-1/2 pointer-events-none"
        :style="{ width: percentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #4f46e5;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

input[type="range"]::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #4f46e5;
  cursor: pointer;
}
</style>
