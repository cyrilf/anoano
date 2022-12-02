<template>
  <div>
    <section class="text-gray-600">
      <div class="flex md:flex-row flex-col items-center">
        <div
          class="flex flex-col md:items-start md:text-left items-center text-center xl:pl-64 lg:pl-44 md:pl-16 px-4 container mx-auto my-8"
        >
          <h1
            class="lg:text-6xl md:text-5xl sm:text-4xl text-3xl mb-4 font-medium bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent"
          >
            Ta contraception masculine
            <br class="hidden lg:inline-block" />commence ici.
          </h1>
          <p class="mb-8 leading-relaxed">Bienvenue <icon name="👋" /></p>
          <div class="flex justify-start flex-wrap gap-4">
            <nuxt-link
              to="/parcours"
              class="inline-flex text-white bg-amber-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg"
            >
              Le parcours
            </nuxt-link>
            <nuxt-link
              to="/a-propos"
              class="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              À propos
            </nuxt-link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:ml-auto">
          <img
            class="object-cover object-center md:clip-path rounded-lg max-h-96 md:max-h-max mx-auto mb-8 md:mb-0 md:rounded-none"
            alt="hero"
            src="~/assets/images/oring.jpeg"
          />
        </div>
      </div>
    </section>
    <section class="text-gray-600 bg-zinc-100">
      <div
        class="flex py-24 md:flex-row flex-col items-center container mx-auto"
      >
        <div
          class="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center px-16"
        >
          <p class="font-bold text-2xl flex mb-8">
            <icon name="🚧" class="mr-4" />Chantier en cours
          </p>
          <p>Ooh, c'est le tout, tout début.</p>
          <p>
            On commence seulement à créer les premières pages, les premiers
            outils.
          </p>
          <p>
            Bientôt, ici tu retrouveras tout plein d'informations sur la
            contraception masculine.
          </p>
          <p class="mb-4"></p>
          <p>
            Alors, un peu de patience, et bientôt tu pourras même contribuer à
            ce projet ! <icon name="👌" />
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
