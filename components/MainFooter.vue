<template>
  <footer class="bg-zinc-50 dark:bg-zinc-700 md:py-8">
    <div class="container mx-auto flex items-center justify-between px-8">
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
        <span class="text-md ml-3 dark:text-zinc-300">Anoano</span>
      </NuxtLink>
      <ul class="flex flex-wrap items-center">
        <li>
          <NuxtLink
            to="/a-propos"
            class="mr-4 text-sm text-zinc-500 hover:text-zinc-700 hover:underline dark:text-zinc-300 md:mr-6"
          >
            À propos
          </NuxtLink>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-zinc-200 dark:border-zinc-800 sm:mx-auto lg:my-8" />
    <span
      class="container mx-auto block px-8 pb-4 text-center text-sm text-zinc-500 dark:text-zinc-300"
    >
      Anoano ~ contraception masculine. <icon name="✨" />
    </span>
  </footer>
</template>
