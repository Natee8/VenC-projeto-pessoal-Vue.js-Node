<template>
  <div class="bg-white shadow p-6 rounded-2xl w-full max-w-3xl">
    <header class="flex items-center justify-between mb-4">
      <p class="text-sm font-medium text-gray-700">
        Serviços Oferecidos <span class="text-gray-400">(01)</span>
      </p>

      <button
        class="flex items-center gap-2 bg-secondary text-white text-sm px-4 py-2 rounded-lg"
      >
        <i class="fas fa-plus"></i>
        Gerenciar
      </button>
    </header>

    <div
      class="bg-[#FDE2D7] text-[#C9552A] text-xs px-4 py-2 rounded-lg flex justify-between items-center mb-4"
    >
      <span>
        Um serviço selecionado (01) deseja realmente excluir? atenção essa ação
        não poderá ser desfeita
      </span>
      <i class="fas fa-trash"></i>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-4">
        <div
          class="w-6 h-6 rounded-md border border-gray-400 flex items-center justify-center cursor-pointer"
        ></div>

        <div class="flex-1 border border-default rounded-xl p-4 bg-white">
          <div class="flex items-center gap-3 mb-2">
            <div
              class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-dog text-green-500"></i>
            </div>

            <div>
              <h1 class="text-sm font-semibold text-gray-800">
                Adestrador de cães
              </h1>
              <p class="text-xs text-gray-500">R$ 120,00</p>
            </div>
          </div>

          <p class="text-xs text-gray-600 leading-relaxed">
            Adestrador de cães especializado em comportamento canino, focado no
            treinamento positivo e no bem-estar do animal. Utiliza técnicas
            modernas e personalizadas.
          </p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <div
          class="w-6 h-6 rounded-md bg-primary flex items-center justify-center cursor-pointer"
        >
          <i class="fas fa-check text-white text-xs"></i>
        </div>

        <div class="flex-1 border border-default rounded-xl p-4 bg-white">
          <div class="flex items-center gap-3 mb-2">
            <div
              class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-dog text-green-500"></i>
            </div>

            <div>
              <h1 class="text-sm font-semibold text-gray-800">
                Adestrador de cães
              </h1>
              <p class="text-xs text-gray-500">R$ 120,00</p>
            </div>
          </div>

          <p class="text-xs text-gray-600 leading-relaxed">
            Adestrador de cães especializado em comportamento canino, focado no
            treinamento positivo e no bem-estar do animal.
          </p>
        </div>
      </div>
    </div>

    <footer class="mt-6">
      <h1 class="text-sm font-medium text-gray-700 mb-1">Preço base</h1>

      <p class="text-xs text-gray-400 mb-2">
        (mínimo global calculado com a média dos seus serviços oferecidos)
      </p>

      <input
        type="text"
        value="R$ 120,00"
        disabled
        class="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 mb-4"
      />

      <div class="flex justify-end gap-2">
        <button
          class="w-8 h-8 rounded-full bg-details flex items-center justify-center text-white"
        >
          <i class="fas fa-chevron-left text-xs"></i>
        </button>

        <button
          class="w-8 h-8 rounded-full bg-details flex items-center justify-center text-white"
        >
          <i class="fas fa-chevron-right text-xs"></i>
        </button>
      </div>
    </footer>
  </div>
</template>
