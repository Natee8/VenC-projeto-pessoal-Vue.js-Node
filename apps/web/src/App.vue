<script setup lang="ts">
import Footer from "./interface/components/footer/Footer.vue";
import Header from "./interface/components/nav/Header.vue";
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <main class="pt-20 w-full h-auto min-h-screen">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
