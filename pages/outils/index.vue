<template>
  <main>
    <div class="bg-zinc-50 px-4 py-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto px-4">
          <ContentDoc class="mx-auto w-fit" :head="false" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Les outils",
  icon: "noto-screwdriver",
  desc: "Une collection de différents outils pour t'accompagner dans ta contraception masculine.",
});
</script>
