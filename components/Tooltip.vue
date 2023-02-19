<template>
  <span class="group/tooltip inline-flex flex-col items-center">
    <slot
      name="trigger"
      :defaultTriggerClass="defaultTriggerClass"
      :accentClass="accentClass"
      ><span>
        <span :class="defaultTriggerClass" v-if="trigger">{{ trigger }}</span>
        <span :class="accentClass">*</span>
      </span>
    </slot>
    <span
      class="pointer-events-none absolute isolate z-50 inline-flex -translate-y-full flex-col items-center opacity-0 transition-opacity group-hover/tooltip:pointer-events-auto group-hover/tooltip:cursor-auto group-hover/tooltip:opacity-100"
    >
      <span
        class="whitespace-no-wrap relative w-60 bg-zinc-700 p-2 text-center text-xs text-white shadow-lg"
        ><slot>{{ text }}</slot></span
      >
      <span class="-mt-2 h-3 w-3 rotate-45 bg-zinc-700"></span> </span
  ></span>
</template>
<script setup lang="ts">
defineProps<{
  text?: string;
  trigger?: string;
}>();

const defaultTriggerClass =
  "underline decoration-dashed decoration-2 decoration-zinc-300 underline-offset-4 group-hover/tooltip:text-zinc-500 cursor-[help]";
const accentClass =
  "text-xl align-super font-bold text-accent-500 group-hover/tooltip:text-accent-400";
</script>
