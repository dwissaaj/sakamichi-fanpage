<template>
    <ContentSlot :use="$slots.card" unwrap="img a p">
       <div class="flex flex-col gap-4 items-center"> 
        <slot name="imageMember" />
        <slot name="links" />
        <slot name="description" />
       </div>
    </ContentSlot>
</template>

<script setup>

</script>