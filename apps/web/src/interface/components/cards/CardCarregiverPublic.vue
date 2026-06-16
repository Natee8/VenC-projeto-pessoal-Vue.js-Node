<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
import { Props } from "./types/carregiverCards";

const props = defineProps<Props>();

const emit = defineEmits(["viewProfile", "requestQuote"]);
</script>

<template>
  <div class="bg-white rounded-xl shadow-md p-6 flex flex-col gap-6 max-w-4xl">
    <div class="flex justify-between items-start">
      <div class="flex gap-4">
        <div
          class="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center"
        >
          <img
            v-if="avatarUrl"
            :src="avatarUrl"
            class="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 class="font-semibold text-lg text-gray-800">
            {{ name }}
          </h2>

          <div class="flex items-center gap-2 text-sm text-gray-600">
            <StarIcon class="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{{ rating }}</span>
            <span>({{ reviewsCount }})</span>
          </div>

          <p class="text-sm text-gray-500 mt-1">
            {{ location }} • {{ lastActive }}
          </p>
        </div>
      </div>

      <div class="text-right">
        <p class="text-lg font-bold text-orange-500">
          R$ {{ price.toFixed(2) }}
        </p>
        <p class="text-sm text-gray-500">/ A partir de</p>
      </div>
    </div>

    <p class="text-gray-600 text-sm leading-relaxed">
      {{ description }}
    </p>

    <div class="flex gap-2 flex-wrap">
      <span
        v-for="service in services"
        :key="service.id"
        class="px-5 py-3 text-sm rounded-full bg-primary/90 text-white"
      >
        {{ service.name }}
      </span>
    </div>

    <div class="border-t border-gray-200"></div>

    <div class="flex gap-4">
      <button
        class="flex-1 bg-secondary text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
        @click="$emit('viewProfile')"
      >
        Ver Perfil
      </button>

      <button
        class="flex-1 bg-details text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
        @click="$emit('requestQuote')"
      >
        Pedir Orçamento
      </button>
    </div>
  </div>
</template>
