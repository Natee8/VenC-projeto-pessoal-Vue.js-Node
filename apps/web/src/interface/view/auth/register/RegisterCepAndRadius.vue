<script setup lang="ts">
import { ref } from "vue";
import RegisterRadiusAndCEP from "../../../components/form/RegisterRadiusAndCEP.vue";
import AuthLayout from "../../../layout/auth/authLayout.vue";

const street = ref("");
const number = ref("");
const neighborhood = ref("");
const city = ref("");
const state = ref("");
const zipCode = ref("");
const country = ref("");
const serviceRadius = ref(10);

const isLoading = ref(false);

const handleSubmit = () => {
  console.log({
    zipCode: zipCode.value,
    country: country.value,
    state: state.value,
    city: city.value,
    neighborhood: neighborhood.value,
    street: street.value,
    number: number.value,
    serviceRadius: serviceRadius.value,
  });
};
</script>
<template>
  <AuthLayout>
    <div class="flex justify-center items-center h-full w-full">
      <div
        class="bg-secondary rounded-2xl p-28 shadow min-h-[800px] flex-col items-center justify-center w-[60%]"
      >
        <div class="flex flex-col items-center text-center gap-3 mb-8">
          <img src="/assets/logos/logoWhite.svg" alt="Logo vencá" width="160" />
          <p class="text-white/80 text-[1.2rem]">
            Preencha suas informações para personalizar sua experiência no Vencá
          </p>
        </div>
        <RegisterRadiusAndCEP
          v-model:street="street"
          v-model:number="number"
          v-model:neighborhood="neighborhood"
          v-model:city="city"
          v-model:state="state"
          v-model:zipCode="zipCode"
          v-model:country="country"
          v-model:serviceRadius="serviceRadius"
          :isLoading="isLoading"
          @submit="handleSubmit"
        />
      </div>
    </div>
  </AuthLayout>
</template>
