<template>
    <div class="p-3">
       <div class="flex flex-col items-center"> 
        <div class="w-fit rounded-2xl">
            <slot   name="imageMember" />
        </div>
        <div class="text-lg lg:text-lg font-bold font-inter">
            <slot name="memberName" />
        </div>
        
        <div>
            <h2 class="text-lg lg:text-4xl text-center">Description</h2>
            <slot class="text-lg lg:text-4xl" name="description" />
        </div>
        <div >
            <h2  class="text-lg lg:text-4xl text-center"> Funfact</h2>
            <slot class="text-lg lg:text-4xl" name="funfact" />
        </div>

        <slot class="penlight" name="penlight" />
       </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#redding {
    background-color: red;
}
</style>