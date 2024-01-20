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
const redirect = useLoadingIndicator()
const errMessage = ref()
async function signUp() {
  try {
    const {  data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: 'http://localhost:3000/account'
      }
    });
    
    errMessage.value =  error
    
    if (error) throw createError({statusCode: 400, statusMessage: `${error}`})
    
    if(!error) {
      redirect.isLoading
      try {
        await $fetch('/api/client/identity',{
          method: 'post',
          body: {
            id: data?.user?.id,
            email: data?.user?.email
          }
        })
      }
      catch(error) {
        console.log(error)
      }
      finally {
        errMessage.value =  'Redirect'
        navigateTo('/account')
      }
    }
  }
  catch (error) {
    open.value = false
    window.clearTimeout(timerRef.value)
    timerRef.value = window.setTimeout(() => {
      open.value = true
    }, 100)
    throw createError({statusCode: 400, statusMessage: `${error}`})
  }
}
const open = ref(false)
const timerRef = ref(0)



</script>
<template>
  <ToastProvider >
    
    <ToastRoot
    :duration="3000"
      v-model:open="open"
      class="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
    >
      <ToastTitle class="">
       
      </ToastTitle>
      <ToastDescription class="w-1/2" as-child>
        {{ errMessage }}
      </ToastDescription>
      <ToastAction class="[grid-area:_action]" as-child alt-text="Goto schedule to undo">
        <button class="border-teal-500 inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
          Close
        </button>
      </ToastAction>
    </ToastRoot>
    <ToastViewport class="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
  
  <div class="w-full h-dvh flex justify-center items-center">
    <div class="w-3/4 mb-60 flex flex-col items-center bg-white/80 shadow-md rounded-md border-2 p-8">
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
              <p class="text-black/80">Already Have an Account?
                <NuxtLink href="/login" class="text-teal-500">Login</NuxtLink>
              </p>
            </div>
            
          </div>
          </form>
          
      </div>
      <div class="">
      <ToastViewport />
  </div>
    </div>
   
  </div>
  

</ToastProvider>
</template>
