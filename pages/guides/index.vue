<template>
  <main>
    <div class="bg-zinc-50 px-4 py-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto px-4">
          Voici les différents guides disponibles en ce moment :
          <div class="flex flex-wrap justify-center gap-8">
            <item-card
              title="L'ordonnance"
              description="C'est un guide sur l'ordonnance à demander ainsi que l'explication détaillée des différents spermogrammes nécessaires."
              icon="📜️"
              link="/guides/ordonnance"
              class="z-10"
            />
            <item-card
              title="La contraception thermique"
              description="Tout connaître sur la contraception thermique."
              icon="🌡️"
              inProgress="Rédaction en cours"
            />
            <item-card
              title="Le spermogramme"
              description="Avec ce tu vas tout savoir sur faire un spermogramme."
              icon="🧪️"
              inProgress="Rédaction en cours"
            />
            <item-card
              title="Les études cliniques"
              description="Un guide sur les sources, l'efficacité et l'historique des publications scientifiques sur la contraception thermique."
              icon="🧑‍⚕️"
              inProgress="Rédaction en cours"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  title: "📚 Les guides",
});
</script>
