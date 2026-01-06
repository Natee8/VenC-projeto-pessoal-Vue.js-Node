
<script setup lang="ts">
import { popularServices } from '../../../../config/home/popular';
import { ArrowRightIcon } from '@heroicons/vue/16/solid';
</script>

<template>
  <section
    class="w-full h-[100vh] bg-[url('/assets/home/bones.svg')]
           bg-repeat bg-[length:1500px_1580px] bg-center"
  >
    <div class="flex justify-between items-center px-20 py-10 gap-32">

      <div class="flex flex-col gap-10 w-full">

        <div
          class="w-60 h-12 rounded-xl bg-primary/25 font-extrabold
                 flex items-center justify-center gap-3 text-primary"
        >
          <Star class="w-6 h-6" fill="currentColor" />
          <p>+50 mil Pets Felizes</p>
        </div>

        <div class="flex flex-col gap-1">
          <h1 class="text-6xl font-bold text-texts-primary-dark">
            O cuidado que seu
          </h1>

          <div class="flex flex-col gap-2">
            <h1 class="text-6xl font-bold text-primary">
              Pet merece,
            </h1>
            <img width="400" src="/assets/home/line.svg" alt="" />
          </div>

          <h1 class="text-6xl font-bold text-texts-primary-dark">
            pertinho de você
          </h1>
        </div>

        <div class="flex gap-6 items-center">

          <div class="relative w-[70%]">
            <Search
              class="absolute left-4 top-1/2 -translate-y-1/2
                     w-5 h-5 text-texts-default"
            />
            <input
              type="text"
              placeholder="O que você precisa?"
              class="w-full h-16 pl-12 pr-4 rounded-xl
                     border border-texts-primary
                     focus:outline-none focus:ring-2
                     focus:ring-primary/30"
            />
          </div>

          <button
            class="flex items-center gap-2 h-16 px-6
                   rounded-xl bg-primary text-white
                   font-semibold hover:bg-primaryHover
                   transition-all cursor-pointer"
          >
            Buscar cuidadores
            <ArrowRightIcon class="w-4 h-4" />
          </button>

        </div>

        <div class="flex items-center gap-12">
            <p class="font-bold text-text-primary-dark">Populares:</p>

            <div
            v-for="service in popularServices"
            :key="service.id"
            class="w-36 h-12 font-semibold text-white bg-secondary
                    rounded-full flex items-center justify-center
                    cursor-pointer hover:bg-secondary/90 transition"
            >
            {{ service.label }}
            </div>
        </div>
      </div>

      <div>
        <img width="1300" src="/assets/home/dogBall.svg" alt="" />
      </div>

    </div>
  </section>
</template>
