<template>
  <main>
    <div class="bg-zinc-50 px-4 py-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto px-4">
          Voici les différents outils disponibles en ce moment :
          <div class="flex flex-wrap justify-center gap-8">
            <item-card
              title="AnoTaille"
              description="Avec cet outil tu vas savoir comment mesurer ton pénis et
                    trouver la bonne taille pour ton anneau."
              icon="noto-straight-ruler"
              link="/outils/ano-taille"
            />
            <item-card
              title="Décrypte ton spermogramme"
              description="Avec cet outil tu vas pouvoir lire et comprendre ton
                  spermogramme."
              icon="noto-test-tube"
              link="/outils/decrypte-spermogramme"
            />
          </div>
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
