<template>
  <div class="">
    <ContentDoc class="prose" />
  </div>

    
</template>

<script setup>

const { data: post } = await useAsyncData('slug', () => queryContent('members').where({_path: $route.path}).findOne())
console.log(post)
</script>
<!-- <template>
     <pre>
    {{ data }}
  </pre>
</template>

<script setup>
const { data } = await useAsyncData('taniguchi_airi', () => queryContent('/').findOne())
</script> -->