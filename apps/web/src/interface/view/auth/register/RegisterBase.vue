<script setup lang="ts">
import { ref } from "vue";
import AuthLayout from "../../../layout/auth/authLayout.vue";
import {
  RegisterData,
  UserDTO,
} from "../../../../../../../packages/src/domain/dtos/IUser.dto";
import { registerRepository } from "../../../../infrastructure/repositories/userBaseRepository";
import { useNotyf } from "../../../../infrastructure/utils/notifyFunction";
import RegisterFormBase from "../../../components/form/RegisterFormBase.vue";

const name = ref("");
const email = ref("");
const birthDate = ref("");
const cpf = ref("");
const password = ref("");
const confirmPassword = ref("");
const isLoading = ref(false);

const notyf = useNotyf();

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    notyf.error("As senhas não coincidem.");
    return;
  }

  const registerData: RegisterData = {
    name: name.value,
    email: email.value,
    birthDate: birthDate.value,
    cpf: cpf.value,
    password: password.value,
  };

  try {
    isLoading.value = true;
    const user: UserDTO = await registerRepository.register(registerData);

    notyf.success(`Usuário ${user.email} registrado com sucesso!`);

    name.value = "";
    email.value = "";
    birthDate.value = "";
    cpf.value = "";
    password.value = "";
    confirmPassword.value = "";
  } catch (err: any) {
    notyf.error(err.response?.data?.error || "Erro ao registrar usuário");
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
            Preencha suas informações para personalizar sua experiência no Vencá
          </p>
        </div>

        <RegisterFormBase
          :name="name"
          @update:name="(val: string) => (name = val)"
          :email="email"
          @update:email="(val: string) => (email = val)"
          :birthDate="birthDate"
          @update:birthDate="(val: string) => (birthDate = val)"
          :cpf="cpf"
          @update:cpf="(val: string) => (cpf = val)"
          :password="password"
          @update:password="(val: string) => (password = val)"
          :confirmPassword="confirmPassword"
          @update:confirmPassword="(val: string) => (confirmPassword = val)"
          :isLoading="isLoading"
          @submit="handleSubmit"
        />
      </div>
    </div>
  </AuthLayout>
</template>
