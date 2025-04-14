<template>
  <div>
    <ContentRenderer v-if="page" :value="page" class="mx-auto w-fit" />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "À propos",
  icon: "noto-person-tipping-hand",
  desc: "Ce site a été crée dans le but de partager des informations riches et variées sur la contraception masculine.",
});
const route = useRoute();
const { data: page } = await useAsyncData(() => queryCollection("content").path(route.path).first());
</script>
