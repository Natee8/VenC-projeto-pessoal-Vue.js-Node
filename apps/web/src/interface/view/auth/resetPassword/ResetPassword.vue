<script>
import Snackbar from "src/interface/components/utils/snackbar.vue";
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
