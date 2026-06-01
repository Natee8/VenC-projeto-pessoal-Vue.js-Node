<script setup lang="ts">
import { ref } from "vue";

export type EmailConfirmErrors = {
  email?: string;
  confirmEmail?: string;
};

const emit = defineEmits<{
  (e: "change", value: { email: string; confirmEmail: string }): void;
}>();

const email = ref("");
const confirmEmail = ref("");

const errors = ref<EmailConfirmErrors>({});

const validateEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

defineExpose({
  validate: () => {
    errors.value = {};

    if (!email.value) {
      errors.value.email = "Email é obrigatório";
    } else if (!validateEmail(email.value)) {
      errors.value.email = "Email inválido";
    }

    if (!confirmEmail.value) {
      errors.value.confirmEmail = "Confirme o email";
    } else if (confirmEmail.value !== email.value) {
      errors.value.confirmEmail = "Os emails não coincidem";
    }

    if (Object.keys(errors.value).length > 0) {
      return { valid: false };
    }

    return {
      valid: true,
      data: {
        email: email.value,
        confirmEmail: confirmEmail.value,
      },
    };
  },
});
</script>

<template>
  <div class="flex flex-col gap-6 md:gap-7 pb-2 md:pb-4">
    <div class="flex flex-col gap-2">
      <label class="text-white font-semibold">Email</label>

      <input
        v-model="email"
        type="email"
        placeholder="seu@email.com"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        @input="emit('change', { email, confirmEmail })"
      />

      <span v-if="errors.email" class="text-red-400 text-sm">
        {{ errors.email }}
      </span>
    </div>

    <!-- Confirmar Email -->
    <div class="flex flex-col gap-2">
      <label class="text-white font-semibold">Confirmar Email</label>

      <input
        v-model="confirmEmail"
        type="email"
        placeholder="repita o email"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        @input="emit('change', { email, confirmEmail })"
      />

      <span v-if="errors.confirmEmail" class="text-red-400 text-sm">
        {{ errors.confirmEmail }}
      </span>
    </div>
  </div>
</template>
