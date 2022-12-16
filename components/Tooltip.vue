<template>
  <span
    class="group relative inline-flex cursor-default flex-col items-center align-super text-xl font-bold text-pink-500"
  >
    <slot name="trigger">*</slot>
    <span
      class="absolute top-8 mb-6 inline-flex flex-col items-center opacity-0 transition-opacity group-hover:opacity-100"
    >
      <span class="-mb-2 h-3 w-3 rotate-45 bg-zinc-700"></span>
      <span
        class="whitespace-no-wrap relative z-10 w-60 bg-zinc-700 p-2 text-center text-xs text-white shadow-lg"
        ><slot>{{ text }}</slot></span
      >
    </span></span
  >
</template>
<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>
