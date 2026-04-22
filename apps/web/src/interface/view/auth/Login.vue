<script setup lang="ts">
import { ref } from "vue";
import AuthLayout from "../../layout/auth/authLayout.vue";
import { useRouter } from "vue-router";
import Snackbar from "../../components/utils/snackbar.vue";
import { authRepository } from "@/infrastructure/repositories/authRepository";

const email = ref("");
const password = ref("");
const router = useRouter();

const snackbar = ref({
  show: false,
  message: "",
  type: "success" as "success" | "error",
});

const handleLogin = async (e: Event) => {
  e.preventDefault();

  try {
    await authRepository.login({
      email: email.value,
      password: password.value,
    });

    snackbar.value = {
      show: true,
      message: "Login realizado com sucesso!",
      type: "success",
    };

    router.push("/home");
  } catch (error) {
    snackbar.value = {
      show: true,
      message: "Email ou senha inválidos",
      type: "error",
    };
  }

  setTimeout(() => {
    snackbar.value.show = false;
  }, 3000);
};
</script>

<template>
  <AuthLayout>
    <div class="flex justify-center items-center h-full">
      <div class="bg-secondary rounded-2xl p-28 shadow min-h-screen w-[60%]">
        <div class="flex flex-col items-center text-center gap-3 mb-8">
          <img src="/assets/logos/logoWhite.svg" alt="Logo vencá" width="160" />
          <p class="text-white/80 text-[1.2rem]">
            Preencha suas informações para realizar login
          </p>
        </div>

        <form class="flex flex-col gap-5" @submit="handleLogin">
          <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-2">
              <label for="email" class="text-white font-semibold">Email</label>
              <input
                v-model="email"
                type="text"
                id="email"
                placeholder="Digite seu email"
                class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="password" class="text-white font-semibold"
                >Senha</label
              >
              <input
                v-model="password"
                type="password"
                id="password"
                placeholder="Digite sua senha"
                class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
              />
            </div>

            <button
              type="submit"
              class="w-full h-16 rounded-lg mt-5 bg-details text-white font-semibold hover:opacity-90 transition"
            >
              Login
            </button>
          </div>

          <div class="border-t border-gray-200 my-10"></div>

          <div class="flex">
            <p
              class="text-center font-semibold text-white/80 hover:text-white cursor-pointer transition"
            >
              Esqueceu a senha? Clique aqui para redefinir
            </p>
          </div>
        </form>
      </div>
    </div>

    <Snackbar
      :show="snackbar.show"
      :message="snackbar.message"
      :type="snackbar.type"
    />
  </AuthLayout>
</template>
