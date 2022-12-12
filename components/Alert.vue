<template>
  <div
    :class="`mb-8 flex w-fit items-center rounded border-l-4 ${color.border} ${color.bg} p-4 shadow-sm`"
  >
    <div :class="color.text">
      <div class="flex items-center gap-4 font-bold">
        <icon :name="icon" /> {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type AlertType = "info" | "danger";

const props = defineProps<{
  title: string;
  icon: string;
  type: AlertType;
}>();

const colors = {
  info: {
    text: "text-sky-700",
    bg: "bg-sky-50",
    border: "border-sky-400",
  },
  danger: {
    text: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-400",
  },
};

const color = computed(() => colors[props.type]);
</script>
