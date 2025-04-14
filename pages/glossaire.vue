<template>
  <div>
    <ContentRenderer v-if="page" :value="page" class="mx-auto w-fit" />
    xxx
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Glossaire",
  icon: "noto-notebook-with-decorative-cover",
  desc: "Retrouve la définition de tous les mots spécifiques à la contraception thermique.",
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => queryCollection("content").path(route.path).first());
</script>
