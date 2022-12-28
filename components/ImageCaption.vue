<template>
  <figure class="relative">
    <nuxt-img
      :class="$attrs.class"
      :alt="alt"
      :src="src"
      :width="width"
      loading="lazy"
      placeholder
    />
    <figcaption
      class="absolute bottom-0 right-2 rounded-t bg-zinc-50 bg-opacity-50 px-2 text-sm"
    >
      <slot />
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
defineProps<{
  src: string;
  alt?: string;
  width?: string | number;
}>();
</script>
