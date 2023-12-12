<script setup>
defineProps(['type'])
</script>

<template>
  <div :style="[type]">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>