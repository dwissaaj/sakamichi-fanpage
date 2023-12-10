<template>
    <p :class="`${props.penHexOne} p-3 rounded-md`">{{ props.penOne }}</p>
    <div class="flex gap-5">
        
        <p :class="`${props.penHexTwo} p-3 rounded-md`">{{ props.penTwo }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        penOne: String,
        penTwo: String,
        penHexOne : String,
        penHexTwo :String
    })
</script>