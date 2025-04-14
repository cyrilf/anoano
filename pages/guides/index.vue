<template>
  <main>
    <div class="bg-zinc-50 px-4 py-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto px-4">
          <ContentRenderer v-if="page" :value="page" class="mx-auto w-fit" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Les guides",
  icon: "noto-books",
  desc: "Une collection de guides remplis d'informations utiles pour t'accompagner dans ta contraception.",
});
const route = useRoute();
const { data: page } = await useAsyncData(() => queryCollection("content").path(route.path).first());
</script>
