<script setup lang="ts">
import Footer from './interface/components/footer/Footer.vue';
import Header from './interface/components/nav/Header.vue';
import Home from './interface/view/home/Home.vue';


</script>

<template>
  <div class="min-h-screen">
    <Header />
    <main class="pt-24 w-full h-auto min-h-screen">
      <Home />
    </main>
    <Footer/>
  </div>
</template>
