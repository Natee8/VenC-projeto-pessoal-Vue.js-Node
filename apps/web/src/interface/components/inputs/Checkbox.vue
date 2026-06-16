<script setup lang="ts">
import { Props } from "./types/checkboxTypes";

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

function getSizeClasses() {
  switch (props.size) {
    case "sm":
      return {
        box: "w-4 h-4",
        icon: "w-2 h-2",
      };
    case "lg":
      return {
        box: "w-6 h-6",
        icon: "w-4 h-4",
      };
    default:
      return {
        box: "w-5 h-5",
        icon: "w-3 h-3",
      };
  }
}

function isChecked() {
  if (Array.isArray(props.modelValue)) {
    return props.value ? props.modelValue.includes(props.value) : false;
  }
  return props.modelValue;
}

function onChange(e: Event) {
  const target = e.target as HTMLInputElement;

  if (Array.isArray(props.modelValue)) {
    if (!props.value) return;

    const exists = props.modelValue.includes(props.value!);

    const newValue = exists
      ? props.modelValue.filter((v) => v !== props.value)
      : [...props.modelValue, props.value!];

    emit("update:modelValue", newValue);
  } else {
    emit("update:modelValue", target.checked);
  }
}
</script>

<template>
  <label class="flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      class="peer hidden"
      :checked="isChecked()"
      @change="onChange"
    />

    <div
      :class="[
        getSizeClasses().box,
        'rounded-lg border border-white/40 flex items-center justify-center transition-all duration-200',
        isChecked() && 'bg-primary border-primary',
      ]"
    >
      <svg
        :class="[
          getSizeClasses().icon,
          'text-white transition-opacity duration-200',
          isChecked() ? 'opacity-100' : 'opacity-0',
        ]"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    <span v-if="label" class="text-sm text-white">
      {{ label }}
    </span>
  </label>
</template>
