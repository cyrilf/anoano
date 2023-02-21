<template>
  <div class="mb-20">
    <header
      :class="`header fixed z-30 w-full bg-white shadow ${headerClass} ${
        showHeader ? '' : 'header--hidden'
      }`"
    >
      <div
        class="container mx-auto flex flex-col flex-wrap items-center px-4 py-6 md:flex-row"
      >
        <nuxt-link
          to="/"
          class="flex items-center font-medium hover:text-primary-400"
        >
          <svg class="h-10 w-10 rounded-full bg-primary-400 stroke-primary-400">
            <circle cx="50%" cy="50%" r="50%" stroke-width="40%" fill="white" />
            <line x1="-10%" y1="70%" x2="70%" y2="-10%" stroke-width="30%" />
          </svg>

          <span class="ml-3 text-xl">Anoano</span>
        </nuxt-link>
        <nav
          class="mt-5 flex flex-wrap items-center justify-center gap-y-4 text-base md:ml-auto md:mt-0"
        >
          <nuxt-link to="/guides" class="mr-5 hover:text-primary-500">
            Les guides
          </nuxt-link>
          <nuxt-link to="/outils" class="mr-5 hover:text-primary-500">
            Les outils
          </nuxt-link>
          <nuxt-link to="/extras" class="mr-5 hover:text-primary-500">
            Les extras
          </nuxt-link>
          <nuxt-link
            to="/parcours"
            active-class="_"
            exact-active-class="_"
            class="inline-flex items-center rounded border-0 bg-primary-400 py-1 px-3 text-base hover:bg-primary-500"
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
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
const headerClass = ref("");

const showHeader = ref(true);
let lastScrollPosition = 0;

const onScroll = () => {
  // Get the current scroll position
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
  if (currentScrollPosition < 0) {
    return;
  }
  // Stop executing this function if the difference between
  // current scroll position and last scroll position is less than some offset
  if (Math.abs(currentScrollPosition - lastScrollPosition) < 40) {
    return;
  }
  showHeader.value = currentScrollPosition < lastScrollPosition;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => window.addEventListener("scroll", onScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));

watchEffect(() => {
  headerClass.value =
    router.currentRoute.value.fullPath === "/"
      ? "bg-white/80 backdrop-blur-md"
      : "";
});
</script>
<style scoped>
.header {
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.header--hidden {
  transform: translate3d(0, -100%, 0);
}
</style>
