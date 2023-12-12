<template>
    <NuxtLink :to="$props.pathFile">
        <div :class="`${props.groupcolor} w-40 h-fit rounded-md  p-4 flex flex-col gap-3 justify-center items-center`">

            <div>
                <img class="w-24 rounded-xl" :src="$props.profilePic" :alt="props.memberName" />
            </div>
            <div class="text-white/80">
                <p>{{ props.memberName }}</p>
            </div>
            
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
    memberName: String,
    generation: String,
    group: String,
    profilePic: String,
    groupcolor: String,
    pathFile: String
})
</script>