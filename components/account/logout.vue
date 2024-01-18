<template>
    <p>Are you sure to logout?</p>
        <button @click="logOut"
          class="p-2 mt-4 bg-red-500 rounded-md transition duration-300 ease-in-out hover:bg-red-800">Log out</button>

</template>

<script setup lang="ts" >
const supabase = useSupabaseClient()

const logOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    if (!error) {
      navigateTo('/')
    }
  }
  catch (error) {
    throw error
  }
}

</script>