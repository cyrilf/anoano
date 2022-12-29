<template>
  <figure class="relative">
    <img :class="$attrs.class" :alt="alt" :src="src" :width="width" />
    <figcaption
      class="absolute bottom-0 right-2 rounded-t bg-zinc-50 bg-opacity-70 px-2 text-sm"
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
