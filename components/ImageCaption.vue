<template>
  <figure class="group relative">
    <img :class="$attrs.class" :alt="alt" :src="src" :width="width" />
    <figcaption
      class="absolute bottom-0 right-0 bg-zinc-50 bg-opacity-70 px-2 text-sm text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100"
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
