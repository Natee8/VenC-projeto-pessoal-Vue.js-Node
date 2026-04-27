<template>
  <section
    class="w-full px-8 lg:px-32 py-32 flex flex-col items-center gap-20 bg-bgColor"
  >
    <div
      class="w-full flex flex-col lg:flex-row items-stretch justify-between gap-8"
    >
      <div
        class="w-full lg:w-[48%] bg-white border-2 border-details/50 rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500"
      >
        <div
          class="w-20 h-20 rounded-full bg-details flex items-center justify-center"
        >
          <i class="fas fa-paw text-white text-2xl"></i>
        </div>

        <h1 class="text-3xl font-bold text-texts-primary-dark mt-8">
          Sou cuidador
        </h1>

        <p class="text-texts-default font-semibold leading-7 mt-5">
          Cadastre seus serviços, conecte-se com tutores e transforme seu amor
          pelos animais em uma oportunidade.
        </p>

        <button
          class="mt-8 text-details font-bold hover:translate-x-2 transition-all duration-300"
        >
          Saiba mais →
        </button>
      </div>

      <div
        class="w-full lg:w-[48%] bg-secondary shadow-lg rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500"
      >
        <div
          class="w-20 h-20 rounded-full bg-details flex items-center justify-center"
        >
          <i class="fas fa-heart text-white text-2xl"></i>
        </div>

        <h1 class="text-3xl font-bold text-white mt-8">Sou tutor</h1>

        <p class="text-white/80 leading-7 font-semibold mt-5">
          Encontre cuidadores confiáveis e escolha quem vai cuidar do seu pet
          com carinho e segurança.
        </p>

        <button
          class="mt-8 text-details font-bold hover:translate-x-2 transition-all duration-300"
        >
          Saiba mais →
        </button>
      </div>
    </div>

    <div
      class="w-full bg-secondary rounded-[40px] px-10 py-20 flex flex-col items-center text-center"
    >
      <h1 class="text-3xl md:text-4xl font-bold text-white max-w-4xl">
        Acesse a plataforma e comece sua jornada
      </h1>

      <p class="text-white/80 text-md leading-8 mt-6 max-w-2xl">
        Entre agora e descubra como conectar cuidado, confiança e praticidade em
        um só lugar para você e seu pet.
      </p>

      <button
        class="mt-10 bg-details hover:opacity-90 transition-all duration-300 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105"
      >
        Cadastre-se agora!
      </button>
    </div>
  </section>
</template>
