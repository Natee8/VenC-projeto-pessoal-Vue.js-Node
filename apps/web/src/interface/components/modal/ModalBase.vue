<script>
export default {
  name: "ModalReutilizavel",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    width: {
      type: String,
      default: "500px",
    },
    maxHeight: {
      type: String,
      default: "80vh",
    },
    minHeight: {
      type: String,
      default: "200px",
    },
  },
  emits: ["close"],
};
</script>

<template>
  <teleport to="body">
    <!-- REMOVA o v-if daqui! O pai controla a renderização -->
    <div
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60"
      v-show="show"
      @click.self="$emit('close')"
    >
      <div
        class="relative bg-white rounded-xl p-5 max-w-[95vw]"
        :style="{ width, maxHeight }"
      >
        <button
          class="absolute top-3 right-3 text-xl text-gray-500 hover:text-gray-800"
          @click="$emit('close')"
        >
          <i class="fa fa-times"></i>
        </button>

        <div
          class="overflow-y-auto"
          :style="{
            maxHeight: 'calc(' + maxHeight + ' - 40px)',
            minHeight: 'calc(' + minHeight + ' - 40px)',
          }"
        >
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>
