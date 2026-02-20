<script setup lang="ts">
const props = defineProps({
  name: String,
  email: String,
  birthDate: String,
  cpf: String,
  password: String,
  confirmPassword: String,
  isLoading: Boolean,
});

const emit = defineEmits<{
  (e: "update:name", val: string): void;
  (e: "update:email", val: string): void;
  (e: "update:birthDate", val: string): void;
  (e: "update:cpf", val: string): void;
  (e: "update:password", val: string): void;
  (e: "update:confirmPassword", val: string): void;
  (e: "submit"): void;
}>();

const handleSubmit = (e: Event) => {
  e.preventDefault();
  emit("submit");
};

const updateField = (event: Event, emitName: string) => {
  const target = event.target as HTMLInputElement;
  emit(emitName as any, target.value);
};
</script>

<template>
  <form class="flex flex-col gap-5" @submit="handleSubmit">
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
    </div>

    <div class="flex gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label for="birthDate" class="text-white font-semibold"
          >Data de Nascimento</label
        >
        <input
          :value="birthDate"
          @input="(e) => updateField(e, 'update:birthDate')"
          type="date"
          id="birthDate"
          class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
        />
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
    </div>

    <div class="flex flex-col gap-2">
      <label for="confirmPassword" class="text-white font-semibold"
        >Confirmar Senha</label
      >
      <input
        :value="confirmPassword"
        @input="(e) => updateField(e, 'update:confirmPassword')"
        type="password"
        id="confirmPassword"
        placeholder="Confirme sua senha"
        class="w-full h-14 px-4 rounded-lg bg-white border border-gray-200 outline-none focus:border-details"
      />
    </div>

    <button
      type="submit"
      :disabled="isLoading"
      class="w-full h-16 bg-details text-white font-semibold rounded-lg mt-6 hover:opacity-90 transition disabled:opacity-50"
    >
      <slot>{{ isLoading ? "Registrando..." : "Continuar" }}</slot>
    </button>
  </form>
</template>
