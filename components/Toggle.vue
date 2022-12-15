<template>
  <div class="w-fit cursor-pointer hover:underline" :class="$attrs.class">
    <div @click="toggle">
      <icon
        name="ep:arrow-down-bold"
        class="transition-transform"
        :class="{ 'rotate-180': isOpen }"
        v-if="!right"
      />
      {{ isOpen ? textOpen : textClose }}
      <icon
        name="ep:arrow-down-bold"
        class="transition-transform"
        :class="{ 'rotate-180': isOpen }"
        v-if="right"
      />
    </div>
  </div>
  <div :class="`my-4 ${isOpen ? '' : 'hidden'}`">
    <slot />
  </div>
</template>
<script setup lang="ts">
interface Props {
  textOpen: string;
  textClose?: string;
  right?: boolean;
}

withDefaults(defineProps<Props>(), {
  textClose: (props: { textOpen: string }): string => props.textOpen,
  right: false,
});

const isOpen = ref(false);
const toggle = () => (isOpen.value = !isOpen.value);
</script>
