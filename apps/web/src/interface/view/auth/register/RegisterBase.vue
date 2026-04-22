<script setup lang="ts">
import { registerRepository } from "@/infrastructure/repositories/userBaseRepository";
import FormProfileBase from "@/interface/components/form/formProfileBase.vue";
import RegisterFormBase from "@/interface/components/form/RegisterFormBase.vue";
import RegisterRadiusAndCEP from "@/interface/components/form/RegisterRadiusAndCEP.vue";
import { ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const step = ref(1);

/* BASE */
const userName = ref("");
const email = ref("");
const birthDate = ref("");
const cpf = ref("");
const password = ref("");
const confirmPassword = ref("");

/* ADDRESS */
const street = ref("");
const number = ref("");
const neighborhood = ref("");
const city = ref("");
const state = ref("");
const zipCode = ref("");
const serviceRadius = ref(10);

/* PROFILE */
const isLoading = ref(false);

/* STEP 1 */
const handleBaseSubmit = () => {
  if (password.value !== confirmPassword.value) return;

  sessionStorage.setItem(
    "register-base",
    JSON.stringify({
      name: userName.value,
      email: email.value,
      birthDate: birthDate.value,
      cpf: cpf.value,
      password: password.value,
    }),
  );

  step.value = 2;
};

/* STEP 2 */
const handleAddressSubmit = () => {
  sessionStorage.setItem(
    "register-address",
    JSON.stringify({
      street: street.value,
      number: number.value,
      neighborhood: neighborhood.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
      serviceRadius: serviceRadius.value,
    }),
  );

  step.value = 3;
};

/* FINAL */
const handleProfileSubmit = async (data: any) => {
  const base = JSON.parse(sessionStorage.getItem("register-base") || "{}");
  const address = JSON.parse(
    sessionStorage.getItem("register-address") || "{}",
  );

  const payload = {
    ...base,
    ...address,
    profilePhotoUrl: data.profileImage,
    isPublicProfile: data.publicProfile,
    offersHosting: data.acceptPetHosting,
    type: "caregiver",
  };

  await registerRepository.register(payload);

  sessionStorage.clear();

  router.push({ name: "login" });
};
</script>
<template>
  <AuthLayout>
    <div class="flex justify-center items-center h-full w-full">
      <div class="bg-secondary rounded-2xl p-28 shadow min-h-screen w-[60%]">
        <div class="flex flex-col items-center text-center gap-3 mb-8">
          <img src="/assets/logos/logoWhite.svg" alt="Logo vencá" width="160" />

          <p class="text-white/80 text-[1.2rem]">
            Complete seu perfil para começar a utilizar o Vencá
          </p>
        </div>

        <!-- STEPS -->
        <RegisterFormBase
          v-if="step === 1"
          v-model:name="userName"
          v-model:email="email"
          v-model:birthDate="birthDate"
          v-model:cpf="cpf"
          v-model:password="password"
          v-model:confirmPassword="confirmPassword"
          :isLoading="isLoading"
          @submit="handleBaseSubmit"
        />

        <RegisterRadiusAndCEP
          v-if="step === 2"
          v-model:street="street"
          v-model:number="number"
          v-model:neighborhood="neighborhood"
          v-model:city="city"
          v-model:state="state"
          v-model:zipCode="zipCode"
          v-model:serviceRadius="serviceRadius"
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
