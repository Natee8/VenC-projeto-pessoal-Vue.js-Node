<script setup lang="ts">
import { ref } from "vue";
import AuthLayout from "../../layout/auth/authLayout.vue";
import { useRouter } from "vue-router";
import Snackbar from "../../components/utils/snackbar.vue";
import { authRepository } from "src/infrastructure/repositories/authRepository";
import { Routes } from "src/router/routes.js";
import AuthFormContainer from "src/interface/layout/auth/authContainerForms.vue";
import Login from "src/interface/components/form/Login.vue";

const loginFormRef = ref();
const email = ref("");
const password = ref("");
const router = useRouter();

const snackbar = ref({
  show: false,
  message: "",
  type: "success" as "success" | "error",
});

const handleLogin = async () => {
  const result = await loginFormRef.value?.validate();

  if (!result?.valid) return;

  try {
    await authRepository.login(result.data);

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
    <AuthFormContainer subtitle="Preencha suas informações para realizar login">
      <form @submit.prevent="handleLogin">
        <Login
          ref="loginFormRef"
          v-model:email="email"
          v-model:password="password"
        />

        <div class="border-t border-dashed border-gray-200 my-8 md:my-10"></div>
        <div class="flex justify-start">
          <p
            class="text-center font-semibold text-white/80 hover:text-white cursor-pointer transition"
          >
            Esqueceu a senha?
            <span
              @click="router.push(Routes.sendEmail)"
              class="text-details hover:underline"
            >
              Clique aqui para redefinir
            </span>
          </p>
        </div>
      </form>

      <template #actions>
        <button
          @click="handleLogin"
          class="w-full h-16 bg-details text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          Login
        </button>
      </template>
    </AuthFormContainer>

    <Snackbar
      :show="snackbar.show"
      :message="snackbar.message"
      :type="snackbar.type"
    />
  </AuthLayout>
</template>
