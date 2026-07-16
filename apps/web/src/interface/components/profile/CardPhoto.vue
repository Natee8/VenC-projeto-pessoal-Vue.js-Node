<script setup lang="ts">
import { ProfileDTO } from "@packages";

type Profile = ProfileDTO;

defineProps<{
  profile: Profile;
  loading: boolean;
}>();
</script>

<template>
  <div
    v-if="!loading"
    class="w-full mx-auto bg-white rounded-[20px] shadow overflow-hidden"
  >
    <div
      class="h-[120px] bg-gradient-to-r from-[#69CE96]/80 to-[#12354D]/90"
    ></div>

    <div class="px-6 pb-6 relative">
      <div class="absolute -top-12 left-6">
        <div
          class="w-24 h-24 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center text-lg font-semibold text-gray-600"
        >
          {{
            profile?.user?.name
              ? profile.user.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase()
              : "??"
          }}
        </div>
      </div>

      <div class="flex items-center justify-between pt-4">
        <div class="flex flex-col ml-32">
          <div class="flex items-center gap-2">
            <h2 class="text-lg font-semibold text-texts-primary-darks">
              {{ profile?.user?.name || "Usuário" }}
            </h2>

            <span
              class="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full"
            >
              {{
                profile?.caregiverProfile?.isVerified
                  ? "Verificado"
                  : "Não verificado"
              }}
            </span>

            <span
              class="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full"
            >
              {{
                profile?.caregiverProfile?.isPublicProfile
                  ? "Público"
                  : "Privado"
              }}
            </span>
          </div>

          <div class="flex items-center gap-2 text-sm text-texts-default mt-1">
            <span>
              {{
                profile?.caregiverProfile ? "Cuidador(a) de pets" : "Usuário"
              }}
            </span>

            <span>•</span>

            <span>
              {{
                profile?.caregiverProfile?.address?.city &&
                profile?.caregiverProfile?.address?.state
                  ? `${profile.caregiverProfile.address.city}/${profile.caregiverProfile.address.state}`
                  : "Local não informado"
              }}
            </span>
          </div>
        </div>

        <div>
          <button
            class="flex items-center gap-2 bg-secondary hover:bg-secondaryHover text-white px-12 py-2 rounded-lg text-sm transition"
          >
            <i class="fas fa-pen"></i>
            Editar perfil
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center">Carregando perfil...</div>
</template>
