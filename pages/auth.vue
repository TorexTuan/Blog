<template>
  <div
    class="flex-center bg-[url('/assets/images/background-img.jpg')] h-screen"
  >
    <form
      class="shadow-2xl shadow-black/50 rounded-xl p-10 flex-center flex-col border-[1px] border-white/20 backdrop-blur-xl w-[400px]"
    >
      <p class="label mb-2">{{ isRegister ? "Register" : "Login" }}</p>
      <div class="flex flex-col w-full">
        <CustomTextBox
          hide-label
          class="my-3"
          label="Username"
          placeholder="Username"
          append-icon-name="tabler:user-circle"
        />
        <CustomTextBox
          hide-label
          class="my-3"
          label="Password"
          placeholder="Password"
          :type="isShowPassword ? 'text' : 'password'"
        >
          <template #append-icon>
            <Icon
              v-if="isShowPassword"
              name="tabler:eye"
              class="cursor-pointer"
              size="24px"
              @click="isShowPassword = !isShowPassword"
            />
            <Icon
              v-else
              name="tabler:eye-closed"
              class="cursor-pointer"
              size="24px"
              @click="isShowPassword = !isShowPassword"
            />
          </template>
        </CustomTextBox>
        <CustomTextBox
          v-if="isRegister"
          hide-label
          class="my-3"
          label="Confirm Password"
          placeholder="Confirm Password"
          :type="isShowConfirmPassword ? 'text' : 'password'"
        >
          <template #append-icon>
            <Icon
              v-if="isShowConfirmPassword"
              name="tabler:eye"
              class="cursor-pointer"
              size="24px"
              @click="isShowConfirmPassword = !isShowConfirmPassword"
            />
            <Icon
              v-else
              name="tabler:eye-closed"
              class="cursor-pointer"
              size="24px"
              @click="isShowConfirmPassword = !isShowConfirmPassword"
            />
          </template>
        </CustomTextBox>
        <div v-if="!isRegister" class="my-2 flex justify-between">
          <CustomCheckbox type="text" name="Remember me" />
          <span class="underline-text"> Forgot password? </span>
        </div>
        <CustomButton
          type="button"
          :name="isRegister ? 'Submit' : 'Login'"
          class="mt-2 text-black"
        />
        <div class="text-center mt-3 flex-center">
          <div v-if="isRegister">
            <span class="text-sm"> You already had an account! </span>
            <span class="underline-text" @click="switchRegisterForm(false)">
              Login
            </span>
          </div>
          <div v-else>
            <span class="text-sm"> Have you had an account? </span>
            <span class="underline-text" @click="switchRegisterForm(true)">
              Register
            </span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isRegister = ref<boolean>(false);
const isShowPassword = ref<boolean>(false);
const isShowConfirmPassword = ref<boolean>(false);

function switchRegisterForm(value: boolean): void {
  isRegister.value = value;
  isShowPassword.value = false;
  isShowConfirmPassword.value = false;
}
</script>
