<template>
  <div>
    <section>
      <div class="container mx-auto px-5">
        <Card title="">
          <div class="prose m-4 mx-auto p-4">
            <div>
              Ce site souhaite parler de contraception masculine.
              <div>
                Principalement de la <b>contraception thermique</b> avec
                l'anneau.
              </div>
            </div>
            <p>
              Le mieux pour commencer est de suivre le parcours. C'est un
              contenu en cours de création sur les différentes étapes pour se
              contracepter.
            </p>
            <NuxtLink
              to="/parcours"
              class="my-4 inline-flex rounded border-0 bg-primary-400 py-2 px-6 text-lg text-white no-underline hover:bg-primary-500 focus:outline-none"
            >
              Le parcours
            </NuxtLink>
            <hr />
            <p>
              La vocation du site est de partager du
              <b>contenu clair et détailé</b> ainsi que des
              <b>outils pratiques</b>. Tout en <b>libre</b>, tout en
              <b>open source</b> (<i>code, textes, etc.</i>). 🥳
            </p>
            <p>
              <b>Tout le monde est le.la bienvenue pour participer !</b> Et
              surtout toi, oui, toi !
            </p>
            <p>
              C'est encore un peu le chantier, mais si tu veux me contacter, tu
              peux écrire à
              <a href="mailto:anoano@luseeds.com">anoano@luseeds.com</a>
            </p>
            <hr />
            <div>
              🙏 Un grand <b>GRAND</b> merci :
              <ul>
                <li>
                  à Sam d'<a
                    href="https://samflam.notion.site/samflam/Otoko-Contraception-autonome-93fd30b3034d465096fc939959ce01d8"
                    >Otoko</a
                  >
                  pour l'inspiration de ce site, ses valeurs et ses ateliers.
                </li>
                <li>
                  à Maxime de <a href="https://thoreme.com">Thoreme</a> pour
                  avoir lancé quelque chose de grand avec l'Andro-switch.
                </li>
                <li>aux pionier.re.s de la contraception masculine.</li>
                <li>à toi ! 👏</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "💁️ À propos",
});
</script>
