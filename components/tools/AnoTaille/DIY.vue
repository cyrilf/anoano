<template>
  <div>
    <div>
      <label class="relative leading-10 md:leading-normal">
        <icon
          name="fe:quote-left"
          class="absolute -top-2 -left-6 text-xl text-zinc-300"
        />
        Mon pénis mesure
        <input
          type="number"
          class="w-20 appearance-none border-0 border-b-2 border-zinc-200 bg-transparent py-1 px-2 text-center text-2xl font-bold focus:border-primary-300 focus:outline-none focus:ring-0"
          v-model="erect"
          step="0.1"
          min="3.2"
          max="4.8"
          aria-label="En éréction"
          hide-spin-buttons
        />
        cm de large en éréction.<icon
          name="fe:quote-right"
          class="-mt-4 text-xl text-zinc-300"
        />
      </label>
    </div>
    <div>
      <div class="mt-4">
        La taille idéale pour ton modèle est de
        <b class="ml-0.5 text-2xl text-primary-500">{{
          selectedModel.measure
        }}</b>
        mm
      </div>
      <Toggle
        text="Voir toutes les tailles"
        textOpen="Cacher toutes les tailles"
        class="mt-4 text-zinc-400 hover:text-zinc-500"
      >
        <div class="rouded w-fit">
          <simple-table
            :headers="headers"
            :items="models"
            class="min-w-full leading-normal"
          >
            <template #item-measure="{ item, header, outerClass, innerClass }">
              <td :class="outerClass">
                <p
                  :class="{
                    [innerClass]: true,
                    'font-bold !text-primary-500':
                      item.size === selectedModel.size,
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
import { DiyModel, Header } from "~/types/Model";

const headers = ref<Header[]>([
  { name: "Diamètre de la verge en érection (en cm)", key: "size" },
  { name: "Référence de taille (en mm)", key: "measure" },
]);
const allSizesOpen = ref(false);
const toggleOpenAllSizes = () => (allSizesOpen.value = !allSizesOpen.value);

const BASE_SIZE = 32;
const models = ref<DiyModel[]>(
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
const searchModels = [...models.value].reverse();

const erect = ref(3.2);
const selectedModel = computed(
  () =>
    searchModels.find((model) => erect.value >= model.size) || ({} as DiyModel)
);
</script>
