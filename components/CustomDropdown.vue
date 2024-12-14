<template>
  <div>
    <div
      class="w-32 min-h-8 p-2 rounded-lg bg-default-blur cursor-pointer"
      @click="isShowMenu = !isShowMenu"
    >
      {{ selectedItem.text }}
    </div>
    <div v-if="isShowMenu" class="bg-default-blur rounded-lg py-3 px-2 mt-2">
      <div
        v-for="item in items"
        :key="item.value"
        :class="[
          'p-1 cursor-pointer hover:bg-slate-500 hover:rounded-md',
          { 'bg-slate-500 rounded-md': selectedItem.value == item.value }
        ]"
        @click="selectItem(item)"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DropdownItem } from "@/dto/custom.dto";
const { items } = defineProps({
  items: {
    type: Array<DropdownItem>,
    default: () => []
  }
});

const isShowMenu = ref<boolean>(false);
const emit = defineEmits(["update:modelValue"]);
const selectedItem = ref<DropdownItem>(items[0]);

function selectItem(newItem: DropdownItem): void {
  selectedItem.value = newItem;
  isShowMenu.value = false;
  emit("update:modelValue", selectedItem.value.value);
}
</script>
