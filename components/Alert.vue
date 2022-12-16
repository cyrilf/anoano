<template>
  <div
    :class="`mb-8 flex w-fit items-center rounded border-l-4 ${color.border} ${color.bg} prose ${color.prose} p-4 shadow-sm`"
  >
    <div :class="color.text">
      <Toggle v-if="toggle" :text="title" class="font-bold">
        <slot />
      </Toggle>
      <div v-if="!toggle">
        <span class="font-bold">
          {{ title }}
        </span>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Toggle from "@/components/Toggle.vue";

type AlertType = "info" | "danger" | "spicy";

const props = defineProps<{
  title: string;
  type: AlertType;
  toggle?: boolean;
}>();

const colors = {
  info: {
    text: "text-sky-700",
    bg: "bg-sky-50",
    border: "border-sky-400",
    prose: "prose-sky",
  },
  danger: {
    text: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-400",
    prose: "prose-amber",
  },
  spicy: {
    text: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-400",
    prose: "prose-pink",
  },
};

const color = computed(() => colors[props.type]);
</script>
