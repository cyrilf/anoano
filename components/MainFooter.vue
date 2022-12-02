<template>
  <footer class="bg-zinc-50 md:py-8 dark:bg-zinc-700">
    <div class="flex items-center justify-between container mx-auto px-8">
      <NuxtLink
        to="/"
        class="flex font-medium items-center hover:text-amber-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 p-2 bg-amber-400 rounded-full"
        >
          <circle cx="50" cy="50" r="40" stroke="white" stroke-width="40" />
        </svg>
        <span class="ml-3 text-md dark:text-zinc-300">Anoano</span>
      </NuxtLink>
      <ul class="flex flex-wrap items-center">
        <li>
          <NuxtLink
            to="/a-propos"
            class="mr-4 text-sm text-zinc-500 hover:underline md:mr-6 hover:text-zinc-700 dark:text-zinc-300"
          >
            À propos
          </NuxtLink>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-800 lg:my-8" />
    <span
      class="block text-sm text-zinc-500 text-center dark:text-zinc-300 container mx-auto px-8 pb-4"
    >
      Anoano ~ contraception masculine. <icon name="✨" />
    </span>
  </footer>
</template>
<script>
export default {
  name: "MainHeader",
};
</script>
