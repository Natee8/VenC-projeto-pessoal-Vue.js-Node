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

const userType = route.query.user as "owner" | "caregiver";

const handleBaseSubmit = () => {
  if (form.base.password !== form.base.confirmPassword) return;

  sessionStorage.setItem(
    "register-base",
    JSON.stringify({
      name: form.base.name,
      email: form.base.email,
      birthDate: form.base.birthDate,
      cpf: form.base.cpf,
      password: form.base.password,
    }),
  );

  step.value = 2;
};

const handleAddressSubmit = () => {
  sessionStorage.setItem(
    "register-address",
    JSON.stringify({
      street: form.address.street,
      number: form.address.number,
      neighborhood: form.address.neighborhood,
      city: form.address.city,
      state: form.address.state,
      zipCode: form.address.zipCode,
      serviceRadiusKm: form.address.serviceRadiusKm,
    }),
  );

  step.value = 3;
};

const handleProfileSubmit = async (data: any) => {
  const base = JSON.parse(sessionStorage.getItem("register-base") || "{}");
  const address = JSON.parse(
    sessionStorage.getItem("register-address") || "{}",
  );

  const payload = {
    ...base,

    address: {
      street: address.street,
      number: address.number,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
    },
    serviceRadiusKm: address.serviceRadiusKm,
    profileImage: data.profileImage,
    isPublicProfile: data.publicProfile,
    offersHosting: data.acceptPetHosting,
    type: userType,
  };
  console.log(payload);

  await registerRepository.register(payload);

  sessionStorage.clear();

  router.push({ name: "login" });
};
</script>
<template>
  <AuthLayout>
    <div class="flex justify-center items-center h-full w-full py-4 md:py-8">
      <div class="bg-secondary rounded-2xl md:rounded-3xl px-5 pt-8 pb-12 sm:px-8 sm:pt-10 sm:pb-14 md:px-10 md:pt-12 md:pb-16 lg:px-12 lg:pb-20 xl:px-16 shadow-xl w-full max-w-[1200px]">
        <div class="flex flex-col items-center text-center gap-3 mb-8 md:mb-10">
          <img src="/assets/logos/logoWhite.svg" alt="Logo vencá" class="w-32 md:w-36 lg:w-40" />

          <p class="text-white/80 text-base md:text-lg">
            Complete seu perfil para começar a utilizar o Vencá
          </p>
        </div>

        <div class="pb-2 md:pb-4">
          <RegisterFormBase
            v-if="step === 1"
            v-model:name="form.base.name"
            v-model:email="form.base.email"
            v-model:birthDate="form.base.birthDate"
            v-model:cpf="form.base.cpf"
            v-model:password="form.base.password"
            v-model:confirmPassword="form.base.confirmPassword"
            :isLoading="isLoading"
            @submit="handleBaseSubmit"
          />

          <RegisterRadiusAndCEP
            v-if="step === 2"
            v-model:street="form.address.street"
            v-model:number="form.address.number"
            v-model:neighborhood="form.address.neighborhood"
            v-model:city="form.address.city"
            v-model:state="form.address.state"
            v-model:zipCode="form.address.zipCode"
            v-model:serviceRadius="form.address.serviceRadiusKm"
            :isLoading="isLoading"
            @submit="handleAddressSubmit"
          />

          <FormProfileBase
            v-if="step === 3"
            :isLoading="isLoading"
            @submit="handleProfileSubmit"
          />
        </div>
      </div>
    </div>
  </AuthLayout>
</template>
