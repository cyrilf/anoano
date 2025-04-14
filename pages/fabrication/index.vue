<template>
  <main class="grid grid-cols-1 xl:grid-cols-3">
    <StepsMenu class="self-start" />
    <div class="col-span-2 px-4 pt-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="prose container mx-auto">
          <p>Cette page regroupe les différentes étapes qui te permettront de fabriquer ton anneau.</p>
        </div>
      </div>
      <div class="py-6 sm:px-6 lg:px-8">
        <!--
          Matériel
          Nombre d'anneaux / quantité
          Étapes
            - Préparation de la table
            - Pésée : (Silicone A, puis huile, puis silicone B)
            - Verser dans les verres
            - Ajouter les couleurs/pailettes + mélanger doucement
            - Verser dans les seringues (boucher le trou)
            - Remplir un anneau par un trou, passer au suivant
            - Laisser sécher pendant ~30min à 2h
            - Démouler
            - Ranger / laver / rincer

        -->
        <div class="container mx-auto">
          <StepsStep index="1" icon="noto-alembic" name="Le matériel">
            <Card
              id="materiel-necessaire"
              title="a. Ce qui est nécessaire"
              link="/fabrication#materiel-necessaire"
              sticky
            >
              <p>
                Pour bien commencer, il va <b>falloir t'informer</b>.<br />
                Ça tombe bien, tu es au bon endroit pour ça !
                <Icon name="noto-waving-hand" />
              </p>
              <p>
                Dans les grandes lignes, tu vas utiliser la chaleur de ton corps pour stopper le processus de création
                des spermatozoïdes. Et oui, en
                <b>remontant tes testicules</b> (elles se trouvent dans tes bourses) vers ton corps, elles passent de
                35° à 37°. Et là, magie 🪄, la <b>spermatogènése s'arrête</b>.
              </p>
              <p>
                Pour aider cette remontée, il existe diverses solutions. Celle mise en avant par ce site c'est
                <b>un anneau en silicone</b>. Maintenu à la base de ton pénis, il doit être
                <b>porté tous les jours pendant au moins 15 heures</b>.
              </p>
              <p>
                C'est un peu contraignant au début, mais très vite on ne le sent plus. Un peu comme un bracelet au
                poignet ou une paire de lunettes.
              </p>
              <p>
                Pour aller plus loin, le mieux c'est d'ouvrir ce lien<Tooltip
                  >En cours d'écriture, le lien sera bientôt disponible</Tooltip
                >
                et d'en apprendre plus sur
                <b>la contraception thermique et son fonctionnement</b>.
              </p>
              <Alert title="Rappel" type="info">
                <p>
                  La contraception thermique permet de devenir stérile (et c'est réversible), mais
                  <b>ne protège pas des <Tooltip trigger="MST">Maladies Sexuellement Transmissible</Tooltip></b
                  >. Pour cela, il faut recourir à d'autres méthodes (préservatifs par exemple).
                </p>
              </Alert>
            </Card>
            <Card id="accompagner" title="b. Je me fais accompagner" sticky link="/parcours#accompagner">
              <p>
                La contraception est un sujet sérieux. Il est donc important pour toi de
                <b>te faire accompagner</b> dans cette démarche. Pour cela, il te faudra trouver un.e médecin ou un.e
                professionel.le de santé (urologue, andrologue) prêt.e à te suivre.
              </p>
              <p>
                C'est <b>cette personne qui te préscrira </b>
                <NuxtLink to="/guides/ordonnance">une ordonnance</NuxtLink>.
              </p>
              <p>
                Bon, on ne va pas se mentir, aujourd'hui encore trop peu de médecins connaissent réellement cette
                méthode. Alors si tu tombes sur
                <b>quelqu'un.e de réticent</b>, ou qui prône la dangerosité voire la non-existance de la contraception
                thermique, libre à toi d'argumenter ou d'aller <b>trouver quelqu'un.e d'autre</b>. Dans tous les cas, tu
                finiras par trouver quelqu'un.e de curieux.se. D'autant plus si tu sais de quoi tu parles et de pourquoi
                tu veux le faire.
              </p>
              <div>
                Il y a
                <Toggle
                  text="quelques contre-indications à garder en tête."
                  class="inline-block underline decoration-dashed underline-offset-4 hover:text-zinc-500 hover:decoration-zinc-500"
                  right
                >
                  <ul>
                    <li>un antécédent de testicules mal descendus dans l'enfance (cryptorchidie ou ectopie)</li>
                    <li>une torsion du cordon spermatique</li>
                    <li>une hernie inguinale (soignée ou pas)</li>
                    <li>un cancer du testicule</li>
                    <li>un varicocèle de grade 3</li>
                  </ul>
                </Toggle>
                <div>N'hésite pas à lui <b>demander son avis</b>.</div>
              </div>
            </Card>
            <Card id="spermogramme" title="c. Je fais mon premier spermogramme" sticky link="/parcours#spermogramme">
              <p>Il permet de <b>contrôler si tu es fertile</b> ou non.</p>
              <Alert title="⚠️ Attention" type="accent">
                Il se peut que tu sois déjà stérile. Il faut te préparer à cette éventualité là pscychologiquement. Sois
                sûr d'être prêt et soutenu.
              </Alert>
              <div>
                Ce sera aussi ton <b>spermogramme de référence</b> pour suivre l'évolution de ta contraception. Pour
                faire un spermogramme, il te suffit de
                <b>prendre un rendez-vous dans un laboratoire, muni de ton ordonnance.</b>
                <div>
                  Plus d'info sur la page
                  <NuxtLink to="/guides/ordonnance"><Icon name="noto-scroll" /> Ordonnances</NuxtLink>.
                </div>
              </div>
              <div class="mt-4">
                Si le résultat de ton premier spermogramme a :
                <ul>
                  <li>
                    une concentration en
                    <b>spermatozoïdes supérieure à 15M/mL</b>
                  </li>
                  <li>une mobilité <b>supérieure à 32%</b></li>
                </ul>
                alors c'est bon, <b>tu es fertile, tu peux continuer</b>.<br />
                Par contre, si les valeurs
                <b>n'atteignent pas ces paliers</b> (définis par l'OMS), la
                <b>contraception thermique est déconseillée</b>, il te faudra demander l'avis d'un.e professionnel.le de
                santé.
              </div>
            </Card>
            <Card id="outil" title="d. Je choisis mon outil de contraception" sticky link="/parcours#outil">
              <p>
                Ça y est, le moment de s'équiper est arrivé. Il y a
                <b>plusieurs dispositif de contraception thermiques</b>
                disponibles (anneau, jockstrap, slip chauffant) mais ici on va parler principalement de l'<b>anneau</b>.
              </p>
              <div>
                Pour <b>trouver le tien</b>, un outil est disponible sur cette page :
                <NuxtLink to="/outils/ano-taille"><Icon name="noto-straight-ruler" /> AnoTaille</NuxtLink>.
                <div>
                  Tu prends tes mesures, tu les rentres dans l'outil et voilà, il t'indique l'anneau qu'il te faut.
                  <Icon name="noto-grinning-face" />
                </div>
              </div>
            </Card>
          </StepsStep>
        </div>
      </div>
      <hr class="mx-auto w-3/4 max-w-3xl border-2 border-dashed" />
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <StepsDebut />
        </div>
      </div>
      <hr class="mx-auto w-3/4 max-w-3xl border-2 border-dashed" />
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <StepsSuivi />
        </div>
      </div>
      <hr class="mx-auto w-3/4 max-w-3xl border-2 border-dashed" />
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto">
          <StepsArret />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  title: "📋 Le parcours",
  desc: "Tu découvres en 4 grandes étapes le parcours complet d'une personne qui souhaite se contracepter.",
});
</script>
