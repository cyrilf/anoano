<template>
  <div>
    <div>
      <label class="relative leading-10 md:leading-normal">
        <Icon name="fe:quote-left" class="absolute -top-2 -left-6 text-xl text-zinc-300" />
        Mon pénis mesure
        <input
          v-model="erect"
          type="number"
          class="focus:border-primary-300 w-20 appearance-none border-0 border-b-2 border-zinc-200 bg-transparent px-2 py-1 text-center text-2xl font-bold focus:ring-0 focus:outline-none"
          step="0.1"
          min="3.2"
          max="4.8"
          aria-label="En éréction"
          hide-spin-buttons
        />
        cm de large en éréction.<Icon name="fe:quote-right" class="-mt-4 text-xl text-zinc-300" />
      </label>
    </div>
    <div>
      <div class="mt-4">
        La taille idéale pour ton modèle est de
        <b class="text-primary-500 ml-0.5 text-2xl">{{ selectedModel.measure }}</b>
        mm
      </div>
      <Toggle
        text="Voir toutes les tailles"
        text-open="Cacher toutes les tailles"
        class="mt-4 text-zinc-400 hover:text-zinc-500"
      >
        <div class="rouded w-fit">
          <simple-table :headers="headers" :items="models" class="min-w-full leading-normal">
            <template #item-measure="{ item, header, outerClass, innerClass }">
              <td :class="outerClass">
                <p
                  :class="{
                    [innerClass]: true,
                    '!text-primary-500 font-bold': item.size === selectedModel.size,
                  }"
                >
                  {{ item[header.key] }}
                </p>
              </td>
            </template>
          </simple-table>
        </div>
      </Toggle>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DiyModel, Header } from "~/types/Model";

const headers = ref<Header[]>([
  { name: "Diamètre de la verge en érection (en cm)", key: "size" },
  { name: "Référence de taille (en mm)", key: "measure" },
]);

const BASE_SIZE = 32;
const models = ref<DiyModel[]>(
  Array(9)
    .fill("")
    .map((_, i) => {
      const range = [(BASE_SIZE + 2 + 2 * i) / 10, (BASE_SIZE + 4 + 2 * i) / 10];

      return {
        id: i,
        size: `${range[0]} - ${range[1]}`,
        range,
        measure: BASE_SIZE + 2 * i,
      };
    }),
);
const searchModels = [...models.value].reverse();

const erect = ref(3.2);
const selectedModel = computed(
  () => searchModels.find((model) => erect.value >= +model.size.split("-")[0].trimEnd()) || ({} as DiyModel),
);
</script>
