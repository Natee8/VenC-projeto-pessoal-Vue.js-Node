<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { registerRepository } from "@/infrastructure/repositories/userBaseRepository";
import FormProfileBase from "@/interface/components/form/formProfileBase.vue";

const route = useRoute();
const router = useRouter();

const role = computed(() => route.query.user as string);
const isOwner = computed(() => role.value === "owner");

const isLoading = ref(false);

const publicProfile = ref(false);
const acceptPetHosting = ref(false);
const acceptTerms = ref(false);

const profileImage = ref<string | null>(null);

const handleImageUpload = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;

  profileImage.value = URL.createObjectURL(file);
};

const removeImage = () => {
  profileImage.value = null;
};

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  const base = JSON.parse(sessionStorage.getItem("register-base") || "{}");
  const address = JSON.parse(
    sessionStorage.getItem("register-address") || "{}",
  );

  const payload = {
    ...base,

    type: role.value,

    profilePhotoUrl: profileImage.value,

    address: {
      street: address.street,
      number: address.number,
      city: address.city,
      state: address.state,
      neighborhood: address.neighborhood,
      zipCode: address.zipCode,
    },

    searchRadiusKm: address.serviceRadius,

    isPublicProfile: publicProfile.value,
    offersHosting: acceptPetHosting.value,
  };

  try {
    isLoading.value = true;

    await registerRepository.register(payload);

    sessionStorage.clear();

    router.push({ name: "login" });
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <AuthLayout>
    <div class="flex justify-center items-center h-full w-full">
      <div class="bg-secondary rounded-2xl p-28 shadow min-h-screen w-[60%]">
        <div class="flex flex-col items-center text-center gap-3 mb-8">
          <img src="/assets/logos/logoWhite.svg" alt="Logo vencá" width="160" />
          <p class="text-white/80 text-[1.2rem]">
            Complete seu perfil para começar a atuar como cuidador no Vencá
          </p>
        </div>

        <FormProfileBase />
      </div>
    </div>
  </AuthLayout>
</template>
