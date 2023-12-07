<template>
  <div>
      <div v-for="member in post">
        <NuxtLink :to="member._path">
            {{ member.title }}
        </NuxtLink>

      </div>
  </div>
</template>

<script setup>

const { data: post } = await useAsyncData('home', () => queryContent('members').find())

</script>


<!-- 
<div class="p-2 ">
  <div class="grid grid-cols-1 md:grid-cols-3">
  <template v-for="datas in data" class="font-inter">
      <div class="flex flex-col gap-4">
          <img class="rounded-xl w-24" :src="datas.image" :alt="datas.name" />
          <NuxtLink :to="`/members/${datas.file}`" class=" capitalize font-raleway">{{ datas.name }}</NuxtLink>
      </div>
</template>    
</div>
<ContentList path="/members" v-slot="{ list }">
<div v-for="article in list" :key="article._path">
  <h2>{{ article._path }}</h2>

</div>
</ContentList>

</div>     -->