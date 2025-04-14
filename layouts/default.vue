<template>
  <div class="selection:bg-accent-500 flex min-h-screen flex-col selection:text-zinc-50">
    <MainHeader />
    <Breadcrumb />
    <div class="flex-grow"><slot></slot></div>
    <MainFooter />
  </div>
</template>
<script setup lang="ts">
const route = useRoute();

watchEffect(() => {
  const title = (route.meta.title as string) || "Anoano";
  if (!route.meta.desc) {
    console.warn(`${route.meta.title || route.fullPath} has no meta description defined`);
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
