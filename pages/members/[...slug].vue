<template>
  <main>
    <ContentDoc />
  </main>
  
</template>

<script setup>

const { data } = await useAsyncData('singleMember', () => queryContent('sakurazaka').where({title : 'taniguchi airi'}).findOne())

 console.log(data)
</script>
<!-- <template>
     <pre>
    {{ data }}
  </pre>
</template>

<script setup>
const { data } = await useAsyncData('taniguchi_airi', () => queryContent('/').findOne())
</script> -->