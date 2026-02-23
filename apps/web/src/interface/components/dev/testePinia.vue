<script setup lang="ts">
import { useCounterStore } from "../../../infrastructure/stores/teste/testecount.store";

const counter = useCounterStore();
</script>

<template>
  <div class="p-6 text-white">
    <h1 class="text-2xl mb-4">Teste Pinia</h1>

    <div class="text-xl mb-4">
      Contador: <strong>{{ counter.count }}</strong>
    </div>

    <div class="flex gap-3">
      <button
        class="bg-blue-500 px-4 py-2 rounded-xl"
        @click="counter.increment()"
      >
        +
      </button>

      <button
        class="bg-red-500 px-4 py-2 rounded-xl"
        @click="counter.decrement()"
      >
        -
      </button>
    </div>
  </div>
</template>
