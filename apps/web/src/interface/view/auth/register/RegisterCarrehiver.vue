<script setup lang="ts">
import { ref } from "vue";
import RegisterRadiusAndCEP from "../../../components/form/RegisterRadiusAndCEP.vue";

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
  <div class="flex justify-center items-center h-full w-full">
    <div class="bg-secondary rounded-2xl p-28 shadow min-h-screen w-[60%]">
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
</template>
