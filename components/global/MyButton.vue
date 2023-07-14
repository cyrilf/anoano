<template>
  <NuxtLink
    :to="to"
    class="my-4 inline-flex rounded border-0 bg-primary-400 px-6 py-2 text-lg text-white no-underline hover:bg-primary-500"
  >
    <ContentSlot :use="$slots.default" unwrap="p" />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to?: string;
  text?: string;
}>();
</script>
