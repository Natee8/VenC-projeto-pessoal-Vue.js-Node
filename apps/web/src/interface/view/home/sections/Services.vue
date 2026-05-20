<script setup lang="ts">
import { servicesConfig } from "../../../../config/home/serviceCards";
import ServicesHomeCards from "../../../components/cards/ServicesHomeCards.vue";

function handleServiceAction(serviceType: string) {
  console.log("Serviço selecionado:", serviceType);
}
</script>

<template>
  <section class="bg-bgColor">
    <div class="min-h-[80vh] py-16 md:py-20 xl:py-28 px-4 sm:px-6 md:px-10 xl:px-20 h-auto w-full">
      <div class="flex flex-col text-center items-center gap-5">
        <h1 class="text-3xl md:text-4xl font-bold text-texts-primary-dark">
          Serviços oferecidos em nossa plataforma!
        </h1>
        <p class="w-full md:w-[75%] xl:w-[60%] font-medium text-texts-primary-dark/70">
          Aqui você encontra dog walkers e cuidadores verificados, escolhe quem
          combina com você e com seu pet, e pode entrar em contato direto, sem
          intermediários nem enrolação.
        </p>
      </div>

      <div class="mt-12 md:mt-20 xl:mt-28 flex flex-wrap gap-8 md:gap-12 xl:gap-24 justify-center xl:justify-around">
        <ServicesHomeCards
          v-for="service in servicesConfig"
          :key="service.type"
          :service="service"
          @action="handleServiceAction"
        />
      </div>
    </div>
  </section>
</template>
