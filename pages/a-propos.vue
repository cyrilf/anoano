<template>
  <div>
    <section>
      <div class="container mx-auto px-5">
        <div class="prose m-4 mx-auto p-4">
          <p>
            Ce site souhaite parler de contraception masculine. Principalement
            de la <b>contraception thermique</b> avec l'anneau.
          </p>
          <p>
            Le mieux pour commencer, est de suivre le parcours. C'est un contenu
            en cours de création sur les différentes étapes pour se
            contracepter.
          </p>
          <NuxtLink
            to="/parcours"
            class="my-4 inline-flex rounded border-0 bg-yellow-400 py-2 px-6 text-lg text-white no-underline hover:bg-yellow-500 focus:outline-none"
          >
            Le parcours
          </NuxtLink>
          <p>
            La vocation du site est de partager du
            <b>contenu clair et détailé</b> ainsi que des
            <b>outils pratiques</b>. Tout en <b>libre et open source</b> (code,
            textes, etc.). <icon name="🥳" />
          </p>
          <p>
            <b>Tout le monde est le.la bienvenue pour participer !</b> Et
            surtout toi, oui, toi ! <icon name="👋️" />
          </p>
          <p>
            C'est encore un peu le chantier, mais si tu veux me contacter, tu
            peux écrire à
            <a href="mailto:koeko+anoano@proton.me">koeko+anoano@proton.me</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "💁️ À propos",
});
</script>
