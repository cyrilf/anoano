<template>
  <main>
    <Card class="mx-auto">
      <div class="prose px-4">
        Des pages additionnelles pour trouver plus d'informations sur la
        contraception <ContentMasculine />.
        <ul class="mt-8">
          <li v-for="extra in extras" :key="extra.href">
            <nuxt-link :href="extra.href"
              ><icon :name="extra.icon" /> {{ extra.name }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </Card>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Extras",
  icon: "noto-detective",
  desc: "Des pages additionnelles pour trouver plus d'informations sur la contraception masculine.",
});

const extras = ref([
  { name: "À propos", icon: "noto-person-tipping-hand", href: "/a-propos" },
  {
    name: "Glossaire",
    icon: "noto-notebook-with-decorative-cover",
    href: "/glossaire",
  },
  {
    name: "Des ressources pour explorer",
    icon: "noto-magnifying-glass-tilted-right",
    href: "/explorer",
  },
]);
</script>
