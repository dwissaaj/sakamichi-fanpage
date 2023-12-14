<script setup>
const props = defineProps({
    penHexOne: String,
    penHexTwo: String
})
</script>

<template>
    <div class="flex justify-center items-center">
        <div class="flex flex-row gap-3">
        <div :class="`${props.penHexOne} rounded-md w-32 text-white/80 capitalize   `">
        <p class="text-center">
            <slot name="penOne" />
        </p>
    </div>
    <div :class="`${props.penHexTwo} rounded-md  w-32 text-white/80 capitalize  `">
        <p class="text-center">
            <slot name="penTwo" />
        </p>
    </div>
    </div>
    </div>
</template>