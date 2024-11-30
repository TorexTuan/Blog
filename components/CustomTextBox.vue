<template>
  <div class="flex flex-col">
    <label v-if="!hideLabel" class="mb-1 text-sm">{{ label }}</label>
    <input
      color=""
      :type="type"
      name="username"
      autocomplete="username"
      class="bg-transparent border-white/50 px-4 py-2 placeholder:text-white placeholder:text-sm rounded-[40px] outline-none focus:border-white border-[1px]"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
const { label, placeholder } = defineProps({
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
  }
});
</script>
