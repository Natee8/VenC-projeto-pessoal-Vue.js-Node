<script setup lang="ts">
import { ref } from "vue";
import { verifyCodeSchema } from "./schemas/verifyCode";

export type CodeFormData = {
  code: string;
};

export type CodeFormErrors = {
  code?: string;
};

const emit = defineEmits<{
  (e: "change", value: CodeFormData): void;
}>();

const inputs = ref<string[]>(Array(6).fill(""));
const inputRefs = ref<HTMLInputElement[]>([]);

const errors = ref<CodeFormErrors>({});

const setRef = (el: HTMLInputElement | null, index: number) => {
  if (el) inputRefs.value[index] = el;
};

const focusNext = (index: number) => {
  inputRefs.value[index + 1]?.focus();
};

const focusPrev = (index: number) => {
  inputRefs.value[index - 1]?.focus();
};

const onInput = (e: Event, index: number) => {
  const target = e.target as HTMLInputElement;
  const value = target.value.replace(/\D/g, "").slice(-1);

  inputs.value[index] = value;

  if (value && index < 5) {
    focusNext(index);
  }

  emit("change", {
    code: inputs.value.join(""),
  });
};

const onKeyDown = (e: KeyboardEvent, index: number) => {
  if (e.key === "Backspace" && !inputs.value[index] && index > 0) {
    focusPrev(index);
  }
};

const validate = async () => {
  const code = inputs.value.join("");

  try {
    const data = await verifyCodeSchema.validate(
      { code },
      { abortEarly: false },
    );

    errors.value = {};

    return {
      valid: true,
      data,
    };
  } catch (err: any) {
    errors.value = {};

    err.inner.forEach((validationError: any) => {
      errors.value[validationError.path as keyof CodeFormErrors] =
        validationError.message;
    });

    return {
      valid: false,
      data: { code },
    };
  }
};

defineExpose({
  validate,
});
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <label class="text-white font-semibold">Código de verificação</label>

    <div class="flex gap-6">
      <input
        v-for="(value, index) in inputs"
        :key="index"
        :ref="(el) => setRef(el as HTMLInputElement, index)"
        v-model="inputs[index]"
        maxlength="1"
        inputmode="numeric"
        placeholder="0"
        class="w-24 h-24 text-center text-lg font-bold rounded-lg bg-white border border-gray-200 outline-none focus:border-details placeholder:text-2xl placeholder:text-secondary/25"
        @input="onInput($event, index)"
        @keydown="onKeyDown($event, index)"
      />
    </div>

    <span v-if="errors.code" class="text-red-400 text-sm">
      {{ errors.code }}
    </span>
  </div>
</template>
