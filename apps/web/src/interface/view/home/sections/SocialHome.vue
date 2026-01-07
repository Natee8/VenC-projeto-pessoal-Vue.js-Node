<script setup lang="ts">
import { reviews } from '../../../../config/home/reviews';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { socials } from '../../../../config/home/socialRedes';

const visibleCards = 3;
const transitionTime = 500;

const total = reviews.length;

// clones para loop infinito
const slides = [
  ...reviews.slice(-visibleCards), // últimos N clones no início
  ...reviews,
  ...reviews.slice(0, visibleCards) // primeiros N clones no fim
];

const currentIndex = ref(visibleCards); // start no primeiro "real"
const isTransitioning = ref(true);

let interval: number;

// avança 1 card
const nextSlide = async () => {
  isTransitioning.value = true;
  currentIndex.value += 1;
};

// clicar na bolinha
const goToSlide = async (index: number) => {
  isTransitioning.value = true;
  currentIndex.value = index + visibleCards; // ajusta pro clone
};

// reset do clone para loop infinito sem engasgar
const handleTransitionEnd = async () => {
  if (currentIndex.value >= total + visibleCards) {
    isTransitioning.value = false;
    currentIndex.value = visibleCards; // volta pro real
    await nextTick();
    isTransitioning.value = true; // reativa a transição pro próximo
  }
  if (currentIndex.value < visibleCards) {
    isTransitioning.value = false;
    currentIndex.value = total + visibleCards - 1; // volta pro real
    await nextTick();
    isTransitioning.value = true;
  }
};

onMounted(() => {
  interval = window.setInterval(nextSlide, 4000);
});

onUnmounted(() => clearInterval(interval));
</script>


<template>
  <section class="py-28 px-20 flex flex-col items-center gap-10">
     <div class="flex flex-col items-center gap-20 py-16">
      <div class="w-full flex flex-col items-center gap-5">
        <h1 class="text-4xl font-bold text-texts-primary-dark">
          Siga-nos nas redes sociais!
        </h1>
        <p class="w-[60%] font-medium text-texts-primary-dark/70 text-center">
          Aqui você encontra dog walkers e cuidadores verificados, escolhe quem combina com você e com seu pet, e pode entrar em contato direto, sem intermediários nem enrolação.
        </p>
      </div>

      <div class="flex flex-wrap w-full justify-between">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          target="_blank"
          class="bg-primary w-[16rem] h-12 rounded-xl flex items-center justify-center gap-3 hover:bg-primaryHover hover:scale-105 transition"
        >
          <component :is="social.icon" :size="32" weight="fill" :class="['text-white']" />
          <p class="text-white font-semibold">{{ social.name }}</p>
        </a>
      </div>
    </div>

    <div class="relative w-full max-w-[1500px] overflow-hidden py-16">
      <div
        class="flex gap-6"
        :style="{
          transform: `translateX(-${(100 / visibleCards) * currentIndex}%)`,
          transition: isTransitioning ? `transform ${transitionTime}ms` : 'none'
        }"
        @transitionend="handleTransitionEnd"
      >
        <div
          v-for="(review, index) in slides"
          :key="index"
          class="bg-secondary rounded-xl flex-shrink-0 w-[calc(100%/3-1rem)] h-[250px] p-6 flex flex-col gap-4"
        >
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-full bg-white/90"></div>
            <p class="font-semibold text-white">{{ review.name }}</p>
          </div>
          <p class="text-white/80">“{{ review.text }}”</p>
        </div>
      </div>

      <div class="flex gap-2 justify-center mt-6">
        <span
          v-for="(_, index) in total"
          :key="index"
          class="w-3 h-3 rounded-full cursor-pointer"
          :class="(currentIndex - visibleCards) % total === index ? 'bg-primary' : 'bg-gray-300'"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
    <div class="h-28 w-full flex items-center justify-center ">
      <button class="w-[16rem] h-12 rounded-xl bg-details text-white font-semibold hover:scale-105 hover:bg-primary transition-all">Buscar serviços</button>
    </div>
  </section>
</template>
