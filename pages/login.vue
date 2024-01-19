<script setup lang="ts">
import { ref } from 'vue'
useSeoMeta({
    title: 'Login',
    ogTitle: 'Sakamichi Online Account',
    description: 'Sakamichi Online Fanbase for Sakamichi Series',
    ogDescription: 'Sakamichi Online Fanbase for Sakamichi Series',
    ogImage: 'https://www.sakamichi.online/home/nogizaka.jpg',
})
const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
let errMessage = ref()
const signInPass = async () => {
    try {
        const {error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        })
        console.log(error?.status)
        if(error?.status === 400){
            
            errMessage.value = 'Wrong password'
        }
        
        else(error?.status === 200 ) 
            navigateTo('/account')
        
        
    }
    catch (error) {
        errMessage.value = String(error)
    }





}

</script>
<template>
    <section class="w-full h-dvh flex flex-col justify-center items-center">
        <div class="flex justify-center items-center">
        <div class="bg-wite/80 shadow-md border rounded-md p-6">
            <div class="text-center text-2xl">
                <h1>Login To Your Account</h1>
            </div>
            <div>
                <div class="flex flex-col items-start gap-2">
                    <Label class="text-md leading-[35px] text-neutral-800" for="email">Email</Label>
                    <input id="email"
                        class="bg-blackA5 shadow-blackA9 inline-flex h-[50px] w-[400px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-neutral-900 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="email" v-model="email" placeholder="Your Email@.com">
                </div>
                <div class="flex flex-col items-start gap-2">
                    <Label class="text-md leading-[35px] text-neutral-800" for="password">Password</Label>
                    <input id="password"
                        class="bg-blackA5 shadow-blackA9 inline-flex h-[50px] w-[400px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-neutral-900 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="password" v-model="password" placeholder="Password">
                </div>

                <div class="w-full items-center flex justify-center mt-8">
                    <button @click="signInPass" class="w-24 items-center bg-teal-500 rounded-md p-2">
                        Sign In
                    </button>
                </div>

                <div>
                    <p class="text-red-500 text-center my-4">{{ errMessage }}</p>
                </div>

            </div>
        </div>

    </div>
    <div class="w-full flex justify-center item my-4  gap-2">
       <div class="flex flex-col gap-2 items-center">
        <p>First time?</p>
        <NuxtLink href="/register" class=" text-black/80 italic border border-purple-500 p-2 rounded-md">Register Here
        </NuxtLink>
       </div>
    </div>
    </section>
</template>
