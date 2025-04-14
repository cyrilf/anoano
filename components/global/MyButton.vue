<template>
  <NuxtLink
    :to="to"
    class="border-accent-400 hover:bg-accent-400 my-2 inline-flex rounded border-2 px-4 py-1 text-zinc-700 no-underline hover:text-white"
  >
    <slot mdc-unwrap="p"></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ to?: string; text?: string }>();
</script>
