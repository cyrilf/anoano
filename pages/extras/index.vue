<template>
  <div class="prose mx-auto px-4">
    <ContentRenderer v-if="page" :value="page" class="mx-auto w-fit" />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Extras",
  icon: "noto-detective",
  desc: "Des pages additionnelles pour trouver plus d'informations sur la contraception masculine.",
});
const route = useRoute();
const { data: page } = await useAsyncData(() => queryCollection("content").path(route.path).first());
</script>
