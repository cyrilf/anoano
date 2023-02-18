<template>
  <div
    class="group prose my-4 mt-8 rounded bg-zinc-50 p-4 px-8 shadow transition-shadow hover:shadow-md hover:shadow-zinc-300 xl:min-w-[650px]"
  >
    <nuxt-link
      :to="link"
      :id="id"
      active-class="_"
      exact-active-class="_"
      :class="`no-underline ${linkClass}`"
    >
      <h3
        v-if="title"
        class="z-10 mt-0 mb-0 bg-zinc-50 py-2 pt-4"
        :class="sticky ? 'xl:sticky xl:top-32 xl:text-center' : ''"
      >
        {{ title }}
        <span v-if="subtitle" class="hand text-xl text-zinc-600">{{
          subtitle
        }}</span>
      </h3>
    </nuxt-link>
    <div class="pt-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  link?: string;
  id?: string;
  subtitle?: string;
  sticky?: boolean;
}>();

const linkClass = props.link ? "scroll-mt-44" : "";
</script>
