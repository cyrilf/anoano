<template>
  <div class="sticky top-24 ml-auto hidden w-fit max-w-sm xl:block">
    <Card no-min-width>
      <div v-for="(step, index) in menu.steps" :key="step.link" class="mt-4 first:mt-0">
        <h2 class="m-0 mb-2 text-xl font-bold">
          <nuxt-link
            :to="`/parcours#${step.link}`"
            class="text-primary-400 no-underline hover:underline"
            active-class="_"
            exact-active-class="_"
          >
            <Icon :name="step.icon" /> Étape {{ index + 1 }} :
            <span class="text-zinc-400">{{ step.name }}</span>
          </nuxt-link>
        </h2>
        <nuxt-link
          v-for="sub in step.subs"
          :key="sub.link"
          :to="`/parcours#${sub.link}`"
          class="block font-normal text-zinc-400 no-underline hover:underline"
          active-class="_"
          exact-active-class="_"
        >
          {{ sub.name }}
        </nuxt-link>
      </div>
    </Card>
  </div>
</template>
<script setup lang="ts">
const menu = ref({
  steps: [
    {
      name: "Je me prépare",
      icon: "noto-books",
      link: "etape-1",
      subs: [
        { name: "a. Je me renseigne", link: "renseigne" },
        { name: "b. Je me fais accompagner", link: "accompagner" },
        { name: "c. Je fais mon premier spermogramme", link: "spermogramme" },
        { name: "d. Je choisis mon outil de contraception", link: "outil" },
      ],
    },
    {
      name: " Je débute",
      icon: "noto-ok-hand",
      link: "etape-2",
      subs: [
        { name: "a. J'apprends à mettre l'anneau", link: "anneau" },
        { name: "b. Je porte un anneau adapté", link: "adapte" },
        { name: "c. Je porte l'anneau 15h / jour", link: "15heures" },
        { name: "d. Je me responsabilise", link: "responsabilise" },
      ],
    },
    {
      name: "Je fais mon suivi",
      icon: "noto-magnifying-glass-tilted-right",
      link: "etape-3",
      subs: [
        {
          name: "a. Spermogramme de contrôle à 3 mois",
          link: "spermogramme-controle",
        },
        {
          name: "b. Spermogramme de validation à 3 mois et 3 semaines.",
          link: "spermogramme-validation",
        },
        { name: "c. Spermogrammes réguliers", link: "spermogramme-regulier" },
      ],
    },
    {
      name: " Je décide d'arrêter",
      icon: "noto-stopwatch",
      link: "etape-4",
      subs: [{ name: "a. J'enlève l'anneau", link: "enleve" }],
    },
  ],
});
</script>
