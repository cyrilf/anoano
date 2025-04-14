<template>
  <div :class="` ${isMenuOpen ? 'mb-40 sm:mb-28' : 'mb-16'} md:mb-16`">
    <header :class="`fixed z-30 w-full bg-white shadow ${headerClass}`">
      <div class="container mx-auto flex flex-col flex-wrap items-center px-4 py-3 md:flex-row">
        <div class="flex gap-8">
          <button class="w-4 md:hidden" @click.prevent="toggleMenu()">
            <Icon name="fe:bar" class="text-xl" />
          </button>
          <nuxt-link
            to="/"
            class="group text-primary-400 hover:text-primary-500 flex items-center font-medium transition-colors"
            active-class="_"
            exact-active-class="_"
          >
            <svg
              class="bg-primary-400 stroke-primary-400 group-hover:bg-primary-500 group-hover:stroke-primary-500 h-10 w-10 rounded-full transition-colors"
            >
              <circle cx="50%" cy="50%" r="50%" stroke-width="40%" fill="white" />
              <line x1="-10%" y1="70%" x2="70%" y2="-10%" stroke-width="30%" />
            </svg>

            <span class="ml-3 text-2xl font-extrabold">Anoano</span>
          </nuxt-link>
        </div>
        <nav
          :class="`mt-5 flex h-20 flex-wrap items-center justify-center gap-y-4 text-base transition sm:h-auto md:mt-0 md:ml-auto ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block`"
        >
          <nuxt-link to="/guides" class="hover:text-primary-500 mr-5" @click="isMenuOpen && toggleMenu()">
            Les guides
          </nuxt-link>
          <nuxt-link to="/outils" class="hover:text-primary-500 mr-5" @click="isMenuOpen && toggleMenu()">
            Les outils
          </nuxt-link>
          <nuxt-link to="/extras" class="hover:text-primary-500 mr-5" @click="isMenuOpen && toggleMenu()">
            Les extras
          </nuxt-link>
          <nuxt-link
            to="/parcours"
            active-class="_"
            exact-active-class="_"
            class="border-accent-400 hover:bg-accent-400 inline-flex items-center gap-1 rounded border-2 px-3 py-1 text-base transition hover:text-white"
            @click="isMenuOpen && toggleMenu()"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Le parcours
          </nuxt-link>
        </nav>
      </div>
    </header>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
const headerClass = ref("");
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watchEffect(() => {
  headerClass.value = router.currentRoute.value.fullPath === "/" ? "bg-white/80 backdrop-blur-md" : "";
});
</script>
