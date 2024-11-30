<template>
  <div>
    <div>
      <label class="relative leading-10 md:leading-normal">
        <Icon name="fe:quote-left" class="absolute -left-6 -top-2 text-xl text-zinc-300" />
        Mon pénis mesure
        <input
          v-model="erect"
          type="number"
          class="w-20 appearance-none border-0 border-b-2 border-zinc-200 bg-transparent px-2 py-1 text-center text-2xl font-bold focus:border-primary-300 focus:outline-none focus:ring-0"
          step="0.1"
          min="2.9"
          max="5.5"
          hide-spin-buttons
          aria-label="En éréction"
          @change="onChangeErect"
        />
        cm de large en éréction
      </label>
      <label class="leading-10 md:leading-normal">
        et il mesure
        <input
          v-model="flacid"
          type="number"
          class="w-20 appearance-none border-0 border-b-2 border-zinc-200 bg-transparent px-2 py-1 text-center text-2xl font-bold focus:border-primary-300 focus:outline-none focus:ring-0"
          step="0.1"
          min="2.9"
          max="5.5"
          hide-spin-buttons
          aria-label="Au repos"
          @change="onChangeFlacid"
        />
        cm de large au repos.<Icon name="fe:quote-right" class="-mt-4 text-xl text-zinc-300" />
      </label>
    </div>
    <div>
      <div class="mt-4">
        Alors ton modèle idéal c'est le
        <b class="ml-0.5 text-primary-500">{{ isSoftVariant ? "soft" : "basique" }} {{ finalModel }}</b>
      </div>
      <Toggle
        text="Voir toutes les tailles"
        text-open="Cacher toutes les tailles"
        class="mt-4 text-zinc-400 hover:text-zinc-500"
      >
        <div class="rouded-lg w-fit">
          <simple-table :headers="headers" :items="models">
            <template #item-model="{ item, header, outerClass, innerClass }">
              <td :class="outerClass">
                <p
                  :class="{
                    [innerClass]: true,
                    'text-2xl font-bold !text-primary-500': item.model === finalModel,
                  }"
                >
                  {{ item[header.key] }}
                </p>
              </td>
            </template>
            <template #item-soft="{ item, header, outerClass, innerClass }">
              <td :class="outerClass">
                <p
                  :class="{
                    [innerClass]: true,
                    'text-2xl font-bold !text-primary-500': item.soft === finalModel,
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
import { ref, computed } from "vue";
import type { Model, Header, SelectedModel } from "~/types/Model";

const emit = defineEmits<{
  change: [payload: SelectedModel];
}>();

const headers = ref<Header[]>([
  { name: "Mesure en éréction", key: "measure" },
  { name: "Diamètre intérieur de l'anneau (en mm)", key: "diameter" },
  { name: "Andro-Switch basique", key: "model" },
  {
    name: "Andro-Switch souple",
    tooltip: "Si la différence entre la mesure au repos et en érection est supérieure à 1,2cm ",
    key: "soft",
  },
]);
const models = ref<Model[]>(
  [
    {
      id: 1,
      range: [2.9, 3.5],
      diameter: 31.5,
      model: "A",
      soft: "S",
      href: "https://www.coucouroucoucou.com/boutique/s429928p/31-5-A",
      hrefSoft: "https://www.coucouroucoucou.com/boutique/s429946p/alaze-31-5-S",
    },
    {
      id: 2,
      range: [3.5, 4.0],
      diameter: 34.7,
      model: "N",
      soft: "W",
      href: "https://www.coucouroucoucou.com/boutique/s429929p/34-7-N",
      hrefSoft: "https://www.coucouroucoucou.com/boutique/s429953p/alaze-34-7-W",
    },
    {
      id: 3,
      range: [4.0, 4.5],
      diameter: 35.9,
      model: "D",
      soft: "I",
      href: "https://www.coucouroucoucou.com/boutique/s429931p/35-9-D",
      hrefSoft: "https://www.coucouroucoucou.com/boutique/s429961p/alaze-35-9-I",
    },
    {
      id: 4,
      range: [4.5, 5.0],
      diameter: 41.3,
      model: "R",
      soft: "T",
      href: "https://www.coucouroucoucou.com/boutique/s429932p/41-3-R",
      hrefSoft: "https://www.coucouroucoucou.com/boutique/s429966p/alaze-41-3-T",
    },
    {
      id: 5,
      range: [5.0, 5.5],
      diameter: 44.7,
      model: "O",
      soft: "C",
      href: "https://www.coucouroucoucou.com/boutique/s429939p/44-7-O",
      hrefSoft: "https://www.coucouroucoucou.com/boutique/s429970p/alaze-44-7-C",
    },
  ].map((m) => ({
    ...m,
    measure: `Entre ${m.range[0]}cm et ${m.range[1]}cm`,
  })),
);

const flacid = ref(2.3);
const erect = ref(3.2);

const selectedModel = computed(() => {
  const result =
    models.value.find((size) => erect.value > size.range[0] && erect.value <= size.range[1]) || ({} as Model);

  emit("change", { ...result, isSoft: isSoftVariant.value });

  return result;
});

const isSoftVariant = computed(() => erect.value - flacid.value > 1.2);

const finalModel = computed(() => selectedModel.value[isSoftVariant.value ? "soft" : "model"]);

const onChangeErect = () => {
  if (erect.value < flacid.value) {
    flacid.value = erect.value;
  }
};
const onChangeFlacid = () => {
  if (flacid.value > erect.value) {
    erect.value = flacid.value;
  }
};
</script>
