<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import AuthLayout from "src/interface/layout/auth/authLayout.vue";
import AuthFormContainer from "src/interface/layout/auth/authContainerForms.vue";

const route = useRoute();
const router = useRouter();

const rawEmail =
  (route.query.email as string) || sessionStorage.getItem("resetEmail") || "";

const email = computed(() => {
  if (!rawEmail) return "";
  const [name, domain] = rawEmail.split("@");
  return `${name.slice(0, 2)}•••${name.slice(-2)}@${domain}`;
});

const goBack = () => router.push({ name: "send-email" });

const goToLogin = () => {
  router.push({ name: "login" });
};
</script>

<template>
  <AuthLayout>
    <AuthFormContainer>
      <div class="flex items-center justify-center">
        <div
          class="w-full max-w-[800px] flex flex-col items-center text-center"
        >
          <div class="relative mb-10 flex items-center justify-center">
            <!-- glow base -->
            <div
              class="absolute w-60 h-60 bg-primary/20 rounded-full blur-[100px]"
            ></div>

            <!-- glow animado -->
            <div
              class="absolute w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse"
            ></div>

            <!-- imagem -->
            <img
              src="/assets/icons/petEmail.svg"
              alt="E-mail enviado"
              class="w-44 relative drop-shadow-xl animate-float"
            />
          </div>

          <h2 class="text-2xl font-semibold text-white mb-3">Link enviado</h2>

          <p class="text-white/80 leading-relaxed mb-12">
            Enviamos um link para o e-mail
            <span class="text-white font-medium break-all">{{ email }}</span
            >.
            <br />
            Caso ele exista em nossa base, você poderá redefinir sua senha.
          </p>

          <button
            class="w-full h-12 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
            @click="goToLogin"
          >
            Voltar para o login
          </button>

          <div class="w-full flex items-center gap-3 my-6">
            <div class="flex-1 h-[1px] bg-white/20"></div>
            <span class="text-white/50 text-xs">ou</span>
            <div class="flex-1 h-[1px] bg-white/20"></div>
          </div>

          <div class="flex flex-col items-center gap-3">
            <p class="text-white/70 text-sm">
              Não recebeu?
              <span
                class="text-primary cursor-pointer hover:underline ml-1"
                @click="goBack"
              >
                Reenviar
              </span>
            </p>
          </div>
        </div>
      </div>
    </AuthFormContainer>
  </AuthLayout>
</template>
