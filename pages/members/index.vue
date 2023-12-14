<template>
  <div class="w-screen justify-center items-center">
    <div class="grid justify-items-center  grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
      <div v-for="member in post">
        <MemberProfile :groupcolor="member.groupcolor" :penHexOne="member.penHexOne" :pathFile="member._path" :memberName="member.title" :profilePic="member.profilePic" />
      </div>
      
    </div>
  </div>
</template>

<script setup>

const { data: post } = await useAsyncData('members', () => queryContent('members').find())

</script>
