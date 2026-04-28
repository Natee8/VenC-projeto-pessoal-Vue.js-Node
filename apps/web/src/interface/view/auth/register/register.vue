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
    <div class="flex justify-center items-center h-full w-full my-24">
      <div class="bg-secondary rounded-2xl p-28 shadow min-h-screen w-[60%]">
        <div class="flex flex-col items-center text-center gap-3 mb-8">
          <img src="/assets/logos/logoWhite.svg" alt="Logo vencá" width="160" />

          <p class="text-white/80 text-[1.2rem]">
            Complete seu perfil para começar a utilizar o Vencá
          </p>
        </div>

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
  </AuthLayout>
</template>
