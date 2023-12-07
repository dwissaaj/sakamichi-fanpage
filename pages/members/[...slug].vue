<template>
  <p>{{ route }}</p>
  <main>
    <ContentRenderer :value="data" />
  </main>
</template>

<script setup>
 const   {route}  = useRoute().params
 console.log(route)
 const { data } = await useAsyncData('member', 
() => queryContent('members', 'sakurazaka').where({title: 'taniguchi airi'}).findOne())
 
 
</script>
<!-- <template>
     <pre>
    {{ data }}
  </pre>
</template>

<script setup>
const { data } = await useAsyncData('taniguchi_airi', () => queryContent('/').findOne())
</script> -->