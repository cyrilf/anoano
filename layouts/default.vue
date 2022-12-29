<template>
  <div
    class="flex min-h-screen flex-col selection:bg-accent-500 selection:text-zinc-50"
  >
    <Title>{{ title || "Anoano" }}</Title>
    <MainHeader />
    <Breadcrumb />
    <div class="flex-grow"><slot /></div>
    <MainFooter />
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const title = ref("");
watchEffect(() => {
  title.value = route.meta.title as string;
});
</script>
