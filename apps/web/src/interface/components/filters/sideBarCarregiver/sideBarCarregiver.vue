<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <aside
    class="w-full max-w-lg min-h-screen p-6 bg-secondary border-r border-white/10"
  >
    <!-- HEADER -->
    <header class="mb-8">
      <h1 class="text-xl font-bold text-details">
        Encontre o melhor cuidador para seu pet
      </h1>
      <p class="text-white/60 mt-1 text-sm">Refine sua busca com filtros</p>
    </header>

    <form class="flex flex-col gap-8">
      <!-- SERVIÇOS -->
      <section>
        <h2 class="font-semibold text-white mb-3">Serviços desejados</h2>

        <div class="space-y-3">
          <label class="flex items-center gap-3 text-white cursor-pointer">
            <input
              type="checkbox"
              class="w-5 h-5 accent-primary cursor-pointer"
            />
            <span class="text-sm">Exemplo de serviço</span>
          </label>
        </div>
      </section>

      <!-- LOCALIZAÇÃO -->
      <section class="space-y-4">
        <div>
          <label class="block font-semibold text-white mb-2 text-sm">
            Cidade
          </label>

          <select
            class="w-full h-12 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details text-sm"
          >
            <option value="">Selecione a cidade</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
          </select>
        </div>

        <div>
          <label class="block font-semibold text-white mb-2 text-sm">
            Estado
          </label>

          <select
            class="w-full h-12 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details text-sm"
          >
            <option value="">Selecione o estado</option>
            <option value="sp">SP</option>
            <option value="rj">RJ</option>
          </select>
        </div>
      </section>

      <!-- AVALIAÇÃO -->
      <section>
        <h2 class="font-semibold text-white mb-3">Avaliação mínima</h2>

        <div class="flex flex-col gap-3">
          <button
            v-for="n in 5"
            :key="n"
            type="button"
            class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <input
              type="checkbox"
              class="w-5 h-5 accent-primary cursor-pointer"
            />
            <StarIcon v-for="i in n" :key="i" class="w-5 h-5 text-yellow-400" />
          </button>
        </div>
      </section>
    </form>
  </aside>
</template>
