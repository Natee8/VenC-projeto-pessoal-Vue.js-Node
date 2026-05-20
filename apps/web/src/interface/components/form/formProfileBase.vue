<script setup lang="ts">
import { ref } from "vue";
import {
  FormProfileBaseEmits,
  FormProfileBaseProps,
} from "./types/propsRegister";

import { profileFormSchema } from "./schemas/profileBaseSchema";
import { ProfileErrors } from "./types/typeErrors";

defineProps<FormProfileBaseProps>();

const emit = defineEmits<FormProfileBaseEmits>();

const publicProfile = ref(false);
const acceptPetHosting = ref(false);
const acceptTerms = ref(false);

const profileImage = ref<string | null>(null);
const selectedFile = ref<File | null>(null);

const errors = ref<ProfileErrors>({});

const handleImageUpload = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];

  console.log("FILE RAW:", file);

  if (!file) return;

  selectedFile.value = file;

  console.log("STATE FILE:", selectedFile.value);

  profileImage.value = URL.createObjectURL(file);
};

const removeImage = () => {
  profileImage.value = null;
  selectedFile.value = null;
};

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  errors.value = {};

  try {
    await profileFormSchema.validate(
      {
        profileImage: selectedFile.value,
        publicProfile: publicProfile.value,
        acceptPetHosting: acceptPetHosting.value,
        acceptTerms: acceptTerms.value,
      },
      {
        abortEarly: false,
      },
    );

    emit("submit", {
      profileImage: selectedFile.value,
      publicProfile: publicProfile.value,
      acceptPetHosting: acceptPetHosting.value,
      acceptTerms: acceptTerms.value,
    });
  } catch (error: any) {
    error.inner.forEach((err: any) => {
      const field = err.path as keyof ProfileErrors;
      errors.value[field] = err.message;
    });
  }
};
</script>

<template>
  <form class="flex flex-col gap-6 md:gap-7 pb-2 md:pb-4" @submit="handleSubmit">
    <!-- FOTO PERFIL -->
    <div class="flex flex-col items-center gap-2 mb-10">
      <p class="text-white font-semibold">Foto de perfil</p>

      <p class="text-white/60 text-sm text-center max-w-xs">
        Faça upload da sua foto para personalizar seu perfil
      </p>

      <div class="relative mt-3">
        <label class="cursor-pointer">
          <input
            type="file"
            class="hidden"
            accept="image/*"
            @change="handleImageUpload"
          />

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

      <span v-if="errors.profileImage" class="text-red-400 text-sm mt-2">
        {{ errors.profileImage }}
      </span>
    </div>

    <!-- CHECKBOXES -->
    <div class="p-5 bg-white/10 rounded-xl flex items-start gap-4">
      <input
        v-model="publicProfile"
        type="checkbox"
        class="mt-1 w-5 h-5 accent-details"
      />

      <label class="text-white text-sm leading-relaxed">
        Tornar perfil público
      </label>
    </div>

    <div class="p-5 bg-white/10 rounded-xl flex items-start gap-4">
      <input
        v-model="acceptPetHosting"
        type="checkbox"
        class="mt-1 w-5 h-5 accent-details"
      />

      <label class="text-white text-sm leading-relaxed">
        Aceitar serviços de hospedagem pet
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

    <span v-if="errors.acceptTerms" class="text-red-400 text-sm">
      {{ errors.acceptTerms }}
    </span>

    <button
      type="submit"
      :disabled="isLoading"
      class="w-full h-16 bg-details text-white font-semibold rounded-lg mt-8 md:mt-10 hover:opacity-90 transition disabled:opacity-50"
    >
      {{ isLoading ? "Registrando..." : "Cadastrar" }}
    </button>
  </form>
</template>
