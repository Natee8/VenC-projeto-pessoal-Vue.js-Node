<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/16/solid";
import { popularServices } from "../../../../config/home/popular";
import { ArrowRightIcon } from "@heroicons/vue/16/solid";
import { searchRepository } from "src/infrastructure/repositories/searchRepository";
import { useRouter } from "vue-router";
import { ref } from "vue";

const query = ref("");
const loading = ref(false);
const router = useRouter();

const handleSearch = async () => {
  const q = query.value.trim();

  if (!q || loading.value) return;

  loading.value = true;

  try {
    const services = await searchRepository.searchServices(q);

    const serviceIds = services.map((s: any) => s.id).join(",");

    if (!serviceIds) {
      return router.push({
        path: "/caregivers",
        query: { q, minRating: 4 },
      });
    }

    router.push({
      path: "/caregivers",
      query: {
        services: serviceIds,
        minRating: 4,
      },
    });
  } catch (err) {
    console.error("Erro na busca:", err);

    router.push({
      path: "/caregivers",
      query: { q, minRating: 4 },
    });
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section
    class="w-full min-h-[calc(100vh-80px)] bg-[url('/assets/home/bones.svg')] bg-repeat bg-[length:700px_760px] md:bg-[length:1000px_1080px] bg-center"
  >
    <div
      v-if="loading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <div class="flex flex-col items-center gap-3">
        <div
          class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"
        ></div>
        <p class="text-white font-medium">Buscando cuidadores...</p>
      </div>
    </div>
    <div
      class="flex flex-col-reverse xl:flex-row justify-between items-center px-4 sm:px-6 lg:px-10 xl:px-20 py-8 md:py-10 gap-10 xl:gap-24"
    >
      <div class="flex flex-col gap-8 md:gap-10 w-full">
        <div
          class="w-full max-w-60 h-12 rounded-xl bg-primary/25 font-bold flex items-center justify-center gap-3 text-primary"
        >
          <StarIcon class="w-6 h-6" fill="currentColor" />
          <p>+50 mil Pets Felizes</p>
        </div>

        <div class="flex flex-col gap-1">
          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-texts-primary-dark"
          >
            O cuidado que seu
          </h1>

          <div class="flex flex-col gap-2">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Pet merece,
            </h1>
            <img
              class="w-44 sm:w-56 lg:w-[300px]"
              src="/assets/home/line.svg"
              alt=""
            />
          </div>

          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-texts-primary-dark"
          >
            pertinho de você
          </h1>
        </div>

        <div
          class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center w-full"
        >
          <div class="relative w-full sm:w-[65%]">
            <Search
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-texts-default"
            />
            <input
              v-model="query"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="O que você precisa?"
              class="w-full h-14 pl-10 pr-3 rounded-xl border border-texts-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <button
            @click="handleSearch"
            class="flex items-center justify-center gap-2 h-14 px-6 rounded-xl bg-primary text-white font-semibold hover:bg-primaryHover transition-all cursor-pointer whitespace-nowrap"
          >
            Buscar cuidadores
            <ArrowRightIcon class="w-4 h-4" />
          </button>
        </div>

        <div
          class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
        >
          <p class="font-bold text-text-primary-dark">Populares:</p>

          <div class="flex flex-wrap gap-3">
            <div
              v-for="service in popularServices"
              :key="service.id"
              class="w-32 h-10 font-semibold text-white bg-secondary rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary/90 transition"
            >
              {{ service.label }}
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center xl:justify-end">
        <img
          class="w-full max-w-[520px] xl:max-w-[860px]"
          src="/assets/home/dogBall.svg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
