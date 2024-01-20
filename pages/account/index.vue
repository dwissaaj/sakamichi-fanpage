
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
definePageMeta({
  middleware: 'auth'
})
useSeoMeta({
  title: 'Your Account',
  ogTitle: 'Sakamichi Online Account',
  description: 'Sakamichi Online Fanbase for Sakamichi Series',
  ogDescription: 'Sakamichi Online Fanbase for Sakamichi Series',
  ogImage: 'https://www.sakamichi.online/home/nogizaka.jpg',
})

const { data: session } = await useFetch('/api/client/identity', {key :' session'})
const { data: identity} = await  useFetch('/api/profile/client', {key :' identity'})



</script>
<template>
  <div class="w-full p-8">
    <div class="flex flex-col items-center">
      <h1 class="text-lg font-bold">Account Page</h1>
    </div>
  </div>
  <div class="p-4 m-4 bg-white/90 border-2 shadow-lg flex justify-center items-center">
    <TabsRoot class="flex flex-col w-full sm:w-[300px]" default-value="profile">
      <TabsList class="relative shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
        <TabsIndicator
          class="absolute px-8 left-0 h-[2px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
          <div class="bg-teal-500 w-full h-full" />
        </TabsIndicator>
        <TabsTrigger
          class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none  rounded-tl-md  hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default"
          value="profile">
          Profile
        </TabsTrigger>
        <TabsTrigger
          class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none  rounded-tr-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default"
          value="setting">
          Setting
        </TabsTrigger>
      </TabsList>
      <TabsContent class="flex flex-col gap-5 grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="profile">
        <div v-if="identity?.users?.imgUrl" class="flex justify-center items-center">
        <NuxtImg :alt="(identity?.users?.name as string)" :src="identity?.users?.imgUrl" />
        
      </div>
          <div v-else="!identity?.users?.imgUrl" class="flex justify-center items-center">
            <Icon class="w-24 h-24" icon="radix-icons:avatar" />
      </div>
    
          <AccountAvatar />
          <AccountIdentity :name="identity?.users?.name" :oshimen="identity?.users?.oshimen" :country="identity?.users?.country" :email="session?.email" :id="session?.id" />
          <AccountEditProfile />
      </TabsContent>
      <TabsContent class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="setting">
        <AccountLogout />
      </TabsContent>
    </TabsRoot>

  </div>
</template>
