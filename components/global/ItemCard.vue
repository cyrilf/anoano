<template>
  <div
    class="mt-20 w-96 rounded-lg bg-white px-8 py-4 shadow-lg"
    :class="inProgress ? 'cursor-not-allowed' : 'group transition-all duration-50 hover:scale-105 hover:shadow-2xl'"
  >
    <nuxt-link :to="link" class="flex h-full flex-col">
      <div class="relative -mt-16 flex justify-center transition-all duration-200 group-hover:scale-125 md:justify-end">
        <div
          :class="`flex items-center justify-center rounded-full border-2 p-4 ${
            inProgress ? 'border-zinc-400 bg-zinc-100' : 'border-primary-400 bg-primary-100'
          }`"
        >
          <Icon :name="icon" size="2.5em" />
        </div>
      </div>
      <div class="flex-grow">
        <h2 :class="`text-3xl font-semibold ${inProgress ? 'text-zinc-400' : 'text-zinc-800'}`">
          {{ title }}
        </h2>
        <p :class="`my-2 ${inProgress ? 'text-zinc-300' : 'text-zinc-600'}`">
          {{ description }}
        </p>
      </div>
      <div class="self-end">
        <span :class="`text-xl font-medium ${inProgress ? 'text-zinc-400' : 'text-primary-400'}`">{{
          actionName
        }}</span>
      </div>
    </nuxt-link>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  link?: string;
  icon: string;
  inProgress?: boolean | string;
}>();

const actionName = ref("Ouvrir");
if (props.inProgress) {
  actionName.value = typeof props.inProgress === "boolean" ? "En développement" : props.inProgress;
}
</script>
