<template>
  <div class="bg-secondary py-20 px-10 pb-28 text-white">
    <div class="max-w-4xl mx-auto">
      <!-- Título -->
      <h1 class="text-4xl font-bold text-center">FAQ</h1>
      <p class="text-center text-gray-300 mt-2">
        Perguntas e respostas frequentes
      </p>

      <!-- Lista -->
      <div class="mt-12 space-y-4">
        <!-- ITEM 1 -->
        <details class="group border-b border-white/20 pb-4">
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >
            <div class="flex items-center gap-6">
              <span class="text-lg text-gray-300 w-6">1</span>
              <span class="font-medium group-hover:text-details transition">
                Quem pode se cadastrar como cuidador?
              </span>
            </div>
            <i
              class="fa-solid fa-chevron-down text-sm transition-transform duration-300 group-open:rotate-180"
            ></i>
          </summary>
          <p class="mt-3 ml-12 text-gray-300 text-sm">
            Qualquer pessoa maior de idade que goste de animais pode se
            cadastrar e oferecer serviços na plataforma.
          </p>
        </details>

        <!-- ITEM 2 -->
        <details class="group border-b border-white/20 pb-4">
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >
            <div class="flex items-center gap-6">
              <span class="text-lg text-gray-300 w-6">2</span>
              <span class="font-medium group-hover:text-details transition">
                Que tipos de serviços posso oferecer?
              </span>
            </div>
            <i
              class="fa-solid text-sm fa-chevron-down transition-transform duration-300 group-open:rotate-180"
            ></i>
          </summary>
          <p class="mt-3 ml-12 text-gray-300 text-sm">
            Você pode oferecer hospedagem, passeios, visitas domiciliares e
            outros cuidados personalizados.
          </p>
        </details>

        <!-- ITEM 3 -->
        <details class="group border-b border-white/20 pb-4">
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >
            <div class="flex items-center gap-6">
              <span class="text-gray-300 w-6">3</span>
              <span class="font-medium group-hover:text-details transition">
                Posso escolher a região onde quero atuar?
              </span>
            </div>
            <i
              class="fa-solid fa-chevron-down text-sm transition-transform duration-300 group-open:rotate-180"
            ></i>
          </summary>
          <p class="mt-3 ml-12 text-gray-300 text-sm">
            Sim, você define sua área de atendimento e recebe propostas de
            tutores próximos.
          </p>
        </details>

        <!-- ITEM 4 -->
        <details class="group border-b border-white/20 pb-4">
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >
            <div class="flex items-center gap-6">
              <span class="text-gray-300 w-6">4</span>
              <span class="font-medium group-hover:text-details transition">
                E se um tutor cancelar o serviço?
              </span>
            </div>
            <i
              class="fa-solid fa-chevron-down text-sm transition-transform duration-300 group-open:rotate-180"
            ></i>
          </summary>
          <p class="mt-3 ml-12 text-gray-300 text-sm">
            Cancelamentos seguem regras da plataforma, garantindo segurança
            tanto para cuidadores quanto para tutores.
          </p>
        </details>

        <!-- ITEM 5 -->
        <details class="group border-b border-white/20 pb-4">
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >
            <div class="flex items-center gap-6">
              <span class="text-gray-300 w-6">5</span>
              <span class="font-medium group-hover:text-details transition">
                Posso cuidar de mais de um pet ao mesmo tempo?
              </span>
            </div>
            <i
              class="fa-solid fa-chevron-down text-sm transition-transform duration-300 group-open:rotate-180"
            ></i>
          </summary>
          <p class="mt-3 ml-12 text-gray-300 text-sm">
            Sim, desde que você consiga garantir atenção e segurança para todos
            os pets.
          </p>
        </details>

        <!-- ITEM 6 -->
        <details class="group border-b border-white/20 pb-4">
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >
            <div class="flex items-center gap-6">
              <span class="text-gray-300 w-6">6</span>
              <span class="font-medium group-hover:text-details transition">
                O que faço se tiver algum problema com um tutor?
              </span>
            </div>
            <i
              class="fa-solid fa-chevron-down text-sm transition-transform duration-300 group-open:rotate-180"
            ></i>
          </summary>
          <p class="mt-3 ml-12 text-gray-300 text-sm">
            Você pode acionar o suporte da plataforma, que irá te ajudar a
            resolver a situação.
          </p>
        </details>

        <!-- ITEM 7 -->
        <details class="group border-b border-white/20 pb-4">
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >
            <div class="flex items-center gap-6">
              <span class="text-gray-300 w-6">7</span>
              <span class="font-medium group-hover:text-details transition">
                Preciso ter experiência profissional?
              </span>
            </div>
            <i
              class="fa-solid fa-chevron-down text-sm transition-transform duration-300 group-open:rotate-180"
            ></i>
          </summary>
          <p class="mt-3 ml-12 text-gray-300 text-sm">
            Não é obrigatório, mas experiência com animais é um diferencial
            importante.
          </p>
        </details>

        <!-- ITEM 8 -->
        <details class="group border-b border-white/20 pb-4">
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >
            <div class="flex items-center gap-6">
              <span class="text-gray-300 w-6">8</span>
              <span class="font-medium group-hover:text-details transition">
                As avaliações influenciam minhas chances?
              </span>
            </div>
            <i
              class="fa-solid fa-chevron-down text-sm transition-transform duration-300 group-open:rotate-180"
            ></i>
          </summary>
          <p class="mt-3 ml-12 text-gray-300 text-sm">
            Sim, boas avaliações aumentam sua visibilidade e confiança na
            plataforma.
          </p>
        </details>
      </div>
    </div>
  </div>
</template>
