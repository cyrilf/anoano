<template>
  <div class="mt-8">
    <div class="grid grid-cols-2 mt-8">
      <button
        class="inline-block rounded-lg rounded-b-none rounded-r-none px-4 py-1.5 text-base font-semibold leading-7 border border-zinc-100 text-gray-900 ring-0 hover:ring-1 ring-gray-900/10 hover:ring-gray-900/20"
        :class="{ 'bg-amber-200 ring-1': provider === 'andro' }"
        @click="provider = 'andro'"
      >
        Andro-switch
      </button>
      <button
        class="inline-block rounded-lg rounded-b-none rounded-l-none px-4 py-1.5 text-base font-semibold leading-7 border border-zinc-100 text-gray-900 ring-0 hover:ring-1 ring-gray-900/10 hover:ring-gray-900/20"
        :class="{ 'bg-amber-200 ring-1': provider === 'diy' }"
        @click="provider = 'diy'"
      >
        Do it Yourself
      </button>
    </div>
    <div class="border border-zinc-100 p-4 border-t-0">
      <div class="grid grid-cols-2 col-span-2 gap-6">
        <label class="block">
          <span class="text-gray-700">Mesure au repos (en cm)</span>
          <input
            v-model="flacid"
            type="number"
            step="0.1"
            min="0"
            max="5.5"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder=""
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Mesure en éréction (en cm)</span>
          <input
            v-model="erect"
            type="number"
            step="0.1"
            :min="flacid"
            max="5.5"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder=""
          />
        </label>
      </div>
      <div v-if="provider === 'andro'">
        <div class="mt-4">
          Ton modèle idéal c'est le Andro-switch
          <b class="text-amber-500 text-2xl ml-2">{{ finalModel }}</b>
        </div>
        <div class="shadow rounded-lg overflow-hidden mt-8 w-fit">
          <simple-table :headers="headers" :items="models">
            <template #item-model="{ item, header }">
              <p
                class="text-gray-900 whitespace-no-wrap"
                :class="{
                  'font-bold text-amber-500': item.model === finalModel,
                }"
              >
                {{ item[header.key] }}
              </p>
            </template>
            <template #item-soft="{ item, header }">
              <p
                class="text-gray-900 whitespace-no-wrap"
                :class="{
                  'font-bold text-amber-500': item.soft === finalModel,
                }"
              >
                {{ item[header.key] }}
              </p>
            </template>
          </simple-table>
        </div>
      </div>
      <div v-if="provider === 'diy'">
        <div class="mt-4">
          Ta taille idéale c'est
          <b class="text-amber-500 text-2xl ml-1">{{ finalModel }}</b>
          cm
        </div>
        <div class="shadow rounded-lg overflow-hidden mt-8 w-fit">
          <simple-table
            :headers="diyHeaders"
            :items="diyModels"
            class="min-w-full leading-normal"
          >
            <template #item-size="{ item, header }">
              <p
                class="text-gray-900 whitespace-no-wrap"
                :class="{
                  'font-bold text-amber-500': item.size === finalModel,
                }"
              >
                {{ item[header.key] }}
              </p>
            </template>
          </simple-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watchEffect, ref } from "vue";
import { Model, DiyModel, Header } from "~/types/Model";

import SimpleTable from "~/components/SimpleTable.vue";

const provider = ref("andro");

const flacid = ref(3.2);
const erect = ref(3.5);
const selectedModel = ref({} as Model);
const selectedDiyModel = ref({} as DiyModel);

const headers = ref<Header[]>([
  { name: "Mesure en éréction", key: "measure" },
  { name: "Diamètre intérieur de l'anneau (en mm)", key: "diameter" },
  { name: "Andro-Switch basique", key: "model" },
  { name: "Andro-Switch souple", key: "soft" },
]);
const models = ref<Model[]>(
  [
    {
      id: 1,
      range: [2.9, 3.5],
      diameter: 31.5,
      model: "A",
      soft: "S",
    },
    {
      id: 2,
      range: [3.5, 4.0],
      diameter: 34.7,
      model: "N",
      soft: "W",
    },
    {
      id: 3,
      range: [4.0, 4.5],
      diameter: 35.9,
      model: "D",
      soft: "I",
    },
    {
      id: 4,
      range: [4.5, 5.0],
      diameter: 41.3,
      model: "R",
      soft: "T",
    },
    {
      id: 5,
      range: [5.0, 5.5],
      diameter: 44.7,
      model: "O",
      soft: "C",
    },
  ].map((m) => ({
    ...m,
    measure: `Entre ${m.range[0]}cm et ${m.range[1]}cm`,
  }))
);

const diyHeaders = ref<Header[]>([
  { name: "Diamètre de la verge en érection (en cm)", key: "size" },
  { name: "Référence de taille (en mm)", key: "measure" },
]);
const BASE_SIZE = 32;
const diyModels = ref<DiyModel[]>(
  Array(9)
    .fill("")
    .map((_, i) => {
      const range = [BASE_SIZE + 2 + 2 * i, BASE_SIZE + 4 + 2 * i];

      return {
        id: i,
        size: (BASE_SIZE + 2 * i) / 10,
        range,
        measure: `${range[0]} - ${range[1]}`,
      };
    })
);

const findSize = (flacidValue: Number) => {
  selectedModel.value =
    models.value.find((size) => {
      return flacidValue >= size.range[0] && flacidValue < size.range[1];
    }) || ({} as Model);
};
const findSizeDiy = (flacidValue: Number) => {
  const searchModels = [...diyModels.value].reverse();
  selectedDiyModel.value =
    searchModels.find((size) => {
      return flacidValue >= size.size;
    }) || ({} as DiyModel);
};

const finalModel = ref<string | number>("");
watchEffect(() => {
  if (provider.value === "diy") {
    findSizeDiy(flacid.value);
    finalModel.value = selectedDiyModel.value.size;
  } else {
    findSize(flacid.value);
    finalModel.value =
      erect.value - flacid.value > 1.2
        ? selectedModel.value.soft
        : selectedModel.value.model;
  }
});
</script>
