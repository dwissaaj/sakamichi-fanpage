<script setup lang="ts" >
import { Icon } from '@iconify/vue'
import { v4 as uuid} from 'uuid';

const { data: session } = await useFetch('/api/client/identity', {key :' session'},)
const supabase = useSupabaseClient()
let profile = ref(null || String)
const uploadImage = async (event: any) => {
    const file = event.target.files[0]
    console.log(file)
   }
   
const handleSut = async (e: Event) => {

const avatarFile  =  e.target as HTMLInputElement
const file: File = (avatarFile.files as FileList)[0]
console.log(avatarFile)
const {data, error: uploadError }  = await supabase
.storage
.from('images')
.upload(session?.value?.id + "/" + uuid() , file, {
  cacheControl: '3600',
  upsert: false
})
if (uploadError) throw uploadError

if(data) {
  let url = useStorageLink()
  profile.value = url + data.path
  const imgUrl = url + data.path
  try {
      await $fetch('/api/profile/avatar/add', {
      method: 'post',
      body: { 
        imgUrl: imgUrl,
      }
     
  })
  console.log(data)
  refreshNuxtData()
  }
  catch ( error ) {
      console.log(error)
  }
  console.log(data)
  console.log(imgUrl)
}

}
</script>


<template>
    <DialogRoot>
    <DialogTrigger
      class=""
    >
    <div class="flex justify-center items-center">
        <Icon class="w-24 h-24" icon="radix-icons:avatar" />
    </div>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
          Upload Image
        </DialogTitle>
        <DialogDescription class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
         Maksimum size 1 mb with .png,.jpg, or .jpeg
        </DialogDescription>
        <fieldset class="">
        
          <input
            id="profile"
            class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center "
            type="file"
            accept="image/*"
             @change="uploadImage"
          >
        </fieldset>
        
       
        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child>
            <button
              class="bg-teal-500/50 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            @click="uploadImage">
              Upload
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

