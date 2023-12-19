<template>
    <div class="flex justify-center items-center">
      <ContentDoc class="prose">
        <template #not-found>
  
          <div class="w-screen flex justify-center items-center">
            <div class="flex flex-col gap-8 items-center">
              
              <div>
                <h1 class="text-lg">No Data Found About {{ $route.path }} </h1>
              </div>
              <div >
                <NuxtLink class="w-24 p-2 bg-teal-500 text-center rounded-md w-" to="/translates" >Back </NuxtLink>
              </div>
              <div>
                <img src="/profile/members/meme/meme-3.jpg" class="rounded-xl" alt="sorry reina" />
              </div>
            </div>
          </div>
        </template>
      </ContentDoc>
    </div>
  </template>
    
  <script setup>
  
  
  </script>
    