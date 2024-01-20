<template>
    <div class="flex flex-col gap-2">

        <div class="flex flex-col gap-2">
            <p>Email</p>
            <p class="border-2 rounded-md p-2">{{ props?.email }}</p>
        </div>
        <div class="flex flex-col gap-2">
            <p>ID</p>
            <p class="border-2 rounded-md p-2 truncate">{{ props?.id }}</p>
        </div>
        <div class="flex flex-col gap-2">
            <p>Name</p>
            <p class="border-2 rounded-md p-2 truncate">{{ props?.name }}</p>
        </div>
        <div class="flex flex-col gap-2">
            <p>Country</p>
            <p class="border-2 rounded-md p-2 truncate">{{ props?.country }}</p>
        </div>
        <div class="flex flex-col gap-2">
            <p>Oshimen</p>
            <p class="border-2 rounded-md p-2 truncate">{{ props?.oshimen }}</p>
        </div>
        
    </div>
</template>

<script setup lang="ts" >

const props = defineProps<{
    id?: string ,
    email?: string,
    name?: string | null,
    country?: string | null,
    oshimen?: string[] | null
}>()
</script>