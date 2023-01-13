<template>
  <figure class="relative">
    <img :class="$attrs.class" :alt="alt" :src="src" :width="width" />
    <figcaption
      class="absolute right-0 bottom-0 bg-zinc-50 bg-opacity-70 px-2 text-sm text-zinc-600"
    >
      <slot />
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
defineProps<{
  src: string;
  alt?: string;
  width?: number;
}>();
</script>
