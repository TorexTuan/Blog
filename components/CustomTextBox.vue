<template>
  <div :class="[{ 'pb-5': !error }, 'flex flex-col']">
    <label v-if="!hideLabel" class="mb-1 text-sm">{{ label }}</label>
    <div class="relative">
      <input
        v-model="inputValue"
        name="username"
        autocomplete="username"
        :class="[
          { 'pr-10': appendIconName || $slots['append-icon'] },
          error
            ? 'placeholder:text-red-600 border-red-600'
            : 'placeholder:text-white focus:border-white border-white/50',
          'bg-transparent w-full px-4 py-2 placeholder:text-sm rounded-[40px] outline-none border-[1px]'
        ]"
        :type="type"
        :placeholder="placeholder"
      />
      <Icon
        v-if="appendIconName"
        :class="[
          { 'text-red-600': error },
          'absolute right-3 top-1/2 -translate-y-2/4'
        ]"
        :name="appendIconName"
        :size="appendIconSize"
      />
      <div
        v-if="$slots['append-icon']"
        :class="[
          { 'text-red-600': error },
          'absolute right-3 top-1/2 -translate-y-2/4 flex items-center'
        ]"
      >
        <slot name="append-icon" />
      </div>
    </div>
    <div v-if="error" class="text-xs text-red-600 mx-4 mt-1">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const emit = defineEmits(["update:modelValue"]);
const inputValue = computed<string>({
  get(): string {
    return modelValue;
  },
  set(value: string): void {
    emit("update:modelValue", value);
  }
});

const { label, placeholder, modelValue } = defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: "Label"
  },
  placeholder: {
    type: String,
    default: "Placeholder"
  },
  hideLabel: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "text"
  },
  appendIconName: {
    type: String,
    default: ""
  },
  appendIconSize: {
    type: String,
    default: "24px"
  },
  error: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ""
  }
});
</script>
