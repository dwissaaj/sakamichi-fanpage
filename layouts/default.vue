<template>
  <div class="my-4">
    
    <div class="flex justify-center  gap-3
     lg:gap-8 font-inter text-xl ">
      <NuxtLink class="text-black/50 transition duration-150 ease-out hover:text-teal-500" href="/">Home</NuxtLink>
      <NuxtLink class="text-black/50 transition duration-150 ease-out hover:text-teal-500" href="/members">Member
      </NuxtLink>
      <NuxtLink class="text-black/50 transition duration-150 ease-out hover:text-teal-500" href="/tutorials">Tutorial
      </NuxtLink>
      <button disabled>
        <NuxtLink class="text-black/50 transition duration-150 ease-out hover:text-teal-500 " href="/translates">Blog Translation
      </NuxtLink>
      </button>

    </div>
    <div class="font-inter my-4">
      <slot />
    </div>
    <div>
      <Footer />
    
    </div>
  </div>
</template>

<script setup>

</script>