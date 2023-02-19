<template>
  <main>
    <div class="bg-zinc-50 px-4 py-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container prose mx-auto px-4">
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
      </div>
    </div>
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
