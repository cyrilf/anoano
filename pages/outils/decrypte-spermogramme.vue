<template>
  <PageSkeleton>
    <template #image="{ imageClass }">
      <image-caption
        :src="image"
        alt="Résultat médical"
        :width="550"
        :class="imageClass"
      >
        Photo de
        <a href="https://fr.freepik.com/auteur/tirachardz">tirachardz</a>
        sur
        <a
          href="https://fr.freepik.com/photos-gratuite/jeune-femme-medecin-asiatique-uniforme-medical-blanc-aide-presse-papiers-livre-excellentes-nouvelles-pour-discuter-resultats_15114515.htm"
          >Freepik</a
        >
      </image-caption>
    </template>
    <template #intro
      ><p>
        Ça y est, tu as les résultats de ton <b>premier spermogramme</b> en
        main. Maintenant, c'est le moment de le décrypter pour
        <b>comprendre</b> ce qu'il veut dire.
      </p>
      <p>
        Cet outil va te permettre d'apprendre à interpréter les
        <b>valeurs de références</b> et ce qu'elles signifient.
      </p></template
    >
    <Card class="mx-auto">
      <div>
        <div class="prose">
          <Alert title="Information" type="info">
            Les sections et valeurs de références ci-dessous concernent
            <b>ton premier spermogramme</b>. Celui qui doit montrer que tu es
            fertile.
          </Alert>
          Pour avoir une
          <b>fertilité qualifiée de "normale"</b> (normozoospermie), selon les
          références de l'OMS, il faut que tes paramètres spermiques soient
          <b>égaux ou supérieurs à chacunes des valeurs</b> décritent
          ci-dessous.
          <p>
            Alors muni-toi de ton spermogramme, et <b>indique si oui ou non</b>,
            tu remplis la condition pour chaque critères.
          </p>
        </div>
        <table class="table border-separate p-4">
          <thead>
            <tr>
              <th colspan="3" class="pb-4 text-center">
                Valeurs de références pour une fertilité "normale"
              </th>
            </tr>
            <tr>
              <th class="pb-4 text-center">Critères</th>
              <th class="pb-4 text-center">Conditions</th>
              <th class="pb-4 text-center">C'est bon pour toi ?</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="d in showExtra ? data : data.filter((d) => !d.extra)"
              :key="d.name"
              class="shadow"
            >
              <td
                class="border-2 border-r-0 p-4 font-bold text-zinc-600 lg:w-56"
              >
                <Tooltip v-if="d.explanation" :trigger="d.name">{{
                  d.explanation
                }}</Tooltip>
                <span v-else>{{ d.name }}</span>
              </td>
              <td
                class="border-2 border-x-0 p-4 text-right font-bold text-zinc-800"
                :class="{
                  'bg-primary-300': d.check === null,
                  'bg-emerald-300': d.check === true,
                  'bg-rose-300': d.check === false,
                }"
              >
                {{ d.condition }} {{ d.value }}
                <span class="text-sm font-normal">{{ d.unit }}</span>
              </td>
              <td class="border-2 border-l-0 p-4 pl-6 text-center">
                <div class="flex items-center space-x-6">
                  <div class="group/radio flex items-center">
                    <input
                      type="radio"
                      :id="`radio-${d.name}-yes`"
                      v-model="d.check"
                      :value="true"
                      class="h-5 w-5 cursor-pointer group-hover/radio:border-zinc-300"
                    />
                    <label
                      :for="`radio-${d.name}-yes`"
                      class="cursor-pointer pl-3 text-base font-medium group-hover/radio:text-zinc-700"
                    >
                      Oui
                    </label>
                  </div>
                  <div class="group/radio flex cursor-pointer items-center">
                    <input
                      type="radio"
                      :id="`radio-${d.name}-no`"
                      v-model="d.check"
                      :value="false"
                      class="h-5 w-5 cursor-pointer group-hover/radio:border-zinc-300"
                    />
                    <label
                      :for="`radio-${d.name}-no`"
                      class="cursor-pointer pl-3 text-base font-medium group-hover/radio:text-zinc-700"
                    >
                      Non
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr v-if="allChecked">
              <td colspan="3" class="bg-emerald-300 p-4 text-center">
                D'après les résultats de ton premier spermogramme,
                <b> tu es fertile</b> !
              </td>
            </tr>
            <tr v-if="hasConditionUnmet">
              <td colspan="3" class="text bg-rose-300 p-4">
                D'après les résultats de ton premier spermogramme, tu ne remplis
                pas toutes les conditions nécessaire pour être fertile.<br />
                On te recommande de te rapprocher de ton.ta médecin ou de la
                personne qui te suis.
              </td>
            </tr>
            <tr>
              <td colspan="3" class="text-center">
                <button
                  @click="showExtra = !showExtra"
                  class="w-full border p-2 transition-colors hover:bg-primary-200"
                >
                  {{
                    showExtra
                      ? "Voir la vue simplifiée"
                      : "Voir toutes les valeurs"
                  }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="prose">
          <p>
            Ces valeurs de références proviennent de l'étude faite en
            <NuxtLink
              href="https://pubmed.ncbi.nlm.nih.gov/19934213/"
              target="_blank"
              >2010 par l'OMS</NuxtLink
            >
            concernant les paramètres séminaux de plus de 4500 hommes fertiles.
          </p>
          <p>
            Les critères les plus importants sont le <b>volume</b>, le
            <b>nombre de spermatozoïdes</b>, leurs <b>mobilités</b>, leurs
            <b>morphologies</b> et leurs <b>vitalités</b>.
            <br />
            En gros, il s'agit de leur quantité, la façon dont ils se déplaçent,
            si ils sont normaux et si ils sont vivants.
          </p>
          <p>
            Chacun de <b>ces critères influent sur la fertilité</b> et sont
            <b>interdépendants</b>. Tu peux avoir un nombre de spermatozoïde
            suffisant mais rester stérile car ils sont immobiles ou anormaux par
            exemple. C'est pour cela que toutes tes valeurs doivent être
            supérieurs aux valeurs de références.
          </p>
          <p>
            Si tu as le <b>moindre doute</b>, n'hésite pas à
            <b>contacter ton laboratoire ou ton.ta médecin</b>.
          </p>
        </div>
      </div>
    </Card>
  </PageSkeleton>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Décrypte ton spermogramme",
  icon: "noto-test-tube",
  desc: "Décrypte et comprend les valeurs indiquées sur ton spermogramme.",
});
const image = ref(
  "https://img.freepik.com/photos-gratuite/jeune-femme-medecin-asiatique-uniforme-medical-blanc-aide-presse-papiers-livre-excellentes-nouvelles-pour-discuter-resultats_7861-3135.jpg?w=550"
);
useSeoMeta({
  ogImage: image,
  twitterImage: image,
});

