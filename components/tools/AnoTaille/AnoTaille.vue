<template>
  <div>
    <img
      src="https://images.unsplash.com/photo-1611077544066-4522a88996aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&h=345&crop=top,right&q=80"
      class="mb-8 w-screen"
    />
    <div
      class="mb-8 flex w-fit items-center rounded border-l-4 border-sky-400 bg-sky-50 p-4 shadow-sm"
    >
      <div class="text-sky-700">
        <div class="flex items-center gap-4 font-bold">
          <icon name="ℹ️" /> Information
        </div>
        <div>
          Avec cet outil tu peux facilement trouver la taille idéale pour ton
          anneau.
        </div>
        <div>
          Pour cela, il te suffit de mesurer la base de ton pénis en éréction
          avec une règle. Puis d'entrer cette valeur dans le tableau ci-dessous.
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold">
      <nuxt-link
        to="/outils/ano-taille#etape-1"
        id="etape-1"
        active-class="_"
        exact-active-class="_"
        class="flex flex-wrap items-center justify-center gap-2 sm:justify-start"
      >
        1.
        <span class="text-slate-400"> Tu mesures ton sexe</span>
      </nuxt-link>
    </h2>
    <div class="mt-2">
      <div>Prends <b>une règle</b> ou un mètre.</div>
      <div>
        Une fois debout, pose la règle sur ton pénis <b>en éréction</b> et
        <b>mesure sa largeur</b> à la base.
      </div>
      <div>
        Tu dois aussi faire une mesure similaire mais avec ton pénis au repos
        pour l'Andro-switch.
      </div>
    </div>

    <h2 class="mt-8 text-2xl font-bold">
      <nuxt-link
        to="/outils/ano-taille#etape-2"
        id="etape-2"
        active-class="_"
        exact-active-class="_"
        class="flex flex-wrap items-center justify-center gap-2 sm:justify-start"
      >
        2.
        <span class="text-slate-400"> Tu trouves la taille qu'il te faut</span>
      </nuxt-link>
    </h2>
    <Tabs :tabs="tabs" v-model="provider">
      <ToolsAnoTailleDIY v-if="provider === 'diy'" />
      <ToolsAnoTailleAndro v-if="provider === 'andro'" @change="onChange" />
    </Tabs>

    <h2 class="mt-8 text-2xl font-bold">
      <nuxt-link
        to="/outils/ano-taille#etape-3"
        id="etape-3"
        active-class="_"
        exact-active-class="_"
        class="flex flex-wrap items-center justify-center gap-2 sm:justify-start"
      >
        3.
        <span class="text-slate-400"> Tu achètes ou fabriques ton anneau</span>
      </nuxt-link>
    </h2>
    <div class="mt-2">
      <div>
        C'est bon, tu peux maintenant acheter ou faire ton anneau. Tu as les
        mesures nécessaires.
      </div>
      <Tabs :tabs="tabs" v-model="provider">
        <div v-if="provider === 'diy'" class="prose prose-zinc max-w-none">
          <div>
            Tu peux
            <a
              href="https://samflam.notion.site/samflam/Tutoriel-Silicone-3bac4b5a6a254ba9bab7c9ec88f7ef35"
              target="_blank"
              >suivre ce tuto</a
            >
            pour le fabriquer toi même.
          </div>
          <div>
            Sinon, tu peux rejoindre un groupe près de chez toi ou assister à un
            atelier animé par Otoko (sur Paris).
          </div>
          <div>
            Toutes
            <a
              href="https://samflam.notion.site/Les-ateliers-d9de9241af564c2a877468af9d49d162"
              target="_blank"
              >les informations sur ses ateliers sont ici</a
            >.
          </div>
        </div>
        <div v-if="provider === 'andro'">
          <div>Voilà le lien pour acheter ton modèle idéal.</div>
          <div class="mt-2">
            <b class="ml-0.5 text-2xl text-amber-500"
              ><a
                :href="selection[selection.isSoft ? 'hrefSoft' : 'href']"
                target="_blank"
                class="border-b-2 border-amber-500 hover:border-amber-400 hover:text-amber-400"
                >Andro-switch {{ selection.isSoft ? "soft" : "basique" }}
                {{ selection[selection.isSoft ? "soft" : "model"] }}</a
              ></b
            >
          </div>
        </div>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { SelectedModel } from "~/types/Model";

const provider = ref("diy");
const tabs = [
  { name: "Do It Yourself", value: "diy" },
  { name: "Andro-switch", value: "andro" },
];

const selection: Ref<SelectedModel> = ref({}) as Ref<SelectedModel>;
const onChange = (value: SelectedModel) => (selection.value = value);
</script>
