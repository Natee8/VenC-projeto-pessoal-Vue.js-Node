<script setup lang="ts">
import { Routes } from '../../../router/routes';
import NavAnimation from '../texts/NavAnimation.vue';
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-headerColor/60 backdrop-blur-sm border-b border-borderDefault z-50">
    <div
      class="w-full mx-auto px-16 h-26 flex items-center justify-between"
    >
      <RouterLink :to="Routes.home" class="flex items-center">
        <img width="90" src="/assets/logos/logoBlue.svg" alt="Logotipo Venca" />
      </RouterLink>

     <nav>
           <ul class="flex items-center gap-20 font-semibold text-texts-primary-dark">
                <li class="group cursor-pointer">
                    <NavAnimation>Serviços</NavAnimation>
                </li>

                <li class="group cursor-pointer">
                    <NavAnimation>Sobre</NavAnimation>
                </li>

                <li class="group cursor-pointer">
                    <NavAnimation>Para tutores</NavAnimation>
                </li>

                <li class="group cursor-pointer">
                    <NavAnimation>Para cuidadores</NavAnimation>
                </li>
                </ul>

            </nav>


      <div class="flex items-center gap-6">
        <button class="w-32 rounded-xl h-10 border border-primary/50 hover:bg-secondary transition-all hover:border-secondary hover:text-white text-texts-primary font-semibold">Login</button>
        <button class="w-32 h-10 rounded-xl bg-primary hover:bg-primaryHover transition-all text-white font-semibold">Cadastrar</button>
      </div>
    </div>
  </header>
</template>
