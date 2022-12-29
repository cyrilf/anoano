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
  if (!route.meta.desc) {
    console.warn(
      `${route.meta.title || route.fullPath} has no meta description defined`
    );
  }
  useHead({
    title: (route.meta.title as string) || "Anoano",
    meta: [{ name: "description", content: route.meta.desc as string }],
  });
});
</script>
