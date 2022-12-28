<template>
  <div class="bg-zinc-100 xl:sticky xl:top-[5.5rem] xl:z-30" v-if="!isHome">
    <ol
      class="container mx-auto flex flex-wrap items-center justify-center gap-4 px-4 py-6 md:justify-start"
    >
      <li
        v-for="(crumb, index) in crumbs"
        :key="crumb.path"
        :class="`${
          crumb.isCurrent ? 'text-3xl' : 'text-xl'
        } font-bold tracking-tight text-zinc-900`"
      >
        <h1 v-if="crumb.isCurrent">{{ crumb.title }}</h1>
        <nuxt-link
          v-if="!crumb.isCurrent"
          :to="crumb.path"
          active-class="_"
          exact-active-class="_"
        >
          <span>{{ crumb.title }}</span>
        </nuxt-link>
        <icon
          name="fe:arrow-right"
          v-if="index !== crumbs.length - 1"
          class="mx-2 text-zinc-400"
        />
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
type Crumb = {
  title: string;
  path: string;
  isCurrent: boolean;
};

const router = useRouter();
const route = useRoute();

const isHome = computed(() => route.fullPath === "/");

const removeHash = (section: string) => section.split("#")[0];

const crumbs = computed(() => {
  const sections = route.fullPath.startsWith("/")
    ? route.fullPath.substring(1).split("/")
    : route.fullPath.split("/");

  const routes = router.getRoutes();
  let path = "";
  const results: Array<Crumb> = [];
  sections.forEach((section) => {
    const pureSection = removeHash(section);
    path = `${path}/${pureSection}`;
    const match = routes.find((route) => route.path === path);
    if (match) {
      results.push({
        title: (match.meta?.title as string) || pureSection.replace(/-/g, " "),
        path: match.path,
        isCurrent: removeHash(route.fullPath) === match.path,
      });
    }
  });
  return results;
});
</script>
