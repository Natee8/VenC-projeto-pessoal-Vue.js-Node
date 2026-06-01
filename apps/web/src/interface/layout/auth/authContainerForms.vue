<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="flex justify-center items-center h-full w-full py-4 md:py-8">
    <div
      class="bg-secondary rounded-2xl md:rounded-3xl px-5 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-24 md:px-10 md:pt-12 md:pb-28 lg:px-12 lg:pb-32 xl:px-16 shadow-xl w-full max-w-[1200px]"
    >
      <div class="flex flex-col items-center text-center gap-3 mb-8 md:mb-10">
        <img
          src="/assets/logos/logoWhite.svg"
          alt="Logo vencá"
          class="w-32 md:w-36 lg:w-40"
        />

        <p v-if="subtitle" class="text-white/80 text-base md:text-lg">
          {{ subtitle }}
        </p>
      </div>

      <div class="pb-2 md:pb-4">
        <slot />
      </div>

      <div v-if="$slots.actions" class="mt-6 flex gap-4">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
