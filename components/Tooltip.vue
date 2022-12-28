<template>
  <span class="group/tooltip relative inline-flex flex-col items-center">
    <slot
      name="trigger"
      :defaultTriggerClass="defaultTriggerClass"
      :accentClass="accentClass"
      ><span :class="accentClass">*</span></slot
    >
    <span
      class="pointer-events-none absolute bottom-8 mt-6 inline-flex flex-col items-center opacity-0 transition-opacity group-hover/tooltip:pointer-events-auto group-hover/tooltip:cursor-auto group-hover/tooltip:opacity-100"
    >
      <span
        class="whitespace-no-wrap relative z-10 w-60 bg-zinc-700 p-2 text-center text-xs text-white shadow-lg"
        ><slot>{{ text }}</slot></span
      >
      <span class="-mt-2 h-3 w-3 rotate-45 bg-zinc-700"></span> </span
  ></span>
</template>
<script setup lang="ts">
defineProps<{
  text?: string;
}>();

const defaultTriggerClass =
  "underline decoration-dashed decoration-zinc-300 underline-offset-4 group-hover/tooltip:text-zinc-500";
const accentClass =
  "cursor-default text-xl align-super font-bold text-accent-500 -mt-1 group-hover/tooltip:text-accent-400";
</script>
