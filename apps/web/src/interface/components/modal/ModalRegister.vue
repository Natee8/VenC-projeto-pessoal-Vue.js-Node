<script setup lang="ts">
import ModalBase from "./ModalBase.vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <ModalBase
    :show="props.show"
    width="800px"
    minHeight="500px"
    @close="$emit('close')"
  >
    <div
      class="flex flex-col justify-center items-center text-center px-8 py-6"
    >
      <img
        src="/assets/icons/RegisterPopup.svg"
        alt="Ilustração cadastro"
        class="w-56 mb-8"
      />

      <div class="max-w-lg">
        <h2 class="text-2xl font-bold text-texts-primary-dark mb-4">
          Escolha o tipo de cadastro
        </h2>
        <p class="text-texts-default text-base leading-relaxed font-semibold">
          Escolha o tipo de cadastro que corresponde ao seu perfil. Isso nos
          ajuda a configurar sua conta corretamente e oferecer as
          funcionalidades certas para você.
        </p>
      </div>

      <div class="flex gap-6 mt-10">
        <RouterLink :to="{ name: 'register', query: { role: 'owner' } }">
          <button
            class="flex items-center justify-center gap-3 w-48 h-16 font-semibold bg-primary text-white rounded-xl transition-transform transform hover:scale-105 hover:bg-primaryHover"
          >
            <i class="fas fa-paw text-lg"></i>
            Sou Dono
          </button>
        </RouterLink>

        <RouterLink :to="{ name: 'register', query: { role: 'carrehiver' } }">
          <button
            class="flex items-center justify-center gap-3 w-48 h-16 font-semibold bg-secondary text-white rounded-xl transition-transform transform hover:scale-105 hover:bg-secondary/90"
          >
            <i class="fas fa-heart text-lg"></i>
            Sou Cuidador
          </button>
        </RouterLink>
      </div>
    </div>
  </ModalBase>
</template>
