<template>


  <NuxtLoadingIndicator color="#008080"  />
  <div class="my-4 mx-auto container sticky top-0">
    <div class="hidden md:block">
      <LayoutMainbar />
    </div>
    <div class="md:hidden p-2 mx-auto container sticky top-0">
      <LayoutSmallbar />
    </div>
    <div class="font-inter my-4  mx-auto container">
      <slot />
    </div>
    <div>
      <Footer />

    </div>
  </div>

</template>

<script setup>

</script>