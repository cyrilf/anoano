<template>
  <div class="w-fit cursor-pointer hover:underline" :class="$attrs.class">
    <div @click="toggle">
      <icon
        name="ep:arrow-down-bold"
        class="transition-transform"
        :class="{ 'rotate-180': isOpen }"
      />
      {{ isOpen ? textOpen : textClose }}
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
}

withDefaults(defineProps<Props>(), {
  textClose: (props: { textOpen: string }): string => props.textOpen,
});

const isOpen = ref(false);
const toggle = () => (isOpen.value = !isOpen.value);
</script>
