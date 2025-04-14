<template>
  <main class="grid grid-cols-1 xl:grid-cols-3">
    <StepsMenu class="self-start" />
    <div class="col-span-2 px-4 pt-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="prose container mx-auto">
          <p>
            Cette page, découpée en <b>4 grandes étapes</b>, te permets de découvir le parcours complet d'une
            <b>personne voulant se contracepter</b
            ><span class="hand text-2xl text-zinc-600"
              >(potentiellement, toi <span class="text-base"><Icon name="noto-winking-face" /></span>)</span
            >.
          </p>
          <p>
            Prends le temps de lire chaque section pour comprendre les pré-requis, la marche à suivre, la mise en
            pratique et le suivi. Si besoin, il y a aussi le processus pour arrêter
            <span class="hand text-2xl text-zinc-600">(oui, cette méthode est réversible)</span>.
          </p>
        </div>
      </div>
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <StepsPreparation />
        </div>
      </div>
      <hr class="mx-auto w-3/4 max-w-3xl border-2 border-dashed" />
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <StepsDebut />
        </div>
      </div>
      <hr class="mx-auto w-3/4 max-w-3xl border-2 border-dashed" />
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <StepsSuivi />
        </div>
      </div>
      <hr class="mx-auto w-3/4 max-w-3xl border-2 border-dashed" />
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <StepsArret />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  title: "📋 Le parcours",
  desc: "Tu découvres en 4 grandes étapes le parcours complet d'une personne qui souhaite se contracepter.",
});
</script>
