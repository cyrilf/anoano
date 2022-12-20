<template>
  <footer class="bg-zinc-800 pt-6 md:py-8">
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
        <span class="text-md ml-3 text-zinc-300">Anoano</span>
      </NuxtLink>
      <div class="flex gap-12 lg:gap-24">
        <div
          class="text-sm font-semibold"
          v-for="linkGroup in links"
          :key="linkGroup.name"
        >
          <span class="mb-4 block uppercase text-zinc-500">{{
            linkGroup.name
          }}</span>
          <ul class="text-zinc-300">
            <li class="pb-3" v-for="link in linkGroup.links" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="hover:text-zinc-300 hover:underline"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-zinc-600 sm:mx-auto lg:my-8" />
    <span
      class="container mx-auto block px-8 pb-4 text-center text-sm text-zinc-300"
    >
      Anoano ~ contraception masculine. <icon name="✨" />
    </span>
  </footer>
</template>
<script setup lang="ts">
const links = [
  {
    name: "Les outils",
    links: [
      { name: "AnoTaille", href: "/outils/ano-taille" },
      { name: "L'ordonnance", href: "/outils/ordonnance" },
    ],
  },
  {
    name: "Autres",
    links: [
      { name: "Le parcours", href: "/parcours" },
      { name: "À propos", href: "/a-propos" },
    ],
  },
];
</script>
