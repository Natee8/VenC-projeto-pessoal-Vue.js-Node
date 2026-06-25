<script setup lang="ts">
import { ref } from "vue";
import AuthLayout from "../../layout/auth/authLayout.vue";
import { useRouter } from "vue-router";
import Snackbar from "../../components/utils/snackbar.vue";
import { authRepository } from "src/infrastructure/repositories/authRepository";
import { Routes } from "src/router/routes.js";
import AuthFormContainer from "src/interface/layout/auth/authContainerForms.vue";
import Login from "src/interface/components/form/Login.vue";
import { showSnackbarAndWait } from "src/interface/utils/asyncDelay.js";
import { useAuthStore } from "src/infrastructure/stores/auth/authStore.js";

const loginFormRef = ref();
const email = ref("");
const password = ref("");
const router = useRouter();
const authStore = useAuthStore();

const snackbar = ref({
  show: false,
  message: "",
  type: "success" as "success" | "error",
});

const loading = ref(false);

const handleLogin = async () => {
  const result = await loginFormRef.value?.validate();

  if (!result?.valid) return;
  if (loading.value) return;

  loading.value = true;

  try {
    const response = await authRepository.login(result.data);

    console.log("✅ LOGIN RESPONSE:", response);

    if (!response.data?.accessToken) {
      throw new Error("Token não veio na resposta");
    }

    authStore.setToken(response.data.accessToken);
    await authStore.fetchMe();

    await showSnackbarAndWait(
      snackbar,
      "Login realizado com sucesso!",
      "success",
      1200,
    );

    router.push(Routes.home);
  } catch (error) {
    await showSnackbarAndWait(
      snackbar,
      "Email ou senha inválidos",
      "error",
      1500,
    );
  } finally {
    loading.value = false;
  }
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
          :disabled="loading"
        >
          {{ loading ? "Entrando..." : "Login" }}
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
