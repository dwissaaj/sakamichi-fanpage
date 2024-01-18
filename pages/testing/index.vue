<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuid} from 'uuid'
const supabase = useSupabaseClient()
const profile = ref()
const image = ref<FileList | null>(null)
const uploadImage = async (e: Event) => {
    image.value = (e.target as HTMLInputElement).files

   }


const { data: session } = await useFetch('/api/client/identity', {key :' session'},)
console.log(session?.value?.id)


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
        const { data } = await $fetch('/api/profile/avatar/add', {
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

    <div>
      <form>
        <input
            id="profile"
            class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center "
            type="file"
            accept="image/*"
            @change="handleSut"
          >
          <button type="submit"  class="bg-red-500 p-5">
            upload
            
          </button>
      </form>
      <img :src="profile" alt="as" />
    </div>
</template>