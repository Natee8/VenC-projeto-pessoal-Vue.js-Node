<script setup lang="ts">
import { ref } from "vue";
import { resetPasswordFormSchema } from "./schemas/resetPassword";

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

const validate = async () => {
  try {
    const data = await resetPasswordFormSchema.validate(
      {
        password: password.value,
        confirmPassword: confirmPassword.value,
      },
      { abortEarly: false },
    );

    errors.value = {};

    return {
      valid: true,
      data,
    };
  } catch (err: any) {
    errors.value = {};

    err.inner.forEach((validationError: any) => {
      errors.value[validationError.path as keyof ResetPasswordErrors] =
        validationError.message;
    });

    return {
      valid: false,
      data: {
        password: password.value,
        confirmPassword: confirmPassword.value,
      },
    };
  }
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
