<template>
  <header class="shadow relative">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <NuxtLink
        to="/"
        class="flex font-medium items-center hover:text-amber-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 p-2 bg-amber-400 rounded-full"
        >
          <circle cx="50" cy="50" r="40" stroke="white" stroke-width="40" />
        </svg>
        <span class="ml-3 text-xl">Anoano</span>
      </NuxtLink>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <NuxtLink to="/a-propos" class="mr-5 hover:text-gray-900">
          À propos
        </NuxtLink>
      </nav>
      <NuxtLink
        to="/parcours"
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        Le parcours
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </NuxtLink>
    </div>
  </header>
</template>
<script>
export default {
  name: "MainHeader",
};
</script>
