<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import AuthLayout from "src/interface/layout/auth/authLayout.vue";
import AuthFormContainer from "src/interface/layout/auth/authContainerForms.vue";
import Snackbar from "src/interface/components/utils/snackbar.vue";

import sendCode from "src/interface/components/form/sendCode.vue";

import { verificationCodeRepository } from "src/infrastructure/repositories/sendCodeRepository";
import { showSnackbarAndWait } from "src/interface/utils/asyncDelay";

const codeFormRef = ref<InstanceType<typeof sendCode> | null>(null);

const loading = ref(false);

const route = useRoute();
const router = useRouter();

const email =
  (route.query.email as string) || sessionStorage.getItem("resetEmail") || "";

const snackbar = ref({
  show: false,
  message: "",
  type: "success" as "success" | "error",
});

const handleChange = (value: { code: string }) => {};

const handleVerifyCode = async () => {
  const result = await codeFormRef.value?.validate();

  if (!result?.valid) return;
  if (loading.value) return;

  if (!email) {
    await showSnackbarAndWait(
      snackbar,
      "Email não encontrado. Reinicie o processo.",
      "error",
      1500,
    );
    return;
  }

  loading.value = true;

  try {
    const data = await verificationCodeRepository.verifyResetPasswordCode(
      email,
      result.data.code,
    );

    const resetToken = data.resetToken || data.resetToken;

    if (!resetToken) {
      throw new Error("Não foi possível obter token de reset");
    }

    await showSnackbarAndWait(
      snackbar,
      "Código validado com sucesso!",
      "success",
      1200,
    );

    router.push({
      name: "reset-password",
      query: {
        token: resetToken,
      },
    });
  } catch (error) {
    await showSnackbarAndWait(
      snackbar,
      "Código inválido ou expirado",
      "error",
      1500,
    );

    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <AuthLayout>
    <AuthFormContainer subtitle="Digite o código enviado para seu email">
      <sendCode ref="codeFormRef" @change="handleChange" />

      <template #actions>
        <button
          class="w-full h-16 bg-details text-white font-semibold rounded-lg hover:opacity-90 transition disabled:opacity-50"
          :disabled="loading"
          @click="handleVerifyCode"
        >
          {{ loading ? "Verificando..." : "Confirmar código" }}
        </button>

        <Snackbar
          :show="snackbar.show"
          :message="snackbar.message"
          :type="snackbar.type"
        />
      </template>
    </AuthFormContainer>
  </AuthLayout>
</template>
