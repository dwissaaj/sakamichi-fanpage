<template>
    <div class="max-w-screen p-6 flex flex-col gap-8 items-center justify-center">
        <div class="">
            <ContentDoc class="prose" path="/pageintro/tutorial" />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <ContentList path="/tutorials" v-slot="{ list }">
                <template v-for="tutorial in list" :key="tutorial._path">
                    <NuxtLink :to="tutorial._path" >
                    <div class="flex flex-col w-48 h-72 p-6 rounded-md shadow-lg hover:shadow-teal-900 transition duration-150 ease-in-out  shadow-teal-400 border border-neutral-700">
                        <img class="w-fit rounded-md border border-neutral-800" :src="`${tutorial.image.src}`" />
                        <h2 class="font-semibold text-md">{{ tutorial.title }}</h2>
                        <p class="font-light text-sm text-ellipsis overflow-hidden">{{ tutorial.description }}</p>
                    </div>
                    </NuxtLink>
                </template>
            </ContentList>
        </div>
    </div>
</template>

<script setup >

</script>