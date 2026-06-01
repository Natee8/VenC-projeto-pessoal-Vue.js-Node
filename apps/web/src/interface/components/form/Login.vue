<script setup lang="ts">
import { ref } from "vue";
import { loginFormSchema } from "./schemas/loginSchema";

type LoginErrors = {
  email?: string;
  password?: string;
};

const props = defineProps<{
  email: string;
  password: string;
}>();

const emit = defineEmits<{
  (e: "update:email", value: string): void;
  (e: "update:password", value: string): void;
}>();

const errors = ref<LoginErrors>({});

const updateField = (event: Event, emitName: string) => {
  const target = event.target as HTMLInputElement;
  emit(emitName as any, target.value);
};

defineExpose({
  validate: async () => {
    errors.value = {};

    try {
      await loginFormSchema.validate(
        {
          email: props.email,
          password: props.password,
        },
        { abortEarly: false },
      );

      return {
        valid: true,
        data: {
          email: props.email,
          password: props.password,
        },
      };
    } catch (error: any) {
      const validationErrors = error.inner?.length ? error.inner : [error];

      validationErrors.forEach((err: any) => {
        const field = err.path as keyof LoginErrors;
        errors.value[field] = err.message;
      });

      return { valid: false };
    }
  },
});
</script>

<template>
  <div class="flex flex-col gap-10">
    <!-- EMAIL -->
    <div class="flex flex-col gap-2">
      <label class="text-white font-semibold">Email</label>

      <input
        :value="email"
        @input="(e) => updateField(e, 'update:email')"
        type="email"
        placeholder="Digite seu email"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
      />

      <span v-if="errors.email" class="text-red-400 text-sm">
        {{ errors.email }}
      </span>
    </div>

    <!-- SENHA -->
    <div class="flex flex-col gap-2">
      <label class="text-white font-semibold">Senha</label>

      <input
        :value="password"
        @input="(e) => updateField(e, 'update:password')"
        type="password"
        placeholder="Digite sua senha"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
      />

      <span v-if="errors.password" class="text-red-400 text-sm">
        {{ errors.password }}
      </span>
    </div>
  </div>
</template>
