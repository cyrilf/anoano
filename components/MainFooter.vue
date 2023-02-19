<template>
  <footer class="bg-zinc-200 pt-6 dark:bg-zinc-800 md:py-8">
    <div
      class="container mx-auto flex flex-col flex-wrap items-center justify-between gap-y-8 px-8 md:flex-row"
    >
      <NuxtLink
        to="/"
        class="flex items-center font-medium hover:text-primary-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 rounded-full bg-primary-400 p-2"
        >
          <circle cx="50" cy="50" r="40" stroke="white" stroke-width="40" />
        </svg>
        <span class="text-md ml-3 text-zinc-800 dark:text-zinc-300"
          >Anoano</span
        >
      </NuxtLink>
      <div class="flex flex-wrap gap-12 lg:gap-24">
        <div
          class="text-sm font-semibold"
          v-for="linkGroup in links"
          :key="linkGroup.name"
        >
          <NuxtLink
            class="mb-4 block uppercase text-zinc-400 dark:text-zinc-500"
            :class="linkGroup.href ? 'hover:underline' : ''"
            :to="linkGroup.href"
            active-class="_"
            exact-active-class="_"
          >
            {{ linkGroup.name }}</NuxtLink
          >
          <ul class="text-zinc-600 dark:text-zinc-300">
            <li class="pb-3" v-for="link in linkGroup.links" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="hover:text-zinc-500 hover:underline dark:hover:text-zinc-300"
                active-class="_"
                exact-active-class="_"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr
      class="container my-6 rounded border-zinc-300 dark:border-primary-400 sm:mx-auto lg:my-8"
    />
    <span
      class="container mx-auto block px-8 py-2 text-center text-sm text-zinc-700 dark:text-zinc-300"
    >
      Anoano ~ contraception masculine. ✨
    </span>
  </footer>
</template>
<script setup lang="ts">
const links = [
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
    name: "Autres",
    links: [
      { name: "À propos", href: "/a-propos" },
      { name: "Glossaire", href: "/glossaire" },
      { name: "Des ressources pour explorer", href: "/explorer" },
    ],
  },
];
</script>
