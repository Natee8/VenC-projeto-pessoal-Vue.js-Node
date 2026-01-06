<script setup lang="ts">
import { IServiceCardConfigDto } from '../../../domain/dtos/serviceOffer.dto';


defineProps<{
  service: IServiceCardConfigDto;
}>();

const emit = defineEmits<{
  (e: 'action', type: IServiceCardConfigDto['type']): void;
}>();
</script>

<template>
  <div
    class="bg-white h-auto w-[24rem] shadow-md rounded flex flex-col justify-between p-10 gap-7
           transition-transform duration-200 hover:scale-[1.02]"
  >
    <div class="flex flex-col gap-5">
        <div class="flex items-center gap-6">
      <div class="p-3 bg-details/20 rounded-lg">
        <img :src="service.icon" :alt="service.title" width="60" />
      </div>

      <h2 class="text-2xl font-bold text-texts-primary">{{ service.title }}</h2>
    </div>

    <p class="text-texts-secondary leading-relaxed">{{ service.description }}</p>
    </div>

   <div>
     <button
      class="w-full h-12 rounded-xl font-semibold bg-primary text-white
             hover:bg-primaryHover transition"
      @click="emit('action', service.type)"
    >
      {{ service.ctaLabel }}
    </button>
   </div>
  </div>
</template>
