<template>
  <div
    class="mt-4 text-center text-sm font-medium text-zinc-500"
    :class="$attrs.class"
  >
    <ul class="-mb-px flex flex-wrap">
      <li v-for="tab in tabs" :key="tab.value" class="mr-2">
        <button
          :class="`inline-flex items-center rounded-t-lg border-b-2 p-4 ${
            modelValue === tab.value
              ? 'border-primary-500 text-primary-500 hover:border-primary-500 hover:text-primary-500'
              : 'border-transparent hover:border-zinc-300 hover:text-zinc-600'
          }`"
          @click="emit('update:modelValue', tab.value)"
        >
          <Icon
            :name="
              modelValue === tab.value
                ? 'noto:orange-circle'
                : 'noto:white-circle'
            "
            class="mr-2"
          />
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
  "update:modelValue": [payload: string];
}>();
</script>
