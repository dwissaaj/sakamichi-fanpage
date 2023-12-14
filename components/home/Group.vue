<!-- This is for group component member -->
<template>
  <div class="flex flex-col justify-center items-center gap-4 p-4">
    <div class="text-center">
      <h1 class="text-xl lg:text-4xl font-extrabold text-overflow">
          {{ props.groupName }}
        </h1>
        <p>
          {{ props.description }}
        </p>
    </div>
    <div class="justify-self-center my-4">

        <NuxtLink :to="props.memberUrl" :class="props.color" class="  p-4  hover:opacity-110
       transition duration-150 ease-in-out ">See Member</NuxtLink>
      

    </div>
    <div>
      <img class="rounded-lg" :src="props.groupImg" :alt="props.groupName"/>
    </div>
  </div>
</template>


<script setup lang="ts">
const props = defineProps({
  groupName: String,
  description: String,
  groupImg: String,
  memberUrl: String,
  color: String
})
</script>


<!-- 


<div class="flex items-center justify-center">
  <div class="flex flex-col justify-center">
    <div class=" border-2 border-red-500">
      <div>
        <h1 class="text-xl lg:text-4xl font-extrabold text-overflow">
          {{ props.groupName }}
        </h1>
      </div>
      <div>
        <p>
          {{ props.description }}
        </p>
      </div>
      <div class="my-8">
        <NuxtLink :to="props.memberUrl" :class="props.color" class="  p-4  hover:opacity-110
       transition duration-150 ease-in-out ">See Member</NuxtLink>
      </div>
      <div class="p-8">
        <img class="rounded-lg" :src="props.groupImg" :alt="props.groupName"/>
      </div>
    </div>


  </div>
</div> -->