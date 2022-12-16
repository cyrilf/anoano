<template>
  <div
    class="mt-4 text-center text-sm font-medium text-zinc-500"
    :class="$attrs.class"
  >
    <ul class="-mb-px flex flex-wrap">
      <li class="mr-2" v-for="tab in tabs" :key="tab.value">
        <button
          @click="emit('update:modelValue', tab.value)"
          class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-zinc-300 hover:text-zinc-600"
          :class="{
            'border-amber-500 text-amber-500 hover:border-amber-500 hover:!text-amber-500':
              modelValue === tab.value,
          }"
        >
          <icon :name="modelValue === tab.value ? '🟠️' : '⚪️'" class="mr-2" />
          {{ tab.name }}
        </button>
      </li>
    </ul>
  </div>
  <div class="max-w-max border border-zinc-200 bg-white p-8">
    <slot />
  </div>
</template>
<script setup lang="ts">
type Tab = {
  name: string;
  value: string;
};

defineProps<{
  tabs: Tab[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void;
}>();
</script>
