<script setup lang="ts">
import { ref } from "vue";

import {
  RegisterFormBaseEmits,
  RegisterFormBaseProps,
} from "./types/propsRegister";

import { RegisterFormErrors } from "./types/typeErrors";
import { registerFormBaseSchema } from "./schemas/formBaseSchema";

const props = defineProps<RegisterFormBaseProps>();
const emit = defineEmits<RegisterFormBaseEmits>();

const errors = ref<RegisterFormErrors>({});

const updateField = (event: Event, emitName: string) => {
  const target = event.target as HTMLInputElement;

  emit(emitName as any, target.value);
};

defineExpose({
  validate: async () => {
    errors.value = {};

    try {
      await registerFormBaseSchema.validate(
        {
          name: props.name,
          email: props.email,
          birthDate: props.birthDate,
          cpf: props.cpf,
          password: props.password,
          confirmPassword: props.confirmPassword,
        },
        { abortEarly: false },
      );

      return {
        valid: true,
        data: {
          name: props.name,
          email: props.email,
          birthDate: props.birthDate,
          cpf: props.cpf,
          password: props.password,
        },
      };
    } catch (error: any) {
      const validationErrors = error.inner?.length ? error.inner : [error];

      validationErrors.forEach((err: any) => {
        const field = err.path as keyof RegisterFormErrors;
        errors.value[field] = err.message;
      });

      return { valid: false };
    }
  },
});
</script>

<template>
  <div class="flex flex-col gap-5 md:gap-6">
    <div class="flex flex-col gap-2">
      <label for="name" class="text-white font-semibold">Nome</label>

      <input
        :value="name"
        @input="(e) => updateField(e, 'update:name')"
        type="text"
        id="name"
        placeholder="Digite seu nome completo"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
      />

      <span v-if="errors.name" class="text-red-400 text-sm">
        {{ errors.name }}
      </span>
    </div>

    <div class="flex flex-col gap-2">
      <label for="email" class="text-white font-semibold">Email</label>

      <input
        :value="email"
        @input="(e) => updateField(e, 'update:email')"
        type="email"
        id="email"
        placeholder="Digite seu email"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
      />

      <span v-if="errors.email" class="text-red-400 text-sm">
        {{ errors.email }}
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label for="birthDate" class="text-white font-semibold">
          Data de Nascimento
        </label>

        <input
          :value="birthDate"
          @input="(e) => updateField(e, 'update:birthDate')"
          type="date"
          id="birthDate"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />

        <span v-if="errors.birthDate" class="text-red-400 text-sm">
          {{ errors.birthDate }}
        </span>
      </div>

      <div class="flex-1 flex flex-col gap-2">
        <label for="cpf" class="text-white font-semibold">CPF</label>

        <input
          :value="cpf"
          @input="(e) => updateField(e, 'update:cpf')"
          type="text"
          id="cpf"
          placeholder="Digite seu CPF"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />

        <span v-if="errors.cpf" class="text-red-400 text-sm">
          {{ errors.cpf }}
        </span>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <label for="password" class="text-white font-semibold">Senha</label>

      <input
        :value="password"
        @input="(e) => updateField(e, 'update:password')"
        type="password"
        id="password"
        placeholder="Digite sua senha"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
      />

      <span v-if="errors.password" class="text-red-400 text-sm">
        {{ errors.password }}
      </span>
    </div>

    <div class="flex flex-col gap-2">
      <label for="confirmPassword" class="text-white font-semibold">
        Confirmar Senha
      </label>

      <input
        :value="confirmPassword"
        @input="(e) => updateField(e, 'update:confirmPassword')"
        type="password"
        id="confirmPassword"
        placeholder="Confirme sua senha"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
      />

      <span v-if="errors.confirmPassword" class="text-red-400 text-sm">
        {{ errors.confirmPassword }}
      </span>
    </div>
  </div>
</template>
