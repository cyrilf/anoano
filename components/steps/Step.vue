<template>
  <div class="mx-auto mt-8 w-fit">
    <span :id="`etape-${index}`"></span>
    <h2
      class="z-10 bg-white py-4 text-2xl font-bold xl:sticky xl:top-0 xl:pt-8"
    >
      <nuxt-link
        :to="`/parcours#etape-${index}`"
        class="flex flex-wrap items-center justify-center gap-2 text-primary-400"
        active-class="_"
        exact-active-class="_"
      >
        <Icon :name="icon" /> Étape {{ index }} :
        <span class="text-zinc-400">{{ name }}</span>
      </nuxt-link>
    </h2>
    <slot />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  index: string;
  icon: string;
  name: string;
}>();
</script>
