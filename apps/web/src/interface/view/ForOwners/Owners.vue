<script setup lang="ts">
import Faq from "./Faq.vue";
</script>

<template>
  <section class="pt-20 px-36">
    <div class="w-full flex justify-center gap-20 items-center">
      <div class="flex flex-col justify-center max-w-lg">
        <h1 class="text-6xl font-bold text-gray-800 leading-tight">
          Seu pet merece o <br />
          <span class="text-primary">Melhor Cuidado!</span>
        </h1>

        <p class="mt-4 text-gray-600">
          Aqui você encontra dog walkers e cuidadores verificados, escolhe quem
          combina com você e com seu pet, e pode entrar em contato direto, sem
          intermediários nem enrolação.
        </p>

        <button
          class="mt-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Criar anuncio
        </button>
      </div>

      <div class="relative">
        <img
          src="/assets/for/owner/bgImage.svg"
          alt=""
          class="w-[750px] h-[470px] object-cover rounded-3xl"
        />

        <div
          class="absolute bottom-4 left-4 bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2"
        >
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          <span class="text-sm text-gray-700">Cuidadores Verificados </span>
        </div>
      </div>
    </div>

    <div class="mt-24 text-center">
      <h2 class="text-4xl font-bold text-gray-800">Como funciona?</h2>

      <p class="text-gray-600 mt-2 text-lg">
        Em três passos simples seu pet está em boas mãos, com cuidadores
        verificados
      </p>
    </div>
    <div class="max-w-8xl min-h-[300px] mt-16 grid md:grid-cols-3 gap-16 px-4">
      <!-- CARD 1 -->
      <div class="bg-white border rounded-xl p-8 text-center relative">
        <div
          class="absolute -top-10 left-6 w-16 h-16 bg-details text-white font-bold rounded-full flex items-center justify-center shadow"
        >
          1
        </div>

        <div
          class="w-20 h-20 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center mb-5"
        >
          <i class="fa-solid fa-user-plus text-3xl"></i>
        </div>

        <h3 class="font-semibold text-gray-800 text-lg">Cadastre-se</h3>

        <p class="text-sm text-gray-500 mt-2 leading-relaxed">
          Crie sua conta gratuitamente e comece em poucos minutos. É rápido,
          simples e você já pode começar a buscar cuidadores.
        </p>
      </div>

      <!-- CARD 2 -->
      <div class="bg-white border rounded-xl p-8 text-center relative">
        <div
          class="absolute -top-10 left-6 w-16 h-16 bg-details text-white font-bold rounded-full flex items-center justify-center shadow"
        >
          2
        </div>

        <div
          class="w-20 h-20 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center mb-5"
        >
          <i class="fa-solid fa-pen-to-square text-3xl"></i>
        </div>

        <h3 class="font-semibold text-gray-800 text-lg">
          Crie um anúncio para cuidado do seu pet
        </h3>

        <p class="text-sm text-gray-500 mt-2 leading-relaxed">
          Descreva as necessidades do seu pet, datas e preferências. Assim,
          cuidadores ideais poderão encontrar e se candidatar ao seu anúncio.
        </p>
      </div>

      <!-- CARD 3 -->
      <div class="bg-white border rounded-xl p-8 text-center relative">
        <div
          class="absolute -top-10 left-6 w-16 h-16 bg-details text-white font-bold rounded-full flex items-center justify-center shadow"
        >
          3
        </div>

        <div
          class="w-20 h-20 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center mb-5"
        >
          <i class="fa-solid fa-shield-dog text-4xl"></i>
        </div>

        <h3 class="font-semibold text-gray-800 text-lg">
          Contrate cuidadores verificados
        </h3>

        <p class="text-sm text-gray-500 mt-2 leading-relaxed">
          Compare perfis, avaliações e escolha cuidadores confiáveis para
          garantir o melhor cuidado para o seu pet.
        </p>
      </div>
    </div>
  </section>
  <section class="pt-28">
    <Faq />
  </section>
</template>
