<template>
  <div>
    <section class="relative">
      <div class="relative container px-6 py-8 sm:mx-auto sm:py-8 md:py-28 md:pb-48">
        <div class="flex flex-col md:flex-row">
          <div
            class="flex w-full flex-col items-center gap-7 text-center md:w-1/2 md:items-start md:gap-8 md:pr-8 md:text-left lg:w-2/3 lg:pr-36 2xl:pr-0"
          >
            <h1
              class="from-primary-500 to-primary-400 bg-gradient-to-r bg-clip-text text-4xl font-medium text-transparent md:text-5xl 2xl:text-6xl"
            >
              Ta contraception
              <ContentMasculine />
              <br class="hidden lg:inline-block" /><span class="md:underlined"> commence</span>
              ici.
            </h1>
            <p class="tracking-snug prose bg-white/40 text-lg text-zinc-700 md:text-xl md:leading-normal">
              Bienvenue <Icon name="noto-waving-hand" />
              <br />
              On te recommande de suivre le parcours qui résume les grandes étapes de la contraception. Tu peux aussi
              regarder les outils et les guides à ta disposition.
            </p>
            <div class="flex flex-wrap justify-center gap-4 md:justify-start">
              <nuxt-link
                to="/parcours"
                class="border-accent-400 hover:bg-accent-400 inline-flex items-center gap-2 rounded border-2 px-4 py-2 text-lg text-zinc-700 hover:text-white"
              >
                <Icon name="noto-clipboard" /> Le parcours
              </nuxt-link>
              <nuxt-link
                to="/guides"
                class="hover:bg-primary-400 inline-flex items-center gap-2 rounded border-0 bg-zinc-200 px-4 py-2 text-lg text-zinc-700 transition"
              >
                <Icon name="noto-books" /> Les guides
              </nuxt-link>
              <nuxt-link
                to="/outils"
                class="hover:bg-primary-400 inline-flex items-center gap-2 rounded border-0 bg-zinc-200 px-4 py-2 text-lg text-zinc-700 transition"
              >
                <Icon name="noto-screwdriver" /> Les outils
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="clip-path group absolute inset-0 z-0 ml-auto hidden w-[400px] bg-cover bg-center bg-no-repeat md:block lg:w-[550px] xl:w-[650px]"
        :style="`background-image: url(${image})`"
      >
        <span
          class="bg-opacity-70 absolute right-0 bottom-0 bg-zinc-50 px-2 text-sm text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100"
          >Photo de Koeko en <a href="https://creativecommons.org/licenses/by/4.0/deed.fr">CC BY 4.0</a></span
        >
      </div>
      <div class="mx-auto w-fit sm:mb-8 md:hidden">
        <image-caption
          class="mx-auto max-h-96 rounded-none object-cover object-center sm:rounded-lg"
          alt="anneaux contraceptif"
          :src="image"
          :width="650"
        >
          <span
            >Photo de Koeko en
            <a href="https://creativecommons.org/licenses/by/4.0/deed.fr" target="_blank">CC BY 4.0</a></span
          >
        </image-caption>
      </div>
    </section>
    <section class="bg-zinc-100 text-zinc-600">
      <div class="container mx-auto flex flex-col-reverse items-center py-24 md:flex-row">
        <div>
          <image-caption
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=470&q=80"
            alt="personne travaillant sur un ordinateur"
            :width="470"
          >
            Photo de
            <a href="https://unsplash.com/@jipy32">Jean-Philippe Delberghe</a>
            sur <a href="https://unsplash.com/photos/75xPHEQBmvA">Unsplash</a>
          </image-caption>
        </div>
        <div
          class="prose mb-16 flex max-w-none flex-col items-center px-16 text-center md:mb-0 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
        >
          <h2 class="text-4xl">
            La contraception en deux mots
            <span class="hand text-2xl text-zinc-400">(et un tout petit peu plus..)</span>
          </h2>
          <div class="max-w-prose">
            <p>Ce site te présente une méthode simple, efficace et réversible pour te contracepter.</p>
            <p>
              Il s'agit d'une méthode thermique naturelle qui utilise la chaleur de ton propre corps pour arrêter la
              production de spermatozoïdes. Il suffit pour cela d'exposer tes testicules à une température de 37°, 15
              heures par jour. Au bout de trois mois, te voilà contracepté !
            </p>
            <p>
              Différents outils sont disponible, ici on va surtout te parler de l'anneau. Un simple objet en silicone
              bio-compatible qui se porte aussi facilement qu'un bracelet
              <span class="hand text-xl leading-normal text-zinc-600"
                >(sauf que lui, tu ne le mets pas autour de ton bras)</span
              >.
            </p>
            <div>
              Prêt pour en apprendre plus ?
              <div>
                Commence par
                <span class="not-prose">
                  <nuxt-link
                    to="/parcours"
                    class="decoration-accent-400 hover:decoration-accent-200 font-semibold text-zinc-900 underline decoration-2 transition hover:text-zinc-700"
                  >
                    le parcours
                  </nuxt-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-zinc-600">
      <div class="container mx-auto flex flex-col items-center justify-between py-24 md:flex-row">
        <div
          class="prose mb-16 flex max-w-none flex-col items-center px-16 text-center md:mb-0 md:items-start md:text-left"
        >
          <h2 class="text-4xl">
            Ce projet se veut libre et ouvert
            <span class="hand text-2xl text-zinc-400">(alors viens contribuer ?)</span>
          </h2>
          <div class="max-w-prose">
            <p>
              L'idée ici est de partager du contenu clair et détailé sur la contraception <ContentMasculine />. Il y a
              des guides et des outils pratiques mis à disposition. Les textes et les images sont libres de droits et le
              code de ce site est open source.
            </p>
            <p>Tout le monde est le.la bienvenue pour participer ! Et surtout toi, oui, toi !</p>
            <div>
              Pour celà, trois moyens de contribuer aujourd'hui :
              <ul class="flex list-none flex-col gap-4 text-lg">
                <li class="flex flex-wrap sm:justify-normal sm:gap-2">
                  <a class="hover:text-primary-500 flex items-center gap-2" href="https://github.com/cyrilf/anono"
                    ><Icon name="fe-github" />github.com/cyrilf/anoano</a
                  >
                  <span class="hand text-2xl text-zinc-500">pour le code et le contenu</span>
                </li>
                <li class="flex flex-wrap sm:justify-normal sm:gap-2">
                  <a class="hover:text-primary-500 flex items-center gap-2" href="mailto:hey@anoano.page">
                    <Icon name="fe-mail" /> hey@anoano.page
                  </a>
                  <span class="hand text-2xl text-zinc-500">pour des idées ou remarques </span>
                </li>
                <li class="flex flex-wrap text-left sm:justify-normal sm:gap-2">
                  <a class="hover:text-primary-500 flex items-center gap-2" href="https://anoano.page">
                    <Icon name="fe-share" /> anoano.page
                  </a>
                  <span class="hand text-2xl text-zinc-500">à partager pour que le projet se fasse connaître</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <image-caption
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=470&q=80"
            alt="personne travaillant sur un ordinateur"
            :width="470"
          >
            Photo de
            <a href="https://unsplash.com/@christinhumephoto">Christin Hume</a>
            sur <a href="https://unsplash.com/photos/Hcfwew744z4">Unsplash</a>
          </image-caption>
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
const image = ref("/anneaux.jpg");
useSeoMeta({ ogImage: image, twitterImage: image });
</script>
