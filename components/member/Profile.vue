<template>
    <div class="flex flex-col justify-center items-center">
        <div>
            <NuxtLink :to="$props.pathFile">
                {{ props.memberName }}
            </NuxtLink>
        </div>
        <div>
            <img class="w-24 rounded-xl" :src="props.profilePic" :alt="props.memberName" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    memberName: String,
    generation: String,
    group: String,
    profilePic: String,
    penlight: String,
    pathFile: String
})
</script>