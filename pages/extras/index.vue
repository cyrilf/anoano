<template>
  <main>
    <div class="bg-zinc-50 px-4 py-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container prose mx-auto px-4">
          Des pages additionnelles pour trouver plus d'informations sur la
          contraception <ContentMasculine />.
          <ul class="mt-8">
            <li v-for="other in others" :key="other.href">
              <nuxt-link :href="other.href">{{ other.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  title: "🕵️ Extras",
  desc: "Des pages additionnelles pour trouver plus d'informations sur la contraception masculine.",
});

const others = ref([
  { name: "💁️ À propos", href: "/a-propos" },
  { name: "📔 Glossaire", href: "/glossaire" },
  { name: "🔎 Des ressources pour explorer", href: "/explorer" },
]);
</script>
