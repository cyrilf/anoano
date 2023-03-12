<template>
  <main>
    <div class="bg-zinc-50 px-4 py-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto px-4">
          Voici les différents guides disponibles en ce moment :
          <div class="flex flex-wrap justify-center gap-8">
            <item-card
              title="La contraception thermique"
              description="Tout connaître sur la contraception thermique."
              icon="noto-thermometer"
              link="/guides/contraception-thermique"
            />
            <item-card
              title="L'ordonnance"
              description="C'est un guide sur l'ordonnance à demander ainsi que l'explication détaillée des différents spermogrammes nécessaires."
              icon="noto-scroll"
              link="/guides/ordonnance"
            />
            <item-card
              title="Le spermogramme"
              description="Avec ce guide tu vas tout savoir sur le spermogramme."
              icon="noto-test-tube"
              link="/guides/spermogramme"
            />
          </div>
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
</script>
