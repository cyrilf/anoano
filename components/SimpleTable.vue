<template>
  <table class="border-r border-l border-zinc-100 bg-white">
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.key"
          class="border-b-2 border-zinc-200 bg-zinc-100 px-5 py-3 first:rounded-tl-lg last:rounded-tr-lg"
        >
          <span class="text-left text-xs font-semibold tracking-wider text-zinc-600 uppercase">{{ header.name }}</span
          ><Tooltip v-if="header.tooltip" :text="header.tooltip" />
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
            outerClass: 'border-b border-zinc-200 px-4 py-4 text-center text-sm first:rounded-bl-lg last:rounded-br-lg',
            innerClass: 'whitespace-no-wrap text-zinc-900',
          }"
        >
          <td class="border-b border-zinc-200 px-4 py-4 text-center text-sm first:rounded-bl-lg last:rounded-br-lg">
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
import type { Header } from "~/types/Model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Item = { [key: string]: any };

defineProps<{ headers: Header[]; items: Item[] }>();
</script>
