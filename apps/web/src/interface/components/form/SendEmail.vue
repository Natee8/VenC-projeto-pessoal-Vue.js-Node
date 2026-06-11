<script setup lang="ts">
import { ref } from "vue";
import { sendEmailSchema } from "src/interface/components/form/schemas/sendEmailSchema";

export type EmailConfirmFormData = {
  email: string;
  confirmEmail: string;
};

export type EmailConfirmErrors = {
  email?: string;
  confirmEmail?: string;
};

const emit = defineEmits<{
  (e: "change", value: EmailConfirmFormData): void;
}>();

const email = ref("");
const confirmEmail = ref("");
const errors = ref<EmailConfirmErrors>({});

const validate = async () => {
  try {
    const data = await sendEmailSchema.validate(
      {
        email: email.value,
        confirmEmail: confirmEmail.value,
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
      errors.value[validationError.path as keyof EmailConfirmErrors] =
        validationError.message;
    });

    return {
      valid: false,
      data: {
        email: email.value,
        confirmEmail: confirmEmail.value,
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
