<script setup lang="ts">
import { reviews } from "../../../../config/home/reviews";
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { socials } from "../../../../config/home/socialRedes";

const visibleCards = ref(3);
const transitionTime = 500;
const total = reviews.length;
const currentIndex = ref(visibleCards.value);
const isTransitioning = ref(true);
let interval: number | undefined;

const getVisibleCardsByViewport = () => {
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1280) return 2;
  return 3;
};

const buildSlides = (cardsCount: number) => [
  ...reviews.slice(-cardsCount),
  ...reviews,
  ...reviews.slice(0, cardsCount),
];
const slides = ref(buildSlides(visibleCards.value));

const nextSlide = async () => {
  isTransitioning.value = true;
  currentIndex.value += 1;
};

const goToSlide = async (index: number) => {
  isTransitioning.value = true;
  currentIndex.value = index + visibleCards.value;
};

const handleTransitionEnd = async () => {
  if (currentIndex.value >= total + visibleCards.value) {
    isTransitioning.value = false;
    currentIndex.value = visibleCards.value; 
    await nextTick();
    isTransitioning.value = true;
  }
  if (currentIndex.value < visibleCards.value) {
    isTransitioning.value = false;
    currentIndex.value = total + visibleCards.value - 1;
    await nextTick();
    isTransitioning.value = true;
  }
};

const syncCarouselByViewport = () => {
  const nextVisibleCards = getVisibleCardsByViewport();
  if (nextVisibleCards === visibleCards.value) return;

  visibleCards.value = nextVisibleCards;
  slides.value = buildSlides(nextVisibleCards);
  isTransitioning.value = false;
  currentIndex.value = nextVisibleCards;
};

onMounted(() => {
  syncCarouselByViewport();
  window.addEventListener("resize", syncCarouselByViewport);
  interval = window.setInterval(nextSlide, 4000);
});

onUnmounted(() => {
  window.removeEventListener("resize", syncCarouselByViewport);
  if (interval) clearInterval(interval);
});
</script>

<template>
  <section
    class="py-14 md:py-20 xl:py-28 px-4 sm:px-6 md:px-10 xl:px-20 flex flex-col items-center gap-10 bg-bgColor"
  >
    <div
      class="flex flex-col items-center gap-12 md:gap-16 xl:gap-20 py-8 md:py-12 xl:py-16 w-full"
    >
      <div class="w-full flex flex-col items-center gap-5">
        <h1
          class="text-3xl md:text-4xl font-bold text-texts-primary-dark text-center"
        >
          Siga-nos nas redes sociais!
        </h1>
        <p
          class="w-full md:w-[75%] xl:w-[60%] font-medium text-texts-primary-dark/70 text-center"
        >
          Aqui você encontra dog walkers e cuidadores verificados, escolhe quem
          combina com você e com seu pet, e pode entrar em contato direto, sem
          intermediários nem enrolação.
        </p>
      </div>

      <div
        class="flex flex-wrap w-full justify-center xl:justify-between gap-3"
      >
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          target="_blank"
          class="bg-primary w-full sm:w-[16rem] h-12 rounded-xl flex items-center justify-center gap-3 hover:bg-primaryHover hover:scale-105 transition"
        >
          <component
            :is="social.icon"
            :size="32"
            weight="fill"
            :class="['text-white']"
          />
          <p class="text-white font-semibold">{{ social.name }}</p>
        </a>
      </div>
    </div>

    <div class="relative w-full max-w-[1500px] overflow-hidden py-10 md:py-16">
      <div
        class="flex gap-4 md:gap-6"
        :style="{
          transform: `translateX(-${(100 / visibleCards) * currentIndex}%)`,
          transition: isTransitioning
            ? `transform ${transitionTime}ms`
            : 'none',
        }"
        @transitionend="handleTransitionEnd"
      >
        <div
          v-for="(review, index) in slides"
          :key="index"
          class="bg-secondary rounded-xl flex-shrink-0 w-full md:w-[calc(100%/2-0.75rem)] xl:w-[calc(100%/3-1rem)] min-h-[250px] p-6 flex flex-col gap-4"
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
          :class="
            (currentIndex - visibleCards) % total === index
              ? 'bg-primary'
              : 'bg-gray-300'
          "
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
    <div class="h-28 w-full flex items-center justify-center">
      <button
        class="w-full sm:w-[16rem] h-12 rounded-xl bg-details text-white font-semibold hover:scale-105 hover:bg-primary transition-all"
      >
        Buscar serviços
      </button>
    </div>
  </section>
</template>
