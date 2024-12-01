<template>
  <div class="flex flex-col">
    <label v-if="!hideLabel" class="mb-1 text-sm">{{ label }}</label>
    <div class="relative">
      <input
        name="username"
        autocomplete="username"
        :class="[
          { 'pr-10': appendIconName || $slots['append-icon'] },
          'bg-transparent w-full border-white/50 px-4 py-2 placeholder:text-white placeholder:text-sm rounded-[40px] outline-none focus:border-white border-[1px]'
        ]"
        :type="type"
        :placeholder="placeholder"
      />
      <Icon
        v-if="appendIconName"
        class="absolute right-3 top-1/2 -translate-y-2/4"
        :name="appendIconName"
        :size="appendIconSize"
      />
      <div
        v-if="$slots['append-icon']"
        class="absolute right-3 top-1/2 -translate-y-2/4 flex items-center"
      >
        <slot name="append-icon" />
      </div>
    </div>
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
  },
  appendIconName: {
    type: String,
    default: ""
  },
  appendIconSize: {
    type: String,
    default: "24px"
  }
});
</script>
