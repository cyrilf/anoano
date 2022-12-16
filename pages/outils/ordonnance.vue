<template>
  <PageSkeleton
    image-src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  >
    <template #intro>
      <p>
        C'est <b>important d'être bien accompagné.e</b>.<br />
        Si ton.ta médecin traitant, un.e urologue ou un.e andrologue décide de
        te suivre dans ta contraception, c'est le top ✨.<br />
        Mais parfois, ces personnes là ne connaissent pas bien la contraception
        thermique.
      </p>
      <p>
        Alors tu peux lui présenter cette page à titre d'information.<br />
        Une ordonnance concerne une année à la fois.
      </p>
      <p class="hidden">
        TODO lien: Tu veux plus d'information sur comment se déroule un
        spermogramme ? Alors cliques ici.
      </p>
    </template>
    <div>
      <div
        class="group prose my-4 max-w-none rounded bg-zinc-50 p-4 px-8 shadow xl:max-w-prose"
      >
        <div class="mb-2 flex items-baseline gap-2">
          <h3 class="m-0">Année 1</h3>
          <div
            class="rounded-md border border-zinc-300 bg-zinc-100 py-1 px-2 text-xs font-normal leading-none text-zinc-500 group-hover:border-amber-300 group-hover:bg-amber-100 group-hover:text-amber-600"
          >
            10 spermogrammes
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <Toggle withGuide text="1 spermogramme initial."
            ><div class="prose text-justify">
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
          <Toggle withGuide text="1 spermogramme de contrôle à 3 mois.">
            <div class="prose text-justify">
              <p>
                Il permet de t'assurer que la méthode fonctionne bien pour toi.
                Pour celà, tu dois passer
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
          <Toggle
            withGuide
            text="1 spermogramme de validation à 3 mois et 3 semaines."
            ><div class="prose text-justify">
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
          <Toggle
            withGuide
            text="1 spermogramme renouvelable tous les mois pendant 6 mois."
            ><div class="prose text-justify">
              Ces 6 spermogrammes te servent de <b>checkpoints</b>. Ils
              permettent de t'assurer que ta contraception
              <b>fonctionne bien dans la durée</b>, que la manière dont tu le
              portes est <b>efficace et règulière</b>.
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
            class="rounded-md border border-zinc-300 bg-zinc-100 py-1 px-2 text-xs font-normal leading-none text-zinc-500 group-hover:border-amber-300 group-hover:bg-amber-100 group-hover:text-amber-600"
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
            class="rounded-md border border-zinc-300 bg-zinc-100 py-1 px-2 text-xs font-normal leading-none text-zinc-500 group-hover:border-amber-300 group-hover:bg-amber-100 group-hover:text-amber-600"
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
    </div>
  </PageSkeleton>
</template>
<script setup lang="ts">
definePageMeta({
  title: "📜️ L'ordonnance",
});
</script>
