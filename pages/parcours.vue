<template>
  <main>
    <div class="px-4 py-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <div
            class="mb-8 flex w-fit items-center rounded border-l-4 border-amber-500 bg-amber-50 p-4 shadow-sm"
          >
            <div class="text-amber-700">
              <div class="flex gap-4 font-bold">
                <icon name="🚧️" /> Page en cours de construction
              </div>
              <div>
                Le contenu de cette page n'est pas encore prêt. On pense, on
                rédige et tout bientôt ce sera tout beau !
              </div>
              <div>
                Alors n'hésite pas à revenir y jeter un oeil <i>(ou deux) </i>
                <icon name="👀️" />
              </div>
            </div>
          </div>
          <div class="px-4 py-6 sm:px-0">
            <wip-section>
              <h2 class="text-2xl font-bold">
                <nuxt-link
                  to="/parcours#etape-1"
                  id="etape-1"
                  class="flex flex-wrap items-center justify-center gap-2 sm:justify-start"
                >
                  <icon name="📚️" /> Étape 1 :
                  <span class="text-slate-400">Je me prépare</span>
                </nuxt-link>
              </h2>
              <StepsPreparation />
            </wip-section>
          </div>
        </div>
      </div>
      <div class="bg-zinc-100 py-6 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl divide-y py-12">
          <wip-section>
            <h2 class="text-2xl font-bold">
              <nuxt-link
                to="/parcours#etape-2"
                id="etape-2"
                class="flex flex-wrap items-center justify-center gap-2 sm:justify-start"
              >
                <icon name="👌️" /> Étape 2 :
                <span class="text-slate-400">Je commence</span>
              </nuxt-link>
            </h2>
            <StepsPratique />
          </wip-section>
        </div>
      </div>
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl divide-y py-12">
          <wip-section>
            <h2 class="text-2xl font-bold">
              <nuxt-link
                to="/parcours#etape-3"
                id="etape-3"
                class="flex flex-wrap items-center justify-center gap-2 sm:justify-start"
              >
                <icon name="🔎️" /> Étape 3 :
                <span class="text-slate-400">Je fais mon suivi</span>
              </nuxt-link>
            </h2>
            <StepsSuivi />
          </wip-section>
        </div>
      </div>
      <div class="bg-zinc-100 py-6 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl divide-y py-12">
          <wip-section>
            <h2 class="text-2xl font-bold">
              <nuxt-link
                to="/parcours#etape-4"
                id="etape-4"
                class="flex flex-wrap items-center justify-center gap-2 sm:justify-start"
              >
                <icon name="⏱️" /> Étape 4 :
                <span class="text-slate-400">Je décide d'arrêter</span>
              </nuxt-link>
            </h2>
            <StepsArret />
          </wip-section>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  crumb: "⛳️ Le parcours",
});
</script>
