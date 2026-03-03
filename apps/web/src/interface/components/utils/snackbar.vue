<script setup lang="ts">
import type { SnackbarProps } from "./types/types";

defineProps<SnackbarProps>();
</script>

<template>
  <transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-lg text-white font-semibold"
      :class="type === 'success' ? 'bg-green-500' : 'bg-red-500'"
    >
      {{ message }}
    </div>
  </transition>
</template>
