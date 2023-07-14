<template>
  <div
    class="flex min-h-screen flex-col selection:bg-accent-500 selection:text-zinc-50"
  >
    <MainHeader />
    <Breadcrumb />
    <div class="flex-grow"><slot /></div>
    <MainFooter />
  </div>
</template>
<script setup lang="ts">
const route = useRoute();

watchEffect(() => {
  const title = (route.meta.title as string) || "Anoano";
  if (!route.meta.desc) {
    console.warn(
      `${route.meta.title || route.fullPath} has no meta description defined`
    );
  }
  useSeoMeta({
    title,
    description: route.meta.desc,
    ogTitle: title,
    ogDescription: route.meta.desc,
    twitterTitle: title,
    twitterDescription: route.meta.desc,
    twitterCard: "summary",
  });
});
</script>
