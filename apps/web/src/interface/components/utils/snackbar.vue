<script setup lang="ts">
import type { SnackbarProps } from "../../types/snackbar";

defineProps<SnackbarProps>();
</script>

<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-lg text-white font-semibold"
      :class="type === 'success' ? 'bg-green-500' : 'bg-red-500'"
    >
      {{ message }}
    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
