<script setup lang="ts">
import Footer from "./interface/components/footer/Footer.vue";
import Header from "./interface/components/nav/Header.vue";
</script>

<template>
  <div class="w-full min-h-full">
    <Header />
    <main class="w-[100%] h-auto min-h-screen">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
