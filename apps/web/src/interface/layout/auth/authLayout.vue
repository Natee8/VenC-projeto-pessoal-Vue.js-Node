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
        class="absolute select-none pointer-events-none"
        width="200"
      />
    </div>

    <div class="flex-1 px-32 pb-32">
      <div class="flex items-center h-28">
        <ButtonBack />
      </div>

      <slot />
    </div>

    <img
      src="/assets/auth/detailLeft.svg"
      class="absolute bottom-0 select-none pointer-events-none"
      width="200"
    />
  </div>
</template>
