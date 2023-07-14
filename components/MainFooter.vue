<template>
  <footer class="bg-zinc-700 px-8 pt-6 dark:bg-zinc-800 md:py-12">
    <div
      class="container mx-auto flex flex-col flex-wrap justify-center gap-y-8 px-8 pt-8 md:flex-row"
    >
      <div class="flex flex-wrap gap-12 lg:gap-24">
        <div
          v-for="linkGroup in links"
          :key="linkGroup.name"
          class="w-48 flex-initial text-sm font-semibold"
        >
          <NuxtLink
            v-if="linkGroup.href === '/'"
            class="-mt-3 flex flex-auto items-center self-start font-medium hover:text-primary-500 lg:-ml-14"
            :to="linkGroup.href"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 rounded-full bg-primary-400 p-2"
            >
              <circle cx="50" cy="50" r="40" stroke="white" stroke-width="40" />
            </svg>
            <span
              class="ml-4 text-2xl font-extrabold text-zinc-200 dark:text-zinc-300"
              >{{ linkGroup.name }}</span
            >
          </NuxtLink>
          <NuxtLink
            v-else-if="linkGroup.href !== '/'"
            class="mb-4 block whitespace-nowrap uppercase text-zinc-200 hover:text-zinc-400 dark:text-zinc-300"
            :to="linkGroup.href"
            active-class="_"
            exact-active-class="_"
          >
            {{ linkGroup.name }}
          </NuxtLink>
          <ul class="font-normal text-zinc-400 dark:text-zinc-400">
            <li v-for="link in linkGroup.links" :key="link.name" class="pb-3">
              <NuxtLink
                :to="link.href"
                class="whitespace-nowrap transition hover:text-zinc-200 dark:hover:text-white"
                active-class="_"
                exact-active-class="_"
              >
                {{ link.name }}
                <span v-if="link.icon"><icon :name="link.icon" /></span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr
      class="container my-6 rounded border-zinc-600 dark:border-zinc-600 sm:mx-auto lg:my-8"
    />
    <div
      class="container mx-auto block px-8 py-2 text-center text-sm text-zinc-100 dark:text-zinc-300"
    >
      <div>Anoano ~ contraception <ContentMasculine /></div>
      <div class="pt-2"><icon name="noto-sparkles" /></div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const links = [
  {
    name: "Anoano",
    href: "/",
    links: [],
  },
  {
    name: "Le parcours",
    href: "/parcours",
    links: [
      { name: "Je me prépare", href: "/parcours#etape-1" },
      { name: "Je débute", href: "/parcours#etape-2" },
      { name: "Je fais mon suivi", href: "/parcours#etape-3" },
      { name: "Je décide d'arrêter", href: "/parcours#etape-4" },
    ],
  },
  {
    name: "Les guides",
    href: "/guides",
    links: [
      {
        name: "La contraception thermique",
        href: "/guides/contraception-thermique",
      },
      { name: "L'ordonnance", href: "/guides/ordonnance" },
      { name: "Le spermogramme", href: "/guides/spermogramme" },
    ],
  },
  {
    name: "Les outils",
    href: "/outils",
    links: [
      { name: "AnoTaille", href: "/outils/ano-taille" },
      {
        name: "Décrypte ton spermogramme",
        href: "/outils/decrypte-spermogramme",
      },
    ],
  },
  {
    name: "Extras",
    href: "/extras",
    links: [
      { name: "Des ressources pour explorer", href: "/explorer" },
      { name: "À propos", href: "/a-propos" },
      { name: "Glossaire", href: "/glossaire" },
      {
        name: "Github",
        href: "https://github.com/cyrilf/anoano",
        icon: "fe-github",
      },
    ],
  },
];
</script>
