<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
import { Props } from "./types/carregiverCards";
import { computed } from "vue";

const props = defineProps<Props>();

const emit = defineEmits(["viewProfile", "requestQuote"]);

const hasPrice = computed(() => {
  return props.price !== null && props.price !== undefined;
});

const formattedPrice = computed(() => {
  if (!hasPrice.value) return "?";
  return `R$ ${props.price.toFixed(2)}`;
});

const initial = computed(() => {
  if (!props.name) return "?";
  return props.name.charAt(0).toUpperCase();
});
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-md p-6 flex flex-col gap-6 min-w-[1000px]"
  >
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

          <span v-else class="text-lg font-semibold text-gray-600">
            {{ initial }}
          </span>
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

      <!-- DIREITA (PREÇO) -->
      <div class="flex flex-col items-end">
        <div class="flex justify-end">
          <div
            v-if="!hasPrice"
            class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold text-sm cursor-help"
            title="Entre em contato para saber o valor"
          >
            ?
          </div>

          <p v-else class="text-lg font-bold text-orange-500 leading-none">
            {{ formattedPrice }}
          </p>
        </div>

        <p class="text-sm text-gray-500">A partir de</p>
      </div>
    </div>

    <!-- DESCRIÇÃO -->
    <p
      class="leading-relaxed"
      :class="description ? 'text-gray-600' : 'text-gray-400 italic'"
    >
      {{
        description ||
        "Este cuidador ainda não adicionou uma descrição. Entre em contato para saber mais."
      }}
    </p>

    <!-- SERVIÇOS -->
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

    <!-- AÇÕES -->
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
