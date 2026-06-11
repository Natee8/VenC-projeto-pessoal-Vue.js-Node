<script setup lang="ts">
import { ref } from "vue";

export type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

export type ResetPasswordErrors = {
  password?: string;
  confirmPassword?: string;
};

const emit = defineEmits<{
  (e: "change", value: ResetPasswordFormData): void;
}>();

const password = ref("");
const confirmPassword = ref("");
const errors = ref<ResetPasswordErrors>({});

const validatePassword = (value: string) => {
  return value.length >= 6;
};

const validate = () => {
  errors.value = {};

  if (!password.value) {
    errors.value.password = "Senha é obrigatória";
  } else if (!validatePassword(password.value)) {
    errors.value.password = "Senha deve ter pelo menos 6 caracteres";
  }

  if (!confirmPassword.value) {
    errors.value.confirmPassword = "Confirme a senha";
  } else if (confirmPassword.value !== password.value) {
    errors.value.confirmPassword = "As senhas não coincidem";
  }

  const valid = Object.keys(errors.value).length === 0;

  return {
    valid,
    data: {
      password: password.value,
      confirmPassword: confirmPassword.value,
    },
  };
};

defineExpose({
  validate,
});
</script>

<template>
  <div class="flex flex-col gap-6 md:gap-7 pb-2 md:pb-4">
    <div class="flex flex-col gap-2">
      <label class="text-white font-semibold">Nova senha</label>

      <input
        v-model="password"
        type="password"
        placeholder="Digite sua nova senha"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        @input="emit('change', { password, confirmPassword })"
      />

      <span v-if="errors.password" class="text-red-400 text-sm">
        {{ errors.password }}
      </span>
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-white font-semibold">Confirmar senha</label>

      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Repita a senha"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        @input="emit('change', { password, confirmPassword })"
      />

      <span v-if="errors.confirmPassword" class="text-red-400 text-sm">
        {{ errors.confirmPassword }}
      </span>
    </div>
  </div>
</template>
