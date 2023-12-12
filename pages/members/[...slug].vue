<template>
  <!-- <div class="max-w-full flex items-center justify-center">
    <ContentDoc class="prose" />
  </div> -->
  <ContentRenderer :value="post">
    <ContentDoc />
    </ContentRenderer>
  <pre>
    {{ post }}
  </pre>
</template>

<script setup>

const { data: post } = await useAsyncData('slug', () => queryContent('members').where({_path: $route.path}).find())
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