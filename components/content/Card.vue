<template>
    <div class="p-4">
       <div class="flex flex-col gap-4 items-center"> 
        <div class="rounded-xl border-2 border-red-400" >
            <slot class="rounded-md bg-sky-500 border" name="imageMember" />
        </div>
        <div class="border-3 border-sky-600">
            <ContentSlot class="rounded-md border-4 border-red-500" :use="$slots.default" unwrap="img" />
        </div>
        <slot name="memberName" />
        <slot class="tefxt-2xl" name="description" />
        <slot class="text-2xl" name="funfact" />

        <slot class="penlight" name="penlight" />
       </div>
    </div>
</template>

<script setup>

</script>