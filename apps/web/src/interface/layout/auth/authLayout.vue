<script>
import ButtonBack from "../../components/buttons/BackButton.vue";

export default {
  components: { ButtonBack },
};
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <div class="flex justify-end">
      <img
        src="/assets/auth/detailRight.svg"
        class="absolute select-none pointer-events-none w-24 sm:w-32 lg:w-44 xl:w-52"
      />
    </div>

    <div class="flex-1 px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24 pb-10 md:pb-16 xl:pb-24">
      <div class="flex items-center h-20 md:h-24 xl:h-28">
        <ButtonBack />
      </div>

      <slot />
    </div>

    <img
      src="/assets/auth/detailLeft.svg"
      class="absolute bottom-0 select-none pointer-events-none w-24 sm:w-32 lg:w-44 xl:w-52"
    />
  </div>
</template>
