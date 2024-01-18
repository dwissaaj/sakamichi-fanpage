<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuid} from 'uuid'
const supabase = useSupabaseClient()
const profile = ref()
const image = ref<FileList | null>(null)
const uploadImage = async (e: Event) => {
    image.value = (e.target as HTMLInputElement).files

   }


const { data: session } = await useFetch('/api/account/user', {key :' session'},)
console.log(session?.value?.id)



const handleSubmit = async () => {
  const fd = new FormData()
    if(image.value) {
      Array.from(image.value).forEach(file => (
        fd.append(`avatar`, file)
      ))
    }
    const data = await $fetch('/api/sds/sdsd', {
        method: 'post',
        body: fd
    })
  

}
</script>

<template>

    <div>
      <form @submit.prevent="handleSubmit">
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