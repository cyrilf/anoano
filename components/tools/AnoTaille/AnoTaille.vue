<template>
  <PageSkeleton
    image-src="https://images.unsplash.com/photo-1611077544637-f826625c2776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&h=750&crop=top,right&q=80"
  >
    <template #intro>
      <p>
        Avec cet outil tu peux facilement
        <b>trouver la taille idéale pour ton anneau</b> en 3 étapes.
      </p>
      <p>
        Pour cela, il te suffit de
        <b>mesurer la largeur de ton pénis en éréction</b> avec une règle. Puis
        d'<b>entrer cette valeur dans le formulaire</b> ci-dessous et hop', on
        <b
          >te proposes le modèle parfait
          <span class="-tranzinc-y-1 inline-block scale-150">💍</span></b
        >.
      </p>
      <p>
        Il est très important de bien prendre tes mesures. Si l'anneau est trop
        grand, il ne tiendra pas en place et glissera. Si il est trop petit,
        alors il irritera ta peau et sera responsable de sensations
        désagréables. Si sa taille est bien choisi, tu ne sauras même pas que tu
        le porte.
      </p>
    </template>
    <div>
      <div class="prose my-4 max-w-none rounded bg-zinc-50 p-4 px-8 shadow">
        <h2 class="not-prose">
          <nuxt-link
            to="/outils/ano-taille#etape-1"
            id="etape-1"
            active-class="_"
            exact-active-class="_"
            class="scroll-mt-24"
          >
            1. Tu mesures ton sexe
          </nuxt-link>
        </h2>
        <div class="">
          <div>
            Prends <b>une règle</b> ou un mètre.
            <div>
              Une fois debout, pose la règle sur ton pénis
              <b>en éréction</b> et <b>mesure sa largeur</b> à la base. Notes
              cette taille.
            </div>
          </div>
          <div>
            Tu dois aussi faire une mesure similaire mais avec ton pénis au
            repos pour l'Andro-switch.
          </div>
        </div>
      </div>

      <div class="prose my-4 max-w-none rounded bg-zinc-50 p-4 px-8 shadow">
        <h2 class="not-prose mt-8">
          <nuxt-link
            to="/outils/ano-taille#etape-2"
            id="etape-2"
            active-class="_"
            exact-active-class="_"
            class="scroll-mt-24"
          >
            2. Tu trouves la taille qu'il te faut<Tooltip
              >Aucune donnée n'est sauvegardée ou envoyée.
              <span class="text-primary-400">Promis ✨</span>.
              <div>D'ailleurs le code est open-source.</div>
            </Tooltip>
          </nuxt-link>
        </h2>
        <Tabs :tabs="tabs" v-model="provider" class="not-prose">
          <ToolsAnoTailleDIY v-if="provider === 'diy'" />
          <ToolsAnoTailleAndro v-if="provider === 'andro'" @change="onChange" />
        </Tabs>
      </div>
      <div class="prose my-4 max-w-none rounded bg-zinc-50 p-4 px-8 shadow">
        <h2 class="not-prose mt-8">
          <nuxt-link
            to="/outils/ano-taille#etape-3"
            id="etape-3"
            active-class="_"
            exact-active-class="_"
            class="scroll-mt-24"
          >
            3. Tu achètes ou tu fabriques ton anneau
          </nuxt-link>
        </h2>
        <div class="mt-2">
          <div>
            C'est bon, tu peux maintenant acheter ou faire ton anneau. Tu as les
            mesures nécessaires.
          </div>
          <Alert
            title="⚠️ Information importante"
            type="accent"
            toggle
            class="mt-6"
          >
            Aujourd'hui,
            <b>aucun dispositif de remontée testiculaire n'est certifié</b>.
            Légalement les anneaux ne peuvent être vendu en tant qu'appareil
            médical. Ce sont de simples anneaux adaptés pour la remontée
            testiculaire mais ils ne peuvent être catégorisés comme
            contraceptifs. Il est donc important de garder en tête que la
            contraception masculine reste expérimentale, bien que basée sur des
            études scientifiques, dont celles du
            <a
              href="https://link.springer.com/content/pdf/10.1007/s12610-012-0192-1.pdf"
              >Dr Mieusset</a
            >.
            <p>
              C'est pourquoi l'achat de l'Andro-Switch ne se fait plus sur le
              site de <a href="https://thoreme.com">Thoreme</a> mais sur un site
              partenaire en tant que
              <a href="https://www.coucouroucoucou.com"
                ><i>"talismans réversibles"</i></a
              >.
            </p>
            <p>
              Mais les choses bougent
              <a href="https://entrelac.coop/">une coopérative</a> a été créée
              pour atteindre la certification européenne.
            </p>
          </Alert>
          <Tabs :tabs="tabs" v-model="provider" class="not-prose">
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
                Sinon, tu peux rejoindre un groupe près de chez toi ou assister
                à un atelier animé par Otoko (sur Paris).
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
              <div>
                Voilà un lien pour acheter ton modèle idéal,
                <b class="text-primary-500"
                  ><a
                    :href="selection[selection.isSoft ? 'hrefSoft' : 'href']"
                    target="_blank"
                    class="text-primary-500 underline decoration-primary-500 decoration-2 hover:text-primary-400 hover:decoration-primary-400"
                    >l'Andro-switch
                    {{ selection.isSoft ? "soft" : "basique" }}
                    {{ selection[selection.isSoft ? "soft" : "model"] }}</a
                  ></b
                >
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  </PageSkeleton>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { SelectedModel } from "~/types/Model";

const provider = ref("andro");
const tabs = [
  { name: "Andro-switch", value: "andro" },
  { name: "Do It Yourself", value: "diy" },
];

const selection: Ref<SelectedModel> = ref({}) as Ref<SelectedModel>;
const onChange = (value: SelectedModel) => (selection.value = value);
</script>
