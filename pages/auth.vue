<template>
  <div
    class="flex-center bg-[url('/assets/images/background-img.jpg')] h-screen relative"
  >
    <CustomDropdown
      :items="[
        { text: $t('languages.english'), value: 'en' },
        { text: $t('languages.vietnamese'), value: 'vn' }
      ]"
      class="absolute top-10 right-10"
      @update:model-value="setLocale"
    />
    <form
      class="bg-default-blur rounded-xl p-10 flex-center flex-col w-[360px] sm:w-[400px]"
    >
      <p class="label mb-2 capitalize">
        {{ isRegister ? $t("auth.register") : $t("auth.login") }}
      </p>
      <div class="flex flex-col w-full">
        <CustomTextBox
          v-model="user.name"
          hide-label
          append-icon-name="tabler:user-circle"
          class="mt-2"
          :placeholder="$t('auth.username')"
        />
        <CustomTextBox
          v-model="user.password"
          hide-label
          class="mt-2"
          :placeholder="$t('auth.password')"
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
          v-model="user.confirmPassword"
          hide-label
          class="mt-2"
          :placeholder="$t('auth.confirm_password')"
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
          <CustomCheckbox
            v-model="user.isRememberMe"
            type="text"
            :name="$t('auth.remember_me')"
          />
          <span class="underline-text"> {{ $t("auth.forgot_password") }} </span>
        </div>
        <CustomButton
          type="button"
          :name="isRegister ? $t('auth.register') : $t('auth.login')"
          class="mt-2 text-black"
          @click="submitUserInfo"
        />
        <div class="text-center mt-3 flex-center">
          <div v-if="isRegister">
            <div class="text-sm">
              {{ $t("auth.confirm_login_note") }}
              <span class="underline-text" @click="switchRegisterForm(false)">
                {{ $t("auth.login") }}
              </span>
            </div>
          </div>
          <div v-else>
            <div class="text-sm">
              {{ $t("auth.confirm_register_note") }}
              <span class="underline-text" @click="switchRegisterForm(true)">
                {{ $t("auth.register") }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { User } from "@/dto/auth.dto";

const { setLocale } = useI18n();
const isRegister = ref<boolean>(false);
const isShowPassword = ref<boolean>(false);
const isShowConfirmPassword = ref<boolean>(false);
const error = ref<boolean>(false);
const user = ref<User>({
  name: "",
  password: "",
  confirmPassword: "",
  isRememberMe: false
});

function switchRegisterForm(value: boolean): void {
  isRegister.value = value;
  isShowPassword.value = false;
  isShowConfirmPassword.value = false;
}

function submitUserInfo(): void {
  error.value = !error.value;
}
</script>
