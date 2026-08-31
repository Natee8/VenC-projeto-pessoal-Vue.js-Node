<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { profileRepository } from "src/infrastructure/repositories/profileRepository";
import CardPhoto from "src/interface/components/profile/CardPhoto.vue";
import CardService from "src/interface/components/profile/CardService.vue";

interface Service {
  id: number;
  name: string;
  price: number;
  description: string;
}

const profile = ref<any>(null);
const loading = ref(true);

onMounted(async () => {
  try {
    profile.value = await profileRepository.getProfile();
  } catch (error) {
    console.error("Erro ao carregar perfil:", error);
  } finally {
    loading.value = false;
  }
});

const services = computed<Service[]>(() => {
  return (profile.value?.caregiverProfile?.services ?? []).map((s: any) => ({
    id: s.id,
    name: s.service.name,
    price: s.price,
    description: s.description ?? "",
  }));
});
</script>

<template>
  <section class="py-10 px-72 flex flex-col gap-10">
    <CardPhoto :profile="profile" :loading="loading" />
    <CardService
      v-if="!loading"
      :services="services"
      :averagePrice="profile.caregiverProfile.averagePrice"
    />
  </section>
</template>
