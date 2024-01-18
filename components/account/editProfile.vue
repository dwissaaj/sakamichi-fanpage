<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const formData = ref({
    name: '',
    country: '',
    oshimen: ['Odakura Reina']
})

const { data: identity} = await useFetch('/api/profile/client', {key :' identity'})

const postData = async ()  => {
    try {
        await $fetch('/api/profile/change', {
        method: 'post',
        body: { 
          name: formData.value.name,
          country: formData.value.country,
          oshimen: formData.value.oshimen, 
        }
       
    })
    refreshNuxtData()
    }
    catch ( error ) {
        console.log(error)
    }
}
</script>

<template>
  <DialogRoot>
    <DialogTrigger
      class="border-2 border-teal-500 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] leading-none  focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
    >
      Edit profile
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
          Edit profile
        </DialogTitle>
        <DialogDescription class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
        <fieldset class="mb-[15px] flex items-center gap-5">
          <label class="text-grass11 w-[90px] text-right text-[15px]" for="name"> Name </label>
          <input
          v-model="formData.name"
            id="name"
            :placeholder="identity?.users?.name || 'Your Name'"
            class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            
          >
        
        </fieldset>
        <fieldset class="mb-[15px] flex items-center gap-5">
          <label class="text-grass11 w-[90px] text-right text-[15px]" for="username"> Country </label>
          <input
          v-model="formData.country"
            id="country"
            :placeholder="identity?.users?.country || 'Your Country'"
            class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            defaultValue="Japan"
          >
        </fieldset>

        <fieldset>
            <label class="text-grass11 w-[90px] text-right text-[15px]" for="username"> Oshimen </label>
  <TagsInputRoot
    v-model="formData.oshimen"
    class="flex gap-2 items-center border p-2 rounded-lg w-full max-w-[480px] flex-wrap border-blackA7 bg-white"
  >
    <TagsInputItem v-for="item in formData.oshimen" :key="item" :value="item" class="text-black flex shadow-md items-center justify-center gap-2 bg-green8 aria-[current=true]:bg-green9 rounded p-1">
      <TagsInputItemText class="text-sm pl-1" />
      <TagsInputItemDelete class="p-0.5 rounded bg-transparent hover:bg-blackA4">
        <Icon icon="lucide:x" />
      </TagsInputItemDelete>
    </TagsInputItem>

    <TagsInputInput placeholder="Member Name" class="text-sm focus:outline-none flex-1 rounded text-green9 bg-teal-500/20 placeholder:text-mauve9 px-1" />
  </TagsInputRoot>

        </fieldset>
        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child>
            <button @click="postData"
              class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              Save changes
            </button>
          </DialogClose>
        </div>
        <DialogClose
          class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>