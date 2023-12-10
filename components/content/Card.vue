<template>
    <div >
       <div class="flex flex-col gap-4 items-center"> 
        <slot class="rounded-xl" name="imageMember" />
        
        <slot name="links" />
        <slot class="text-2xl" name="description" />
        <slot class="text-2xl" name="funfact" />

        <slot class="penlight" name="penlight" />
       </div>
    </div>
</template>

<script setup>

</script>