<template>
  <div>
    <section class="body-font text-gray-600">
      <div
        class="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row"
      >
        <div
          class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
        >
          <p class="leading-relaxed">
            Ce site souhaite parler de contraception masculine. Principalement
            de la contraception thermique avec l'anneau.
          </p>
          <p class="leading-relaxed">
            Le mieux pour commencer, est de suivre le parcours. C'est un contenu
            en cours de création sur les différentes étapes pour se
            contracepter.
          </p>
          <NuxtLink
            to="/parcours"
            class="mt-4 inline-flex rounded border-0 bg-yellow-400 py-2 px-6 text-lg text-white hover:bg-yellow-500 focus:outline-none"
          >
            Le parcours
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  crumb: "💁️ À propos",
});
</script>
