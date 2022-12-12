<template>
  <header class="sticky top-0 z-20 bg-white/80 shadow backdrop-blur-lg">
    <div
      class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row"
    >
      <nuxt-link
        to="/"
        class="flex items-center font-medium hover:text-amber-400"
      >
        <svg class="h-10 w-10 rounded-full bg-amber-400 stroke-amber-400">
          <circle cx="50%" cy="50%" r="50%" stroke-width="40%" fill="white" />
          <line x1="-10%" y1="70%" x2="70%" y2="-10%" stroke-width="30%" />
        </svg>

        <span class="ml-3 text-xl">Anoano</span>
      </nuxt-link>
      <nav
        class="mt-5 flex flex-wrap items-center justify-center gap-y-4 text-base md:ml-auto md:mt-0"
      >
        <nuxt-link to="/outils" class="mr-5 hover:text-gray-900">
          Les outils
        </nuxt-link>
        <nuxt-link to="/a-propos" class="mr-5 hover:text-gray-900">
          À propos
        </nuxt-link>
        <nuxt-link
          to="/parcours"
          active-class="_"
          exact-active-class="_"
          class="inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none"
        >
          Le parcours
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>
