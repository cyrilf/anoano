<template>
  <div>
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<!-- <script setup lang="ts">
defineProps<{
  to?: string;
  text?: string;
}>();
</script> -->
