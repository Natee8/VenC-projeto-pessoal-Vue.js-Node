<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Snackbar from "src/interface/components/utils/snackbar.vue";
import { verificationCodeRepository } from "src/infrastructure/repositories/sendCodeRepository";

const formRef = ref(null as any);
const loading = ref(false);
const route = useRoute();
const router = useRouter();

const snackbar = ref({
  show: false,
  message: "",
  type: "success" as "success" | "error",
});

const showSnackbar = (message: string, type: "success" | "error") => {
  snackbar.value = { show: true, message, type };
  setTimeout(() => (snackbar.value.show = false), 2500);
};

const handleResetPassword = async () => {
  const result = await formRef.value?.validate();
  if (!result?.valid) return;
  if (loading.value) return;

  const token = (route.query.token as string) || "";

  if (!token) {
    showSnackbar("Token não encontrado", "error");
    return;
  }

  loading.value = true;

  try {
    await verificationCodeRepository.resetPassword({
      token,
      newPassword: result.data.password,
    });

    showSnackbar("Senha alterada com sucesso", "success");
    router.push({ name: "login" });
  } catch (err) {
    console.error(err);
    showSnackbar("Erro ao alterar senha", "error");
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <AuthLayout>
    <AuthFormContainer subtitle="Crie sua nova senha">
      <resetPassword ref="formRef" />

      <template #actions>
        <button
          class="w-full h-16 bg-details text-white font-semibold rounded-lg hover:opacity-90 transition disabled:opacity-50"
          :disabled="loading"
          @click="handleResetPassword"
        >
          {{ loading ? "Salvando..." : "Redefinir senha" }}
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
