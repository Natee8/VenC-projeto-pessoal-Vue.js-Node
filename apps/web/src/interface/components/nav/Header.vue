<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { Routes } from "../../../router/routes";
import { HeaderByRole } from "../../../config/home/headerConfig";
import ModalRegister from "../../components/modal/ModalRegister.vue";
import NavAnimation from "../texts/NavAnimation.vue";
import { useRoute } from "vue-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useAuthStore } from "src/infrastructure/stores/auth/authStore";

const modalAberta = ref(false);
const mobileMenuOpen = ref(false);
const authStore = useAuthStore();

const headerItems = computed(() => {
  if (!authStore.isAuthenticated || !authStore.userRole) {
    return HeaderByRole.DEFAULT;
  }

  return HeaderByRole[authStore.userRole];
});

const showAuthButtons = computed(() => !authStore.isAuthenticated);

const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    modalAberta.value = false;
    mobileMenuOpen.value = false;
  },
);
</script>

<template>
  <header
    class="sticky top-0 left-0 w-full bg-headerColor/60 backdrop-blur-sm border-b border-borderDefault z-50"
  >
    <div
      class="w-full mx-auto px-4 sm:px-6 lg:px-16 h-20 flex items-center justify-between gap-4"
    >
      <RouterLink :to="Routes.home" class="flex items-center">
        <img
          class="w-[74px] sm:w-[90px]"
          src="/assets/logos/logoBlue.svg"
          alt="Logotipo Venca"
        />
      </RouterLink>

      <nav class="hidden lg:block">
        <ul
          class="flex items-center gap-20 font-semibold text-texts-primary-dark"
        >
          <li
            v-for="item in headerItems"
            :key="item.id"
            class="group cursor-pointer"
          >
            <RouterLink :to="item.to">
              <NavAnimation>{{ item.label }}</NavAnimation>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div v-if="showAuthButtons" class="hidden lg:flex items-center gap-6">
        <RouterLink :to="Routes.login">
          <button
            class="w-32 rounded-xl h-8 border border-primary/50 hover:bg-secondary transition-all hover:border-secondary hover:text-white text-texts-primary font-semibold"
          >
            Login
          </button>
        </RouterLink>

        <button
          @click="modalAberta = true"
          class="w-32 h-8 rounded-xl bg-primary hover:bg-primaryHover transition-all text-white font-semibold"
        >
          Cadastrar
        </button>
      </div>

      <div v-else class="hidden lg:flex items-center justify-center gap-6">
        <div
          class="h-10 w-10 bg-secondary transition-transform duration-200 hover:scale-105 cursor-pointer hover:bg-secondary/90 rounded-full flex items-center justify-center"
        >
          <UserIcon class="w-5 h-5 text-white/90" />
        </div>

        <div
          class="h-10 px-4 bg-gray-200 border border-gray-300 transition-transform duration-200 hover:scale-105 hover:bg-red-600/90 hover:border-red-600 hover:text-white flex gap-3 cursor-pointer rounded items-center"
        >
          <p class="font-semibold">Sair</p>
          <ArrowRightEndOnRectangleIcon class="w-6 h-6" />
        </div>
      </div>

      <button
        class="lg:hidden h-10 w-10 rounded-lg border border-borderDefault flex items-center justify-center text-texts-primary-dark"
        @click="mobileMenuOpen = !mobileMenuOpen"
        :aria-label="mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'"
      >
        <XMarkIcon v-if="mobileMenuOpen" class="h-6 w-6" />
        <Bars3Icon v-else class="h-6 w-6" />
      </button>
    </div>

    <div
      v-if="mobileMenuOpen"
      class="lg:hidden border-t border-borderDefault bg-headerColor/95 backdrop-blur-sm px-4 py-4"
    >
      <ul class="flex flex-col gap-3 font-semibold text-texts-primary-dark">
        <li v-for="item in headerItems" :key="item.id">
          <RouterLink :to="item.to" class="block py-1">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>

      <div v-if="showAuthButtons" class="mt-4 flex flex-col gap-2">
        <RouterLink :to="Routes.login">
          <button
            class="w-full rounded-xl h-10 border border-primary/50 hover:bg-secondary transition-all hover:border-secondary hover:text-white text-texts-primary font-semibold"
          >
            Login
          </button>
        </RouterLink>

        <button
          @click="modalAberta = true"
          class="w-full h-10 rounded-xl bg-primary hover:bg-primaryHover transition-all text-white font-semibold"
        >
          Cadastrar
        </button>
      </div>
    </div>
  </header>

  <ModalRegister
    v-if="modalAberta"
    :show="modalAberta"
    @close="modalAberta = false"
  />
</template>
