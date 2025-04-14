<template>
  <figure class="group relative">
    <img :class="`${$attrs.class} rounded-lg`" :alt="alt" :src="src" :width="width" />
    <figcaption
      class="bg-opacity-70 absolute right-0 bottom-0 bg-zinc-50 px-2 text-sm text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100"
    >
      <slot></slot>
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
