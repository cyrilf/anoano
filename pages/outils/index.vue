<template>
  <div>
    <div class="bg-zinc-100">
      <div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1
          class="flex items-center gap-4 text-3xl font-bold tracking-tight text-gray-900"
        >
          <icon name="🪛️" />Outils
        </h1>
      </div>
    </div>
    <main>
      <div class="bg-zinc-50 px-4 py-6 sm:px-0">
        <div class="py-6 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-7xl divide-y">
            Voici les différents outils disponibles en ce moment :
            <div class="grid grid-cols-3 gap-8">
              <div
                class="duration-50 group my-20 rounded-lg bg-white py-4 px-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
              >
                <nuxt-link to="/outils/ano-taille">
                  <div
                    class="-mt-16 flex justify-center transition-all duration-200 group-hover:-mr-10 group-hover:scale-125 md:justify-end"
                  >
                    <div
                      class="flex items-center justify-center rounded-full border-2 border-amber-400 bg-amber-100 p-4"
                    >
                      <icon name="💍️" class="-ml-1 mr-2 !text-5xl" />
                    </div>
                  </div>
                  <div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                      AnoTaille
                    </h2>
                    <p class="mt-2 text-gray-600">
                      Avec cet outil tu vas savoir comment mesurer ton pénis et
                      trouver la bonne taille pour ton anneau.
                    </p>
                  </div>
                  <div class="mt-4 flex justify-end">
                    <span class="text-xl font-medium text-amber-400"
                      >Ouvrir</span
                    >
                  </div>
                </nuxt-link>
              </div>
              <div
                class="duration-50 group my-20 rounded-lg bg-white py-4 px-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
              >
                <nuxt-link to="/outils/ordonnance">
                  <div
                    class="-mt-16 flex justify-center transition-all duration-200 group-hover:-mr-10 group-hover:scale-125 md:justify-end"
                  >
                    <div
                      class="flex items-center justify-center rounded-full border-2 border-amber-400 bg-amber-100 p-4"
                    >
                      <icon name="📜️" class="-ml-1 mr-2 !text-5xl" />
                    </div>
                  </div>
                  <div>
                    <h2 class="text-3xl font-semibold text-gray-800">
                      Ordonnance
                    </h2>
                    <p class="mt-2 text-gray-600">
                      Tu as besoin d'une ordonnance pour effectuer tes
                      spermogrammes. Voilà un modèle à discuter avec ton médecin
                      ou le personnel médical qui te suis.
                    </p>
                  </div>
                  <div class="mt-4 flex justify-end">
                    <span class="text-xl font-medium text-amber-400"
                      >Ouvrir</span
                    >
                  </div>
                </nuxt-link>
              </div>
              <div
                class="my-20 cursor-not-allowed rounded-lg bg-white py-4 px-8 shadow-lg"
              >
                <div class="-mt-16 flex justify-center md:justify-end">
                  <div
                    class="flex items-center justify-center rounded-full border-2 border-zinc-400 bg-zinc-100 p-4"
                  >
                    <icon name="🧪️" class="-ml-1 mr-2 !text-5xl" />
                  </div>
                </div>
                <div>
                  <h2 class="text-3xl font-semibold text-gray-400">
                    Décrypte ton spermogramme
                  </h2>
                  <p class="mt-2 text-gray-300">
                    Avec cet outil tu vas pouvoir lire et comprendre ton
                    spermogramme.
                  </p>
                </div>
                <div class="mt-4 flex justify-end">
                  <span to="#" class="text-xl font-medium text-zinc-400"
                    >En développement</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
