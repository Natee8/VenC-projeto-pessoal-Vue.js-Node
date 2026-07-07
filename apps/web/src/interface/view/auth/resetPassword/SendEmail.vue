<script setup lang="ts">
import { ref } from "vue";
import SendEmailForm from "src/interface/components/form/SendEmail.vue";
import AuthLayout from "src/interface/layout/auth/authLayout.vue";
import AuthFormContainer from "src/interface/layout/auth/authContainerForms.vue";
import { verificationCodeRepository } from "src/infrastructure/repositories/sendCodeRepository";
import { useRouter } from "vue-router";
import Snackbar from "src/interface/components/utils/snackbar.vue";
import { showSnackbarAndWait } from "src/interface/utils/asyncDelay";

const sendEmailForm = ref<InstanceType<typeof SendEmailForm> | null>(null);

const loading = ref(false);

const handleChange = (value: { email: string; confirmEmail: string }) => {
  // opcional: só se quiser armazenar estado em tempo real
};

const snackbar = ref({
  show: false,
  message: "",
  type: "success" as "success" | "error",
});

const openSnackbar = (message: string, type: "success" | "error") => {
  snackbar.value = {
    show: true,
    message,
    type,
  };

  setTimeout(() => {
    snackbar.value.show = false;
  }, 3000);
};

const router = useRouter();

const handleSendEmail = async () => {
  const result = await sendEmailForm.value?.validate();

  if (!result?.valid) return;
  if (loading.value) return;

  loading.value = true;

  try {
    await verificationCodeRepository.sendResetPasswordCode(result.data.email);

    await showSnackbarAndWait(
      snackbar,
      "Se o email existir, um link para redefinir a senha foi enviado. Verifique sua caixa de entrada.",
      "success",
      1500,
    );

    // store email in sessionStorage to allow the fallback visual page to reference it
    try {
      sessionStorage.setItem("resetEmail", result.data.email);
    } catch {
      // ignore storage errors
    }

    // redirect user to the fallback visual page (send-code)
    router.push({ name: "send-code" });
  } catch (error) {
    await showSnackbarAndWait(
      snackbar,
      "Erro ao enviar email. Tente novamente.",
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
    <AuthFormContainer subtitle="Digite seu email para redefinir sua senha">
      <SendEmailForm ref="sendEmailForm" @change="handleChange" />

      <template #actions>
        <button
          class="w-full h-16 bg-details text-white font-semibold rounded-lg hover:opacity-90 transition disabled:opacity-50"
          :disabled="loading"
          @click="handleSendEmail"
        >
          {{ loading ? "Enviando..." : "Enviar email" }}
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
