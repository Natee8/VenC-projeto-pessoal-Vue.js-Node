<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  isLoading: boolean;
}>();

const publicProfile = ref(false);
const acceptPetHosting = ref(false);
const acceptTerms = ref(false);
const profileImage = ref<string | null>(null);

const emit = defineEmits<{
  (
    e: "submit",
    payload: {
      profileImage: string | null;
      publicProfile: boolean;
      acceptPetHosting: boolean;
      acceptTerms: boolean;
    },
  ): void;
}>();

const handleImageUpload = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;

  profileImage.value = URL.createObjectURL(file);
};

const removeImage = () => {
  profileImage.value = null;
};

const handleSubmit = (e: Event) => {
  e.preventDefault();

  emit("submit", {
    profileImage: profileImage.value,
    publicProfile: publicProfile.value,
    acceptPetHosting: acceptPetHosting.value,
    acceptTerms: acceptTerms.value,
  });
};
</script>

<template>
  <form class="flex flex-col gap-5" @submit="handleSubmit">
    <!-- FOTO PERFIL -->
    <div class="flex flex-col items-center gap-2 mb-10">
      <p class="text-white font-semibold">Foto de perfil</p>

      <p class="text-white/60 text-sm text-center max-w-xs">
        Faça upload da sua foto para personalizar seu perfil
      </p>

      <div class="relative mt-3">
        <!-- INPUT -->
        <label class="cursor-pointer">
          <input
            type="file"
            class="hidden"
            accept="image/*"
            @change="handleImageUpload"
          />

          <!-- AVATAR -->
          <div
            class="w-[230px] h-[230px] rounded-full bg-white border-4 border-details flex items-center justify-center overflow-hidden hover:scale-105 transition relative"
          >
            <img
              v-if="profileImage"
              :src="profileImage"
              class="w-full h-full object-cover"
            />

            <div v-else class="flex flex-col items-center text-details">
              <i class="fas fa-user text-6xl"></i>
            </div>

            <div
              class="absolute inset-0 bg-details/10 opacity-0 hover:opacity-100 transition"
            ></div>
          </div>
        </label>

        <button
          v-if="profileImage"
          type="button"
          @click="removeImage"
          class="absolute top-0 right-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shadow hover:scale-105 transition"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- CHECKBOXES -->
    <div class="p-5 bg-white/10 rounded-xl flex items-start gap-4">
      <input
        v-model="publicProfile"
        type="checkbox"
        class="mt-1 w-5 h-5 accent-details"
      />

      <label class="text-white text-sm leading-relaxed">
        Tornar perfil público (quando ativado, seu perfil ficará visível para
        cuidadores na plataforma)
      </label>
    </div>

    <div class="p-5 bg-white/10 rounded-xl flex items-start gap-4">
      <input
        v-model="acceptPetHosting"
        type="checkbox"
        class="mt-1 w-5 h-5 accent-details"
      />

      <label class="text-white text-sm leading-relaxed">
        Aceitar serviços de hospedagem pet (se ativado, seu endereço ficará
        visível para clientes)
      </label>
    </div>

    <div class="p-5 bg-white/10 rounded-xl flex items-start gap-4">
      <input
        v-model="acceptTerms"
        type="checkbox"
        class="mt-1 w-5 h-5 accent-details"
      />

      <label class="text-white text-sm leading-relaxed">
        Aceitar termos de uso e política de privacidade
      </label>
    </div>

    <button
      type="submit"
      :disabled="isLoading || !acceptTerms"
      class="w-full h-16 bg-details text-white font-semibold rounded-lg mt-6 hover:opacity-90 transition disabled:opacity-50"
    >
      {{ isLoading ? "Registrando..." : "Cadastrar" }}
    </button>
  </form>
</template>
