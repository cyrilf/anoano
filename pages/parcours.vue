<template>
  <main>
    <div class="px-4 pt-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container prose mx-auto">
          <p>
            Cette page, découpée en <b>4 grandes étapes</b>, te permets de
            découvir le parcours complet d'une
            <b>personne voulant se contracepter</b
            ><span class="hand text-2xl text-zinc-600"
              >(potentiellement, toi
              <span class="text-base"><icon name="noto-winking-face" /></span
              >)</span
            >.
          </p>
          <p>
            Prends le temps de lire chaque section pour comprendre les
            pré-requis, la marche à suivre, la mise en pratique et le suivi. Si
            besoin, il y a aussi le processus pour arrêter
            <span class="hand text-2xl text-zinc-600"
              >(oui, cette méthode est réversible)</span
            >.
          </p>
        </div>
      </div>
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <h2
            class="bg-white py-4 text-2xl font-bold xl:sticky xl:top-20 xl:z-20"
          >
            <nuxt-link
              to="/parcours#etape-1"
              id="etape-1"
              class="flex scroll-mt-28 flex-wrap items-center justify-center gap-2 text-primary-400"
              active-class="_"
              exact-active-class="_"
            >
              <icon name="noto-books" /> Étape 1 :
              <span class="text-zinc-400">Je me prépare</span>
            </nuxt-link>
          </h2>
          <StepsPreparation />
        </div>
      </div>
      <div class="py-6 sm:bg-zinc-50 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <h2
            class="bg-white py-4 text-2xl font-bold sm:bg-zinc-50 xl:sticky xl:top-20 xl:z-20"
          >
            <nuxt-link
              to="/parcours#etape-2"
              id="etape-2"
              class="flex scroll-mt-28 flex-wrap items-center justify-center gap-2 text-primary-400"
              active-class="_"
              exact-active-class="_"
            >
              <icon name="noto-ok-hand" /> Étape 2 :
              <span class="text-zinc-400">Je débute</span>
            </nuxt-link>
          </h2>
          <StepsDebut />
        </div>
      </div>
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <h2
            class="bg-white py-4 text-2xl font-bold xl:sticky xl:top-20 xl:z-20"
          >
            <nuxt-link
              to="/parcours#etape-3"
              id="etape-3"
              class="flex scroll-mt-28 flex-wrap items-center justify-center gap-2 text-primary-400"
              active-class="_"
              exact-active-class="_"
            >
              <icon name="noto-magnifying-glass-tilted-right" /> Étape 3 :
              <span class="text-zinc-400">Je fais mon suivi</span>
            </nuxt-link>
          </h2>
          <StepsSuivi />
        </div>
      </div>
      <div class="py-6 sm:bg-zinc-50 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <h2
            class="bg-white py-4 text-2xl font-bold sm:bg-zinc-50 xl:sticky xl:top-20 xl:z-20"
          >
            <nuxt-link
              to="/parcours#etape-4"
              id="etape-4"
              class="flex scroll-mt-28 flex-wrap items-center justify-center gap-2 text-primary-400"
              active-class="_"
              exact-active-class="_"
            >
              ⏱️ Étape 4 :
              <span class="text-zinc-400">Je décide d'arrêter</span>
            </nuxt-link>
          </h2>
          <StepsArret />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  title: "⛳️ Le parcours",
  desc: "Tu découvres en 4 grandes étapes le parcours complet d'une personne qui souhaite se contracepter.",
});
</script>
