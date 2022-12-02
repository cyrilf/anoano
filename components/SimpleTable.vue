<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.key"
          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          {{ header.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td
          v-for="header in headers"
          :key="header.key"
          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
        >
          <slot :name="`item-${header.key}`" v-bind="{ item, headers, header }">
            <p class="text-gray-900 whitespace-no-wrap">
              {{ item[header.key] }}
            </p>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { Header } from '~/types/Model'

type Item = {
  [key: string]: any
}

defineProps<{
  headers: Header[]
  items: Item[]
}>()
</script>
