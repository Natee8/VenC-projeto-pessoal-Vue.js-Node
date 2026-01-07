<script setup lang="ts">
import { socialsFooter } from '../../../config/home/socialsFooter';
</script>

<template>
  <footer class="bg-secondary w-full py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between gap-10 text-white">
    
    <!-- Logo + redes sociais -->
    <div class="flex flex-col gap-4">
      <img src="/assets/logos/logoWhite.svg" alt="Logo" class="w-32" />
      <div class="flex gap-4 mt-4">
        <a
          v-for="social in socialsFooter"
          :key="social.name"
          :href="social.link"
          target="_blank"
        >
          <img :src="social.icon" :alt="social.name" class="w-6 h-6 hover:opacity-80 transition" />
        </a>
      </div>
    </div>

    <!-- Links -->
    <div class="flex flex-col md:flex-row justify-around w-full gap-12">
      
      <ul class="flex flex-col gap-2">
        <li class="font-bold">
         Serviços
        </li>
        <li>
          <a href="#" class="hover:text-details transition-colors">Hospedagem</a>
        </li>
        <li>
          <a href="#" class="hover:text-details transition-colors">Petsitter</a>
        </li>
      </ul>

      <ul class="flex flex-col gap-2">
        <li class="font-bold">
          Empresa
        </li>
        <li>
          <a href="#" class="hover:text-details transition-colors">Sobre</a>
        </li>
        <li>
          <a href="#" class="hover:text-details transition-colors">Para Tutores</a>
        </li>
        <li>
          <a href="#" class="hover:text-details transition-colors">Para Cuidadores</a>
        </li>
      </ul>

      <ul class="flex flex-col gap-2">
        <li class="font-bold">
          Suporte
        </li>
        <li>
          <a href="#" class="hover:text-details transition-colors">Termos de Uso</a>
        </li>
        <li>
          <a href="#" class="hover:text-details transition-colors">Política de Privacidade</a>
        </li>
        <li>
          <a href="#" class="hover:text-details transition-colors">Política de Cookies</a>
        </li>
      </ul>

    </div>
    
  </footer>
</template>
