<template>
  <button
    v-bind="$attrs"
    :class="[
      { 'bg-white/90 hover:bg-white': !outlined },
      'border-[1px] rounded-[40px] py-[6px]'
    ]"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
const { name, outlined } = defineProps({
  name: {
    type: String,
    default: "Button"
  },
  outlined: {
    type: Boolean,
    default: false
  }
});
</script>
