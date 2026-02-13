<script setup lang="ts">
import { ref } from "vue";
import AuthLayout from "../../../layout/auth/authLayout.vue";

const name = ref("");
const email = ref("");
const birthDate = ref("");
const cpf = ref("");
const password = ref("");
const confirmPassword = ref("");

// Exemplo de handleSubmit (pode ligar à sua API depois)
const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log({
    name: name.value,
    email: email.value,
    birthDate: birthDate.value,
    cpf: cpf.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });
};
</script>

<template>
  <AuthLayout>
    <div class="flex justify-center items-center h-full">
      <div class="bg-secondary rounded-2xl p-28 shadow min-h-screen w-[60%]">
        <div class="flex flex-col items-center text-center gap-3 mb-8">
          <img src="/assets/logos/logoWhite.svg" alt="Logo vencá" width="160" />
          <p class="text-white/80 text-[1.2rem]">
            Preencha suas informações para personalizar sua experiência no Vencá
          </p>
        </div>

        <form class="flex flex-col gap-5" @submit="handleSubmit">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-white font-semibold">Nome</label>
            <input
              v-model="name"
              type="text"
              id="name"
              placeholder="Digite seu nome completo"
              class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="email" class="text-white font-semibold">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="Digite seu email"
              class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
            />
          </div>

          <div class="flex gap-6">
            <div class="flex-1 flex flex-col gap-2">
              <label for="birthDate" class="text-white font-semibold"
                >Data de Nascimento</label
              >
              <input
                v-model="birthDate"
                type="date"
                id="birthDate"
                class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
              />
            </div>

            <div class="flex-1 flex flex-col gap-2">
              <label for="cpf" class="text-white font-semibold">CPF</label>
              <input
                v-model="cpf"
                type="text"
                id="cpf"
                placeholder="Digite seu CPF"
                class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
              />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-white font-semibold">Senha</label>
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="Digite sua senha"
              class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="confirmPassword" class="text-white font-semibold"
              >Confirmar Senha</label
            >
            <input
              v-model="confirmPassword"
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
            />
          </div>

          <button
            type="submit"
            class="w-full h-16 bg-details text-white font-semibold rounded-lg mt-6 hover:opacity-90 transition"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  </AuthLayout>
</template>
