<template>
  <main>
    <div class="bg-zinc-50 px-4 py-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto px-4">
          Voici les différents outils disponibles en ce moment :
          <div class="flex flex-wrap justify-center gap-8">
            <tools-card
              title="AnoTaille"
              description="Avec cet outil tu vas savoir comment mesurer ton pénis et
                    trouver la bonne taille pour ton anneau."
              icon="📏"
              link="/outils/ano-taille"
              class="z-20"
            />
            <tools-card
              title="L'ordonnance"
              description="Tu as besoin d'une ordonnance pour effectuer tes
              spermogrammes. Voilà un modèle à discuter avec ton médecin
              ou le personnel médical qui te suis."
              icon="📜️"
              link="/outils/ordonnance"
              class="z-10"
            />
            <tools-card
              title="Décrypte ton spermogramme"
              description="Avec cet outil tu vas pouvoir lire et comprendre ton
                  spermogramme."
              icon="🧪️"
              inProgress
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  title: "🪛️ Les outils",
});
</script>
