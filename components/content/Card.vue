<template>
    <div class="p-4 flex flex-col">
       <div class="flex flex-col items-center"> 
        <div class="rounded-2xl ">
            <slot   name="imageMember" />
        </div>
        <div class="text-2xl lg:text-4xl font-bold font-inter">
            <slot name="memberName" />
        </div>
        
<div>
    <div class="text-center">
        <h3>Penlight</h3>
    </div>
    <div class="text-center text-sm lg:text-lg  flex flex-row gap-4">
            <div :class="`${props.penHexOne} border-2 border-black rounded-md px-6 py-0 text-black/80 capitalize  w-full  `">
            <slot name="penOne" />
        </div>
        <div :class="`${props.penHexTwo} border-2 border-black rounded-md px-6 text-black/80 capitalize  w-full `">
            <slot name="penTwo" />
        </div>
        </div>
</div>
        <div>
            <h2 class="">Description</h2>
            <slot class="text-lg lg:text-4xl" name="description" />
            <h2 class="">Funfact</h2>
            <slot class="text-lg lg:text-4xl text-left" name="funfact" />
        </div>
       

        

       
       </div>
    </div>
</template>

<script setup>
const props = defineProps({
    penHexOne: String,
    penHexTwo: String
})
</script>

<style scoped>
#redding {
    background-color: red;
}
</style>
