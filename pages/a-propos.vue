<template>
  <div>
    <section class="text-gray-600 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            À propos
          </h1>
          <p class="leading-relaxed">
            Ce site souhaite parler de contraception masculine. Principalement
            la contraception thermique avec l'anneau.
          </p>
          <p class="leading-relaxed">
            Le mieux pour commencer, est de suivre le parcours. Un contenu en
            cours de création sur les différentes étapes pour se contracepter.
          </p>
          <NuxtLink
            to="/parcours"
            class="mt-4 inline-flex text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg"
          >
            Le parcours
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
