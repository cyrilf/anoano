<template>
  <div
    class="group prose prose-zinc my-4 mx-auto mt-8 rounded bg-zinc-50 p-4 px-8 shadow transition-shadow hover:shadow-md hover:shadow-zinc-300 xl:min-w-[650px]"
  >
    <h3
      v-if="title"
      class="z-10 mb-0 bg-zinc-50 py-2 pt-4 xl:sticky xl:top-56 xl:text-center"
    >
      {{ title }}
      <span v-if="subtitle" class="hand text-xl text-zinc-600">{{
        subtitle
      }}</span>
    </h3>
    <div class="pt-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>