const data = ref([
  {
    name: "Abstinence",
    unit: "jours",
    condition: "≥",
    explanation: "Entre 2 et 8 jours",
    value: 2,
    check: null,
    range: [2, 8],
    extra: true,
  },
  {
    name: "Volume",
    unit: "mL",
    condition: "≥",
    explanation: "Volume émis / Volume de l'éjaculat",
    value: 1.5,
    check: null,
    range: [1.5, 6],
  },
  {
    name: "pH",
    condition: "≥",
    value: 7.2,
    check: null,
    range: [7.2, 8],
  },
  {
    name: "Numération",
    unit: "millions/mL",
    condition: "≥",
    explanation: "Concentration / Nombre de spermatozoïdes par mL",
    value: 15,
    check: null,
    range: [15, 200],
  },
  {
    name: "Numération total",
    unit: "millions/éjaculat",
    condition: "≥",
    explanation: "Nombre de spermatozoïdes par éjaculat",
    value: 39,
    check: null,
    extra: true,
  },
  {
    name: "Cellules rondes",
    unit: "millions/mL",
    condition: "≤",
    value: 3,
    check: null,
    extra: true,
  },
  {
    name: "Mobilité progressive",
    unit: "%",
    condition: "≥",
    explanation: "Mobilité PR à 1 heure",
    value: 32,
    check: null,
  },
  {
    name: "Mobilité totale",
    unit: "%",
    condition: "≥",
    explanation: "Mobilité PR + NP à 1 heure",
    value: 40,
    check: null,
    extra: true,
  },
  {
    name: "Vitalité",
    unit: "%",
    condition: "≥",
    explanation: "Spermatozoïdes vivants",
    value: 58,
    check: null,
  },
  {
    name: "Morphologie normale",
    unit: "%",
    condition: "≥",
    explanation: "Spermatozoïdes typiques",
    value: 4,
    check: null,
  },
  {
    name: "Morphologie anormale",
    unit: "%",
    condition: "≤",
    explanation: "Spermatozoïdes atypiques",
    value: 96,
    check: null,
    extra: true,
  },
]);

const showExtra = ref(false);
const filteredData = computed(() =>
  showExtra.value ? data.value : data.value.filter((d) => !d.extra)
);
const allChecked = computed(() =>
  filteredData.value.every((d) => d.check === true)
);
const hasConditionUnmet = computed(() =>
  filteredData.value.some((d) => d.check === false)
);
</script>
<style scoped>
.table {
  border-spacing: 0 0.5rem;
}
</style>
