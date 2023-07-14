<template>
  <PageSkeleton>
    <template #image="{ imageClass }">
      <image-caption
        :src="image"
        alt="Ordonnance papier"
        :width="575"
        :class="imageClass"
      >
        Photo de
        <a href="https://unsplash.com/@cytonn_photography"
          >Cytonn Photography</a
        >
        sur <a href="https://unsplash.com/photos/GJao3ZTX9gU">Unsplash</a>
      </image-caption>
    </template>
    <template #intro>
      <p>
        C'est <b>important d'être bien accompagné.e</b>.<br />
        Un.e médecin généraliste, un.e urologue, un.e andrologue ou une
        sage-femme/maïeuticien peut te prescrire un spermogramme. Si iel décide
        de te suivre dans ta contraception, c'est le top ✨.<br />
        Mais parfois, ces personnes là ne connaissent pas bien la contraception
        thermique.
      </p>
      <p>
        Alors tu peux lui présenter cette page à titre d'information.<br />
        Une ordonnance concerne une année à la fois.
      </p>
      <Alert type="info" title="Le plus simple !">
        L'ordonnance la plus simple que tu peux demander c'est :
        <div class="hand text-xl">"12 spermogrammes. Renouvelable."</div>
        Avec ça en poche, tu es libre de pouvoir agencer tes spermogrammes au
        rythme qui te convient.
      </Alert>
    </template>
    <div>
      <div
        class="group prose my-4 max-w-none rounded bg-zinc-50 p-4 px-8 shadow xl:max-w-prose"
      >
        <div class="mb-2 flex items-baseline gap-2">
          <h3 class="m-0">Année 1</h3>
          <div
            class="rounded-md border border-zinc-300 bg-zinc-100 px-2 py-1 text-xs font-normal leading-none text-zinc-500 group-hover:border-primary-300 group-hover:bg-primary-100 group-hover:text-primary-600"
          >
            10 spermogrammes
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <Toggle withGuide>
            <template #title>1 spermogramme initial.</template>
            <div class="prose text-justify">
              <p>
                Tu peux l'effectuer <b>n'importe quand, avant</b> le début du
                port de l'anneau !
              </p>
              <p>
                Il permet de contrôler que
                <b>tout va bien au niveau de ta fertilité</b>. Ce sera aussi ton
                spermogramme de référence pour le jour où tu décides d'arrêter
                la méthode et de retrouver ta fertilité.
              </p>
              <div>
                Si le résultat de ton premier spermogramme a :
                <ul>
                  <li>
                    une concentration en
                    <b>spermatozoïdes supérieure à 15M/mL</b>
                  </li>
                  <li>et une <b>mobilité supérieure à 32%</b></li>
                </ul>
                tu peux continuer.
              </div>
              <p>
                Par contre, si les valeurs n'atteignent pas ces paliers, il
                faudra demander l'avis d'un.e professionnel.le de santé.
              </p>
            </div>
          </Toggle>
          <Toggle>
            <template #title>
              1 spermogramme de <b>contrôle</b> à
              <Tooltip trigger="3 mois"
                >Cette date commence à partir de ton premier jour de port
                complet (15h+)</Tooltip
              >.</template
            >
            <div class="prose text-justify">
              <p>
                Il permet de t'assurer que la méthode fonctionne bien pour toi.
                Pour ça, tu dois passer
                <b
                  >sous la barre des 1 million de spermatozoïdes par millilitre
                  (&lt;1M/mL)</b
                >
              </p>
              <p>
                Si ce n'est pas le cas, tu peux attendre encore un peu ou
                augmenter ton temps de port journalier (15h+). Le mieux est de
                demander l'avis d'un.e professionnel.le de santé.
              </p>
            </div>
          </Toggle>
          <Toggle withGuide>
            <template #title>
              1 spermogramme de <b>validation</b> à 3 mois et 3 semaines.
            </template>
            <div class="prose text-justify">
              <div>
                Ce deuxième spermogramme de validation vient
                <b>confirmer que tout se passe bien</b>. Tu es toujours sous la
                barre des 1 million de spermatozoïdes par millilitre (&lt;1M/mL)
                ?
                <ul>
                  <li><b>Oui</b> : c'est parfait, on continue !</li>
                  <li>
                    <b>Non</b>, alors le mieux est de demander l'avis d'un.e
                    professionnel.le de santé.
                  </li>
                </ul>
              </div>
            </div>
          </Toggle>
          <Toggle withGuide>
            <template #title>
              1 spermogramme <b>renouvelable</b> tous les mois pendant 6 mois.
            </template>
            <div class="prose text-justify">
              Ces 6 spermogrammes te servent de <b>checkpoints</b>. Ils
              permettent de t'assurer que ta contraception
              <b>fonctionne bien dans la durée</b>, que la manière dont tu
              portes l'anneau est <b>efficace et règulière</b>.
              <div>
                Tu peux les espacer à un tous les deux mois si besoin. Ce qui
                est vraiment important c'est que tu sois
                <b>toujours sous la barre des 1 million par millilitre</b>
                (&lt;1M/mL).
              </div>
            </div>
          </Toggle>
        </div>
      </div>
      <div
        class="group prose my-4 max-w-none rounded bg-zinc-50 p-4 px-8 shadow xl:max-w-prose"
        v-for="(_, index) in Array(3).fill('')"
        :key="index"
      >
        <div class="mb-2 flex items-baseline gap-2">
          <h3 class="mt-0">Année {{ index + 2 }}</h3>
          <div
            class="rounded-md border border-zinc-300 bg-zinc-100 px-2 py-1 text-xs font-normal leading-none text-zinc-500 group-hover:border-primary-300 group-hover:bg-primary-100 group-hover:text-primary-600"
          >
            4 spermogrammes
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <Toggle withGuide text="1 spermogramme renouvelable tous les 3 mois."
            ><div class="prose text-justify">
              <div>
                La contraception fonctionne bien, les tests sont plus espacés.
                <div>On garde l'objectif &lt;1M/mL.</div>
              </div>
            </div>
          </Toggle>
        </div>
      </div>
      <div
        class="group prose my-4 max-w-none rounded bg-zinc-50 p-4 px-8 shadow xl:max-w-prose"
      >
        <div class="mb-2 flex items-baseline gap-2">
          <h3 class="mt-0">Année 5</h3>
          <div
            class="rounded-md border border-zinc-300 bg-zinc-100 px-2 py-1 text-xs font-normal leading-none text-zinc-500 group-hover:border-primary-300 group-hover:bg-primary-100 group-hover:text-primary-600"
          >
            0 spermogramme
          </div>
        </div>
        <div class="prose text-justify">
          Il est <b>recommandé d'arrêter la contraception thermique</b> à ce
          moment là. L'étude la plus longue sur le sujet étant de <b>4 ans</b>,
          au delà de ça, on possède
          <b>moins d'information sur la réversibilité de la fertilité</b>.
          <p>
            Il est donc possible de faire <b>une pause d'un an</b>, en utilisant
            une autre méthode contraceptive et d'y revenir ensuite en commençant
            <b>un nouveau cycle</b>.
          </p>
        </div>
      </div>
      <div class="mt-16">
        <Alert title="Au fait !" type="info">
          Tu veux plus d'informations sur comment se déroule un spermogramme ?
          Alors
          <nuxt-link href="/guides/spermogramme">cliques ici</nuxt-link>.
        </Alert>
      </div>
    </div>
  </PageSkeleton>
</template>
<script setup lang="ts">
definePageMeta({
  title: "L'ordonnance",
  icon: "noto-scroll",
  desc: "Ce guide te donnes toutes les informations sur l'ordonnance et les spermogrammes que tu dois demander à ton.ta médecin.",
});
const image = ref(
  "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=575&q=80"
);
useSeoMeta({
  ogImage: image,
  twitterImage: image,
});
</script>
