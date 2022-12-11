<template>
  <div
    class="mt-4 w-fit cursor-pointer text-zinc-400 hover:text-zinc-500 hover:underline"
  >
    <div @click="toggle">
      <icon
        name="ep:arrow-down-bold"
        class="transition-transform"
        :class="{ 'rotate-180': isOpen }"
      />
      {{ isOpen ? textOpen : textClose }}
    </div>
  </div>
  <div :class="`mt-4 overflow-hidden ${isOpen ? '' : ''}`">
    <div
      class="max-h-0 overflow-hidden transition-[max-height]"
      :class="{
        'max-h-[999px]': isOpen,
      }"
    >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  textOpen: string;
  textClose: string;
}>();

const isOpen = ref(false);
const toggle = () => (isOpen.value = !isOpen.value);
</script>
