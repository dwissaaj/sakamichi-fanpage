<script setup lang="ts">
import { Label } from 'radix-vue'
useSeoMeta({
  title: 'Register Your Account',
  ogTitle: 'Sakamichi Online Account',
  description: 'Sakamichi Online Fanbase for Sakamichi Series',
  ogDescription: 'Sakamichi Online Fanbase for Sakamichi Series',
  ogImage: 'https://www.sakamichi.online/home/nogizaka.jpg',
})
const supabase = useSupabaseClient()
const email = ref("")
const password = ref("")
const errMessage = ref("")
const scssMessage = ref("")
async function signUp() {
  try {
    const {  error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: 'http://localhost:3000/account'
      }
    });
    if (error) throw error
    scssMessage.value = "Redirect"
    navigateTo('/account')
  }
  catch (error) {
    errMessage.value = String(error)

  }
}
</script>
<template>
  <div class="w-full flex justify-center items-center">
    <div class="flex flex-col items-center bg-white/80 shadow-md rounded-md border-2 p-8">
      <div>
        <h1 class="text-lg font-bold">Register an Account</h1>
      </div>
      <div>
        <form @submit.prevent="signUp">
          <div class="mt-8 flex flex-col gap-4 ">
            <div class="flex flex-col gap-2">
              <Label class="text-[15px] font-semibold leading-[35px] text-black" for="Email"> Email </Label>
              <input id="Email"
                class="border-2 border-black inline-flex h-[35px] max-w-[300px] lg:max-w-[500px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                type="text" placeholder="Your Email" v-model="email">
            </div>
            <div class="flex flex-col gap-2">
              <Label class="text-[15px] font-semibold leading-[35px] text-black" for="password"> Password </Label>
              <input id="password"
                class="border-2 border-black inline-flex h-[35px] max-w-[300px] lg:max-w-[500px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                type="password" placeholder="Passsword 8 digit" v-model="password">
            </div>
            <div>
              <div class="max-w-[100px] bg-teal-500 rounded-md p-2 text-center">
                <button>Sign Up</button>
              </div>

            </div>
            <div>
              <p class="text-red-500 italic">{{ errMessage }} {{ scssMessage }}</p>
            </div>
          </div>
          </form>
      </div>
    </div>
  </div>
</template>
