<script setup lang="ts">
import { computed, ref } from 'vue'
import { Routes } from '../../../router/routes'
import NavAnimation from '../texts/NavAnimation.vue'
import { HeaderByRole } from '../../../config/home/headerConfig'
import { UserIcon } from '@heroicons/vue/16/solid'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/outline'

// 🔥 MOCK DE AUTH (TESTE LOCAL)

const isAuthenticated = ref(false)


// muda aqui pra testar 👇
// 'OWNER' | 'CAREGIVER' | null
const userRole = ref<'OWNER' | 'CAREGIVER' | null >(null)


const headerItems = computed(() => {
  if (!isAuthenticated.value || !userRole.value) {
    return HeaderByRole.DEFAULT
  }

  return HeaderByRole[userRole.value]
})
  const showAuthButtons = computed(() => !isAuthenticated.value)
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-headerColor/60 backdrop-blur-sm border-b border-borderDefault z-50">
    <div
      class="w-full mx-auto px-16 h-20 flex items-center justify-between"
    >
      <RouterLink :to="Routes.home" class="flex items-center">
        <img width="90" src="/assets/logos/logoBlue.svg" alt="Logotipo Venca" />
      </RouterLink>
        <nav>
          <ul class="flex items-center gap-20 font-semibold text-texts-primary-dark">
            <li
              v-for="item in headerItems"
              :key="item.id"
              class="group cursor-pointer"
            >
              <NavAnimation>
                {{ item.label }}
              </NavAnimation>
            </li>
          </ul>
        </nav>
          <div v-if="showAuthButtons" class="flex items-center gap-6">
          <button
            class="w-32 rounded-xl h-8 border border-primary/50
                  hover:bg-secondary transition-all
                  hover:border-secondary hover:text-white
                  text-texts-primary font-semibold"
          >
            Login
          </button>

          <button
            class="w-32 h-8 rounded-xl bg-primary
                  hover:bg-primaryHover transition-all
                  text-white font-semibold"
          >
            Cadastrar
          </button>
        </div>

        <div v-else class="flex items-center justify-center gap-6">
          <div
            class="h-10 w-10 bg-secondary transition-transform duration-200
                  hover:scale-105 cursor-pointer hover:bg-secondary/90
                  rounded-full flex items-center justify-center"
          >
            <UserIcon class="w-5 h-5 text-white/90" />
          </div>

          <div
            class="h-10 px-4 bg-gray-200 border border-gray-300
                  transition-transform duration-200
                  hover:scale-105 hover:bg-red-600/90
                  hover:border-red-600 hover:text-white
                  flex gap-3 cursor-pointer rounded items-center"
          >
            <p class="font-semibold">Sair</p>
            <ArrowRightEndOnRectangleIcon class="w-6 h-6" />
          </div>
        </div>
    </div>
  </header>
</template>
