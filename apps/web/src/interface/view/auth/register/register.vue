<script setup lang="ts">
import { registerRepository } from "src/infrastructure/repositories/userBaseRepository";
import RegisterFormBase from "src/interface/components/form/RegisterFormBase.vue";
import RegisterRadiusAndCEP from "src/interface/components/form/RegisterRadiusAndCEP.vue";
import AuthLayout from "src/interface/layout/auth/authLayout.vue";
import AuthFormContainer from "src/interface/layout/auth/authContainerForms.vue";

import { createRegisterForm } from "src/interface/utils/registerPayload";
import { ref } from "vue";

import { useRoute, useRouter } from "vue-router";
import FormProfileBase from "src/interface/components/form/formProfileBase.vue";
import { Role } from "@packages";

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

const rawUserType = route.query.user;

if (rawUserType !== "OWNER" && rawUserType !== "CAREGIVER") {
  router.replace({ name: "login" });
}

const userType = rawUserType as Role;

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

    await registerRepository.register({
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

    showSnackbar("Usuário cadastrado com sucesso", "success");

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
    <AuthFormContainer
      subtitle="Complete seu perfil para começar a utilizar o Vencá"
    >
      <!-- FORMS -->
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

      <template #actions>
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
      </template>
    </AuthFormContainer>

    <snackbarBase
      :show="snackbarShow"
      :message="snackbarMessage"
      :type="snackbarType"
    />
  </AuthLayout>
</template>
