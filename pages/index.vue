<template>
  <div>
    <section class="relative">
      <div
        class="clip-path absolute inset-0 z-0 ml-auto hidden w-[400px] bg-cover bg-center bg-no-repeat md:block lg:w-[550px] xl:w-[650px]"
        style="background-image: url(/anneaux.jpg)"
      >
        <span
          class="absolute right-0 bottom-0 bg-zinc-50 bg-opacity-70 px-2 text-sm text-zinc-600"
          >Photo de Koeko en
          <a href="https://creativecommons.org/licenses/by/4.0/deed.fr"
            >CC BY 4.0</a
          ></span
        >
      </div>
      <div
        class="container relative px-6 py-16 sm:mx-auto sm:py-8 md:py-28 md:pb-48"
      >
        <div class="flex flex-col md:flex-row">
          <div
            class="flex w-full flex-col items-center gap-7 text-center md:w-1/2 md:items-start md:gap-8 md:pr-8 md:text-left lg:w-2/3 lg:pr-20"
          >
            <h1
              class="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-4xl font-medium text-transparent md:text-5xl lg:text-6xl"
            >
              Ta contraception
              <ContentMasculine />
              <br class="hidden lg:inline-block" /><span class="underlined">
                commence</span
              >
              ici.
            </h1>
            <p
              class="tracking-snug prose text-lg text-zinc-700 md:text-xl md:leading-normal"
            >
              Bienvenue <icon name="noto-waving-hand" />
              <br />
              On te recommande de suivre le parcours qui résume les grandes
              étapes de la contraception. Tu peux aussi regarder les outils et
              les guides à ta disposition.
            </p>
            <div class="flex flex-wrap justify-center gap-4 md:justify-start">
              <nuxt-link
                to="/parcours"
                class="inline-flex items-center rounded border-0 bg-primary-400 py-2 px-6 text-lg text-zinc-700 hover:bg-primary-500"
              >
                <icon name="noto-flag-in-hole" class="-ml-2 mr-3" /> Le parcours
              </nuxt-link>
              <nuxt-link
                to="/guides"
                class="inline-flex items-center rounded border-0 bg-zinc-100 py-2 px-6 text-lg text-zinc-700 hover:bg-primary-200"
              >
                <icon name="noto-books" class="-ml-2 mr-3" /> Les guides
              </nuxt-link>
              <nuxt-link
                to="/outils"
                class="inline-flex items-center rounded border-0 bg-zinc-100 py-2 px-6 text-lg text-zinc-700 hover:bg-primary-200"
              >
                <icon name="noto-screwdriver" class="-ml-2 mr-3" /> Les outils
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto w-fit md:hidden">
        <image-caption
          class="mx-auto max-h-96 object-cover object-center sm:rounded-lg"
          alt="anneaux contraceptif"
          src="/anneaux.jpg"
          :width="650"
        >
          <span
            >Photo de Koeko en
            <a
              href="https://creativecommons.org/licenses/by/4.0/deed.fr"
              target="_blank"
              >CC BY 4.0</a
            ></span
          >
        </image-caption>
      </div>
    </section>
    <section class="bg-zinc-100 text-zinc-600">
      <div
        class="container mx-auto flex flex-col items-center py-24 md:flex-row"
      >
        <div
          class="prose mb-16 flex max-w-none flex-col items-center px-16 text-center md:mb-0 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
        >
          <h2 class="text-4xl">
            La contraception en deux mots
            <span class="hand text-2xl text-zinc-400"
              >(et un tout petit peu plus..)</span
            >
          </h2>
          <div class="max-w-prose">
            <p>
              Ce site te présente une méthode simple, efficace et réversible
              pour te contracepter.
            </p>
            <p>
              Il s'agit d'une méthode thermique naturelle qui utilise la chaleur
              de ton propre corps pour arrêter la production de spermatozoïdes.
              Il suffit pour cela d'exposer tes testicules à une température de
              37°, 15 heures par jour. Au bout de trois mois, te voilà
              contracepté !
            </p>
            <p>
              Différents outils sont disponible, ici on va surtout te parler de
              l'anneau. Un simple objet en silicone bio-compatible qui se porte
              aussi facilement qu'un bracelet
              <span class="hand text-xl leading-normal text-zinc-600"
                >(sauf que lui, tu ne le mets pas autour de ton bras)</span
              >. On arrête la métaphore, tu as compris l'idée.
            </p>
            <div>
              Prêt pour en apprendre plus ?
              <div>
                Commence par
                <span class="not-prose">
                  <nuxt-link
                    to="/parcours"
                    class="rounded border-2 border-primary-400 p-1 hover:bg-primary-400 hover:text-zinc-900"
                  >
                    <icon name="noto-flag-in-hole" /> le parcours
                  </nuxt-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-zinc-600">
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
              <icon name="noto-construction" />, c'est que le contenu n'est pas
              final.
            </p>
            <p class="mb-4"></p>
            <p>
              Alors, un peu de patience, et bientôt tu pourras même contribuer à
              ce projet ! <icon name="noto-ok-hand" />
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
  desc: "Ta contraception masculine commence ici. Il y a des guides et des outils à ta disposition pour t'accompagner dans ton parcours contraceptif.",
});
</script>
<style scoped>
.underlined {
  display: inline-block;
  position: relative;
  background: inherit;
}

.underlined::after {
  content: "";
  width: 110%;
  height: 24px;
  border-width: 3px;
  border-color: #fbbf24 transparent transparent;
  border-radius: 100% 50% 0px 0px;
  position: absolute;
  top: 90%;
  left: -5%;
}
</style>
