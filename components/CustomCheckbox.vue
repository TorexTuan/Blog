<template>
  <div class="checkbox-wrapper-4 w-fit">
    <input id="morning" v-model="isCheck" class="inp-cbx" type="checkbox" />
    <label class="cbx flex items-center" for="morning">
      <span>
        <svg width="12px" height="10px">
          <use xlink:href="#check-4"></use>
        </svg>
      </span>
      <span class="text-sm">{{ name }}</span>
    </label>
    <svg class="inline-svg">
      <symbol id="check-4" viewbox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
      </symbol>
    </svg>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const isCheck = computed<boolean>({
  get(): boolean {
    return modelValue;
  },
  set(value: boolean): void {
    emit("update:modelValue", value);
  }
});

const { name, modelValue } = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: "Default Label"
  }
});
</script>

<style scoped>
.checkbox-wrapper-4 * {
  box-sizing: border-box;
}
.checkbox-wrapper-4 .cbx {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding: 2px 0;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.checkbox-wrapper-4 .cbx span {
  float: left;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper-4 .cbx span:first-child {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  transform: scale(1);
  border: 1px solid #cccfdb;
  transition: all 0.2s ease;
  box-shadow: 0 1px 1px rgba(0, 16, 75, 0.05);
}
.checkbox-wrapper-4 .cbx span:first-child svg {
  position: absolute;
  top: 2px;
  left: 1px;
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper-4 .cbx span:last-child {
  padding-left: 8px;
  line-height: 18px;
}

.checkbox-wrapper-4 .inp-cbx {
  position: absolute;
  visibility: hidden;
}
.checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child {
  background: #d547ef;
  border-color: #d547ef;
  animation: wave-4 0.4s ease;
}
.checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.checkbox-wrapper-4 .inline-svg {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}
@media screen and (max-width: 640px) {
  .checkbox-wrapper-4 .cbx {
    width: 100%;
    display: inline-block;
  }
}
@-moz-keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}
@-webkit-keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}
@-o-keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}
@keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}
</style>
