<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { profileRepository } from "src/infrastructure/repositories/profileRepository";
import CardPhoto from "src/interface/components/profile/CardPhoto.vue";
import CardService from "src/interface/components/profile/CardService.vue";

const profile = ref<any>(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await profileRepository.getProfile();
    profile.value = response.data;
  } catch (error) {
    console.error("Erro ao carregar perfil:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section class="py-10 px-72">
    <CardPhoto :profile="profile" :loading="loading" />
    <CardService />
  </section>
</template>
