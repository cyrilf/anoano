<template>
  <div class="bg-zinc-100" v-if="!isHome">
    <ol class="container mx-auto flex items-center py-6 px-4 sm:px-6 lg:px-8">
      <li
        v-for="(crumb, index) in crumbs"
        :key="crumb.path"
        :class="`${
          crumb.isCurrent ? 'text-3xl' : 'text-xl'
        } font-bold tracking-tight text-zinc-900`"
      >
        <nuxt-link :to="crumb.path" active-class="_" exact-active-class="_">
          <component :is="crumb.isCurrent ? 'h1' : 'span'">{{
            crumb.title
          }}</component>
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

const crumbs = computed(() => {
  const sections = route.fullPath.startsWith("/")
    ? route.fullPath.substring(1).split("/")
    : route.fullPath.split("/");

  const routes = router.getRoutes();
  let path = "";
  const results: Array<Crumb> = [];
  sections.forEach((section) => {
    path = `${path}/${section}`;
    const match = routes.find((route) => route.path === path);
    if (match) {
      results.push({
        title: (match.meta?.title as string) || section.replace(/-/g, " "),
        path: match.path,
        isCurrent: route.fullPath === match.path,
      });
    }
  });
  return results;
});
</script>
