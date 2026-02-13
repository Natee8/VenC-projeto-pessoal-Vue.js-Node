<script></script>
<template>
  <div class="flex items-center gap-5">
    <button
      @click="$router.back()"
      class="h-12 w-40 bg-details rounded-lg text-white font-semibold hover:bg-secondary transition"
    >
      <div class="flex items-center gap-2 justify-center">
        <i class="fa-solid fa-arrow-left"></i>
        <h1>voltar</h1>
      </div>
    </button>
  </div>
</template>
