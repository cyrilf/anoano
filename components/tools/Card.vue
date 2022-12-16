<template>
  <div
    :class="`duration-50 group relative mt-20 w-96 rounded-lg bg-white py-4 px-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl ${
      inProgress ? 'pointer-events-none z-0 cursor-not-allowed' : ''
    } ${$attrs.class}`"
  >
    <nuxt-link :to="link" class="flex h-full flex-col">
      <div
        class="relative z-10 -mt-16 flex justify-center transition-all duration-200 group-hover:-mr-10 group-hover:scale-125 md:justify-end"
      >
        <div
          :class="`flex items-center justify-center rounded-full border-2 p-4 ${
            inProgress
              ? 'border-zinc-400 bg-zinc-100'
              : 'border-amber-400 bg-amber-100'
          }`"
        >
          <icon :name="icon" class="-ml-1 mr-2 !text-5xl" />
        </div>
      </div>
      <div class="flex-grow">
        <h2
          :class="`text-3xl font-semibold ${
            inProgress ? 'text-zinc-400' : 'text-zinc-800'
          }`"
        >
          {{ title }}
        </h2>
        <p :class="`mt-2 ${inProgress ? 'text-zinc-300' : 'text-zinc-600'}`">
          {{ description }}
        </p>
      </div>
      <div class="self-end">
        <span
          :class="`text-xl font-medium ${
            inProgress ? 'text-zinc-400' : 'text-amber-400'
          }`"
          >{{ inProgress ? "En développement" : "Ouvrir" }}</span
        >
      </div>
    </nuxt-link>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  link?: string;
  icon: string;
  inProgress?: boolean;
}>();
</script>
