<template>
  <div
    :id="id"
    class="group prose my-8 rounded bg-zinc-50 p-4 px-8 shadow transition-shadow hover:shadow-md hover:shadow-zinc-300"
    :class="noMinWidth ? '' : '2xl:min-w-[650px]'"
  >
    <nuxt-link :to="link" active-class="_" exact-active-class="_" class="no-underline">
      <h3
        v-if="title"
        class="mt-0 mb-0 bg-zinc-50 py-2 pt-4"
        :class="sticky ? 'xl:sticky xl:top-20 xl:text-center' : ''"
      >
        <Icon v-if="icon" :name="icon" /> {{ title }}
        <span v-if="subtitle" class="hand text-xl text-zinc-600">{{ subtitle }}</span>
      </h3>
    </nuxt-link>
    <div class="pt-2">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  icon?: string;
  link?: string;
  id?: string;
  subtitle?: string;
  sticky?: boolean;
  noMinWidth?: boolean;
}>();
</script>
