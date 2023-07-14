<template>
  <ToolsAnoTaille :image="image" />
</template>
<script setup lang="ts">
definePageMeta({
  title: "AnoTaille",
  icon: "noto-straight-ruler",
  desc: "C'est un outil qui te permet de trouver facilement un anneau adapté à ta taille.",
});
const image = ref(
  "https://images.unsplash.com/photo-1611077544637-f826625c2776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=530&crop=top,right&q=80"
);
useSeoMeta({
  ogImage: image,
  twitterImage: image,
});
</script>
