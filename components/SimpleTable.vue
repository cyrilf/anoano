<template>
  <table class="border-l border-r border-zinc-100 bg-white">
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.key"
          class="border-b-2 border-zinc-200 bg-zinc-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-600 first:rounded-tl-lg last:rounded-tr-lg"
        >
          {{ header.name
          }}<span
            v-if="header.tooltip"
            class="group relative inline-flex cursor-default flex-col items-center text-xl font-bold text-amber-500"
          >
            *
            <span
              class="absolute top-8 mb-6 inline-flex flex-col items-center opacity-0 transition-opacity group-hover:opacity-100"
            >
              <span class="-mb-2 h-3 w-3 rotate-45 bg-zinc-700"></span>
              <span
                class="whitespace-no-wrap relative z-10 w-60 bg-zinc-700 p-2 text-center text-xs text-white shadow-lg"
                >{{ header.tooltip }}</span
              >
            </span></span
          >
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, indexItem) in items" :key="item.id">
        <slot
          v-for="header in headers"
          :key="header.key"
          :name="`item-${header.key}`"
          v-bind="{
            item,
            indexItem,
            headers,
            header,
            outerClass:
              'border-b border-zinc-200 px-4 py-4 text-center text-sm first:rounded-bl-lg last:rounded-br-lg',
            innerClass: 'whitespace-no-wrap text-zinc-900',
          }"
        >
          <td
            class="border-b border-zinc-200 px-4 py-4 text-center text-sm first:rounded-bl-lg last:rounded-br-lg"
          >
            <p class="whitespace-no-wrap text-zinc-900">
              {{ item[header.key] }}
            </p>
          </td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { Header } from "~/types/Model";

type Item = {
  [key: string]: any;
};

defineProps<{
  headers: Header[];
  items: Item[];
}>();
</script>
