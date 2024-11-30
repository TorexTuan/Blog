<template>
  <div
    class="flex-center bg-[url('/assets/images/background-img.jpg')] h-screen"
  >
    <form
      class="shadow-2xl shadow-black/50 rounded-xl p-10 flex-center flex-col border-[1px] border-white/20 backdrop-opacity-50 w-[400px]"
    >
      <p class="label mb-2">Login</p>
      <div class="flex flex-col w-full">
        <CustomTextBox
          hide-label
          class="my-3"
          label="Username"
          placeholder="Username"
        />
        <CustomTextBox
          hide-label
          class="my-3"
          label="Password"
          placeholder="Password"
          type="password"
        />
        <div class="my-2 flex justify-between">
          <CustomCheckbox type="text" name="Remember me" />
          <span class="hover:underline text-sm cursor-pointer">
            Forgot password?
          </span>
        </div>
        <CustomButton type="button" name="Login" class="mt-2 text-black" />
      </div>
    </form>
  </div>
</template>
