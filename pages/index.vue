<template>
  <div>
    <section class="relative">
      <div
        class="clip-path absolute inset-0 z-0 ml-auto hidden w-[400px] bg-[url('~/assets/images/anneaux.jpg')] bg-cover bg-center bg-no-repeat md:block lg:w-[550px] xl:w-[650px]"
      >
        <span
          class="absolute bottom-0 right-2 rounded-t bg-zinc-50 bg-opacity-50 px-2 text-sm"
          >Photo de Koeko en
          <a href="https://creativecommons.org/licenses/by/4.0/deed.fr"
            >CC BY 4.0</a
          ></span
        >
      </div>
      <div
        class="container relative z-10 px-6 py-16 sm:mx-auto sm:py-8 md:py-28 md:pb-48"
      >
        <div class="flex flex-col md:flex-row">
          <div
            class="flex w-full flex-col items-center gap-7 text-center md:w-1/2 md:items-start md:gap-8 md:pr-8 md:text-left lg:w-2/3 lg:pr-20"
          >
            <h1
              class="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-4xl font-medium text-transparent md:text-5xl lg:text-6xl"
            >
              Ta contraception masculine
              <br class="hidden lg:inline-block" /><span class="underlined">
                commence</span
              >
              ici.
            </h1>
            <p
              class="tracking-snug text-lg text-gray-700 md:text-xl md:leading-normal"
            >
              Bienvenue <icon name="👋" />
              <br />
              On te recommande de regarder les outils à ta disposition ou bien
              de te lancer dans le parcours.
            </p>
            <div class="flex flex-wrap justify-center gap-4 md:justify-start">
              <nuxt-link
                to="/outils"
                class="inline-flex items-center rounded border-0 bg-amber-400 py-2 px-6 text-lg text-white hover:bg-yellow-500 focus:outline-none"
              >
                <icon name="🪛️" class="mr-3" /> Les outils
              </nuxt-link>
              <nuxt-link
                to="/parcours"
                class="inline-flex items-center rounded border-0 bg-gray-100 py-2 px-6 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none"
              >
                <icon name="⛳️" class="mr-3" /> Le parcours
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="relative mx-auto w-fit md:hidden">
        <img
          class="mx-auto mb-8 max-h-96 rounded-lg object-cover object-center"
          alt="anneau contraceptif"
          src="~/assets/images/anneaux.jpg"
        />
        <span
          class="absolute bottom-0 right-2 rounded-t bg-zinc-50 bg-opacity-50 px-2 text-sm"
          >Photo de Koeko en
          <a
            href="https://creativecommons.org/licenses/by/4.0/deed.fr"
            target="_blank"
            >CC BY 4.0</a
          ></span
        >
      </div>
    </section>
    <section class="bg-zinc-100 text-gray-600">
      <div
        class="container mx-auto flex flex-col items-center py-24 md:flex-row"
      >
        <div
          class="mb-16 flex flex-col items-center px-16 text-center md:mb-0 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
        >
          <wip-section>
            <p class="mb-8 text-2xl font-bold">Chantier en cours</p>
            <p>Ooh, c'est le tout, tout début.</p>
            <p>
              On commence seulement à créer les premières pages, les premiers
              outils.
            </p>
            <p>
              Bientôt, ici tu retrouveras tout plein d'informations sur la
              contraception masculine.
            </p>
            <p>
              Alors si tu vois un bloc qui a ce style avec l'emoji chantier
              <icon name="🚧️" />, c'est que le contenu n'est pas final.
            </p>
            <p class="mb-4"></p>
            <p>
              Alors, un peu de patience, et bientôt tu pourras même contribuer à
              ce projet ! <icon name="👌" />
            </p>
          </wip-section>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Contraception masculine",
});
</script>
<style>
.underlined {
  position: relative;
}

.underlined::after {
  content: "";
  width: 110%;
  height: 24px;
  border-width: 3px;
  border-color: rgb(251, 191, 36) transparent transparent;
  border-radius: 100% 50% 0px 0px;
  position: absolute;
  top: 90%;
  left: -5%;
}
</style>
