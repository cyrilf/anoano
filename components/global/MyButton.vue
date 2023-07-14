<template>
  <NuxtLink
    :to="to"
    class="my-2 inline-flex rounded border-2 border-accent-400 px-4 py-1 text-zinc-700 no-underline hover:bg-accent-400 hover:text-white"
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
