<template>
    <div class="">
       <div class="flex flex-col items-center"> 
        <div class="rounded-2xl ">
            <slot   name="imageMember" />
        </div>
        <div class="text-sm lg:text-lg font-bold font-inter">
            <slot name="memberName" />
        </div>
        
        <div>
            <h2 class="">Description</h2>
            <slot class="text-lg lg:text-4xl" name="description" />
        </div>
        <div >
            <h2  class=""> Funfact</h2>
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