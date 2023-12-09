<template>
  <div class="w-screen">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
      <div v-for="member in post">
        <MemberProfile :pathFile="member._path" :memberName="member.title" :profilePic="member.profilePic" />
      </div>

    </div>
  </div>
</template>

<script setup>

const { data: post } = await useAsyncData('members', () => queryContent('members').find())

</script>
