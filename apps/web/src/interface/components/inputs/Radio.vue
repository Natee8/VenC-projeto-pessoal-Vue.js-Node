<script setup lang="ts">
import { useSlots } from "vue";
import { Props } from "./types/radioTypes";

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const slots = useSlots();

function select() {
  emit("update:modelValue", props.value);
}
</script>

<template>
  <label class="flex items-center gap-3 cursor-pointer" @click="select">
    <input
      type="radio"
      class="hidden"
      :checked="modelValue === value"
      @change="select"
    />

    <div
      class="w-5 h-5 rounded-full border border-white/70 flex items-center justify-center"
    >
      <div
        class="w-2.5 h-2.5 rounded-full bg-primary transition"
        :class="modelValue === value ? 'opacity-100' : 'opacity-0'"
      />
    </div>

    <template v-if="slots.default">
      <slot />
    </template>

    <span v-else-if="label" class="text-sm text-white">
      {{ label }}
    </span>
  </label>
</template>
