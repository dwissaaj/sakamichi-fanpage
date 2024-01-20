<script setup lang="ts" >
import { Icon } from '@iconify/vue'
import { v4 as uuid} from 'uuid';
const { data: identity } = await useFetch('/api/profile/client', {key :'identity'},)
const supabase = useSupabaseClient()
let isUploaded = ref(false)
let stateDesc = ref({desc: true, uploaded: false})
const urlExist = ref(false)
const localImage = ref()
const publicImage = ref('')
const publicUrlExist = ref(false)
const uploaded =  ref()
const {isLoading } = useLoadingIndicator()
const handleImageLocal = async (e: any) => {
    const file = e.target.files[0]
    let final  = URL.createObjectURL(file)
    urlExist.value = true
    localImage.value = final
    uploaded.value = file
   }

const uploadImage = async () => {
  isLoading.value = true
  useLoadingIndicator().start()
  const {data, error: uploadError }  = await supabase
  .storage
  .from('avatar')
  .upload(identity?.value?.users?.id + "/" + uuid() , uploaded.value, {
    cacheControl: '3600',
    upsert: false
  })
  if (uploadError) throw uploadError

  if(data) {
    let url = useStorageLink()
    publicImage.value = url + data.path
    const reqUrl = url + data.path
    console.log(reqUrl)
    try {
        await $fetch('/api/avatar/add', {
        method: 'post',
        body: { 
          publicImage: reqUrl ,
        }
    })
    publicUrlExist.value = true
    }
    catch ( error ) {
        console.log(error)
    }
  }
  useLoadingIndicator().finish()
  stateDesc.value.desc = false
  stateDesc.value.uploaded = true
}
const refreshData = async () => {
  try {
    await refreshNuxtData()
  }
  finally{

  }
}
</script>


<template>
    <DialogRoot>
      
    <DialogTrigger
      class="">
      <button class="border-teal-500 border-2 p-2 rounded-md">Add Avatar</button>
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
         <p v-show="stateDesc.desc">Maksimum size 1 mb with .png,.jpg, or .jpeg</p>
         <p v-show="stateDesc.uploaded">Uploaded 💕 Refresh the page</p>
        </DialogDescription>
        <fieldset class="">
  
          <input
            id="profile"
            class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center "
            type="file"
            accept="image/*"
            @change="handleImageLocal"
            
          >
        </fieldset>
        
        <img v-show="urlExist" :src="localImage" alt="as" />
        <div class="mt-[25px] flex flex-col justify-end">
          
            <button
            @click="uploadImage"
              class="bg-teal-500/50 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              Upload
            </button>
         
            
        
        </div>
        <DialogClose
          class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close" as-child
        >
<button @click="refreshData">
  <Icon icon="lucide:x" />

</button>        
</DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
    
</template>

