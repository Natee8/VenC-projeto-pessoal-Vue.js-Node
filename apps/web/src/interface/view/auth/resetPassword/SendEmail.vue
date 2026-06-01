<script setup lang="ts">
import { ref } from "vue";
import SendEmailForm from "src/interface/components/form/SendEmail.vue";
import AuthLayout from "src/interface/layout/auth/authLayout.vue";
import AuthFormContainer from "src/interface/layout/auth/authContainerForms.vue";

const sendEmailForm = ref(null);

const handleChange = (value: { email: string; confirmEmail: string }) => {
  // Handle change event
};
</script>

<template>
  <AuthLayout>
    <AuthFormContainer subtitle="Digite seu email para redefinir sua senha">
      <SendEmailForm @change="handleChange" ref="sendEmailForm" />

      <template #actions>
        <button
          class="w-full h-16 bg-details text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          Enviar email
        </button>
      </template>
    </AuthFormContainer>
  </AuthLayout>
</template>
