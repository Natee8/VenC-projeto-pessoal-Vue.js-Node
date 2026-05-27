<script setup lang="ts">
import { registerRepository } from "src/infrastructure/repositories/userBaseRepository";
import FormProfileBase from "src/interface/components/form/formProfileBase.vue";
import RegisterFormBase from "src/interface/components/form/RegisterFormBase.vue";
import RegisterRadiusAndCEP from "src/interface/components/form/RegisterRadiusAndCEP.vue";
import AuthLayout from "src/interface/layout/auth/authLayout.vue";

import { createRegisterForm } from "src/interface/utils/registerPayload";
import { ref } from "vue";

import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const step = ref(1);
const form = createRegisterForm();
const isLoading = ref(false);

const snackbarShow = ref(false);
const snackbarMessage = ref("");
const snackbarType = ref<"success" | "error">("success");

const DEFAULT_PROFILE_IMAGE = "profileDefault.png";

const baseFormRef = ref();
const addressFormRef = ref();
const profileFormRef = ref();

const userType = route.query.user as "owner" | "caregiver";

const showSnackbar = (message: string, type: "success" | "error") => {
  snackbarMessage.value = message;
  snackbarType.value = type;
  snackbarShow.value = true;

  setTimeout(() => {
    snackbarShow.value = false;
  }, 3000);
};
const handleBack = () => {
  if (step.value > 1) {
    step.value--;
  }
};

const handleNext = async () => {
  if (isLoading.value) return;
  if (step.value === 1) {
    const result = await baseFormRef.value.validate();

    if (!result.valid) return;

    step.value = 2;
  } else if (step.value === 2) {
    const result = await addressFormRef.value.validate();

    if (!result.valid) return;

    step.value = 3;
  } else if (step.value === 3) {
    const result = await profileFormRef.value.validate();

    if (!result.valid) return;

    await handleFinalSubmit(result.data);
  }
};

const handleFinalSubmit = async (profileData: any) => {
  try {
    isLoading.value = true;

    const response = await registerRepository.register({
      name: form.base.name,
      email: form.base.email,
      birthDate: form.base.birthDate,
      cpf: form.base.cpf,
      password: form.base.password,

      address: {
        street: form.address.street,
        number: form.address.number,
        neighborhood: form.address.neighborhood,
        city: form.address.city,
        state: form.address.state,
        zipCode: form.address.zipCode,
      },

      serviceRadiusKm: form.address.serviceRadiusKm,

      isPublicProfile: profileData.publicProfile,
      offersHosting: profileData.acceptPetHosting,
      type: userType,
      profileImage: profileData.profileImage || DEFAULT_PROFILE_IMAGE,
    });

    showSnackbar(
      response.message || "Usuário cadastrado com sucesso",
      "success",
    );

    setTimeout(() => {
      router.push({ name: "login" });
    }, 1500);
  } catch (error: any) {
    showSnackbar(
      error?.response?.data?.message || "Erro ao cadastrar usuário",
      "error",
    );
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <AuthLayout>
    <div class="flex justify-center items-center h-full w-full py-4 md:py-8">
      <div
        class="bg-secondary rounded-2xl md:rounded-3xl px-5 pt-8 pb-12 sm:px-8 sm:pt-10 sm:pb-14 md:px-10 md:pt-12 md:pb-16 lg:px-12 lg:pb-20 xl:px-16 shadow-xl w-full max-w-[1200px]"
      >
        <div class="flex flex-col items-center text-center gap-3 mb-8 md:mb-10">
          <img
            src="/assets/logos/logoWhite.svg"
            alt="Logo vencá"
            class="w-32 md:w-36 lg:w-40"
          />

          <p class="text-white/80 text-base md:text-lg">
            Complete seu perfil para começar a utilizar o Vencá
          </p>
        </div>

        <div class="pb-2 md:pb-4">
          <RegisterFormBase
            v-if="step === 1"
            ref="baseFormRef"
            v-model:name="form.base.name"
            v-model:email="form.base.email"
            v-model:birthDate="form.base.birthDate"
            v-model:cpf="form.base.cpf"
            v-model:password="form.base.password"
            v-model:confirmPassword="form.base.confirmPassword"
          />

          <RegisterRadiusAndCEP
            v-if="step === 2"
            ref="addressFormRef"
            v-model:street="form.address.street"
            v-model:number="form.address.number"
            v-model:neighborhood="form.address.neighborhood"
            v-model:city="form.address.city"
            v-model:state="form.address.state"
            v-model:zipCode="form.address.zipCode"
            v-model:serviceRadius="form.address.serviceRadiusKm"
          />

          <FormProfileBase v-if="step === 3" ref="profileFormRef" />
        </div>
        <div class="mt-6 flex gap-4">
          <button
            v-if="step > 1"
            @click="handleBack"
            :disabled="isLoading"
            class="w-1/3 h-16 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition disabled:opacity-50"
          >
            Voltar
          </button>

          <button
            @click="handleNext"
            :disabled="isLoading"
            class="h-16 bg-details text-white font-semibold rounded-lg hover:opacity-90 transition disabled:opacity-50"
            :class="step > 1 ? 'w-2/3' : 'w-full'"
          >
            {{
              step === 3
                ? isLoading
                  ? "Cadastrando..."
                  : "Cadastrar"
                : "Continuar"
            }}
          </button>
        </div>
      </div>
    </div>

    <snackbarBase
      :show="snackbarShow"
      :message="snackbarMessage"
      :type="snackbarType"
    />
  </AuthLayout>
</template>
