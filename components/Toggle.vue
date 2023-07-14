<template>
  <div class="w-fit cursor-pointer hover:underline" :class="$attrs.class">
    <div @click="toggle">
      <icon
        v-if="!right"
        name="ep:arrow-down-bold"
        class="mr-1 transition-transform"
        :class="{ 'rotate-180': isOpen }"
      />
      <slot :is-open="isOpen" name="title">{{
        isOpen ? localTextOpen : text
      }}</slot>
      <icon
        v-if="right"
        name="ep:arrow-down-bold"
        class="ml-1 transition-transform"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>
  </div>
  <div
    :class="`mb-4 ml-2 mt-2 ${
      isOpen ? (withGuide ? 'border-l border-zinc-300 pl-4' : '') : 'hidden'
    }`"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
interface Props {
  text?: string;
  textOpen?: string;
  right?: boolean;
  withGuide?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  text: "Voir plus",
  textOpen: "Voir moins",
  right: false,
});

const localTextOpen = computed(
  () => props.textOpen || props.text || "Voir moins"
);

const isOpen = ref(false);
const toggle = () => (isOpen.value = !isOpen.value);
</script>
