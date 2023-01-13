<template>
  <PageSkeleton>
    <template #image="{ imageClass }">
      <image-caption
        src="/sperm3d.jpg"
        alt="Spermatozoïdes en 3D"
        :width="575"
        :class="imageClass"
      >
        Image de
        <a
          href="https://www.freepik.com/free-photo/beautiful-fertility-concept-3d-rendering_21535846.htm"
          target="_blank"
          >Freepik</a
        >
      </image-caption>
    </template>
    <template #intro>
      <p>
        Le spermogramme est un examen médical qui sert à analyser les
        différentes caractéristiques du sperme. Il se base sur un
        <b>échantillon</b> prélevé dans un flacon après masturbation. Le
        résultat prend en compte des informations comme la
        <b>quantité de spermatozoïdes</b>, leur <b>mobilité</b> et leur
        <b>morphologie</b> pour évaluer la
        <b>fertilité et la qualité du sperme</b>.
      </p>
    </template>
    <div class="flex flex-wrap justify-around 2xl:justify-between">
      <Card title="Qui est concerné ?">
        Cet examen est le plus généralement fait dans le cardre d'un bilan
        d'infertilité pour un couple hétérosexuel.
        <p>
          <b>Toi</b>, si tu souhaites te contracepter. Le spermogramme est très
          intéressant car il va te permettre de quantifier ton taux de
          spermatozoïdes et ainsi suivre l'évolution de ta fertilité.
        </p>
        <p>
          N'importe quelle personne avec des testicules peut faire un
          spermogramme. Même si on ne souhaite pas se contracepter, ça reste un
          examen intéressant pour en apprendre plus sur son corps.
        </p>
      </Card>
      <Card title="Je le fais quand ?">
        Tout est bien décrit sur la page
        <NuxtLink to="/guides/ordonnance">ordonnance</NuxtLink>. Mais allez, je
        te fais un petit résumé ici. C'est cadeau 🎁.<br />Tu en fais :
        <ul class="mt-0">
          <li>
            <b>avant de commencer</b> la contraception pour t'assurer que tu es
            bien fertile et qu'il n'y a pas de contre-indications.
          </li>
          <li>
            au bout de <b>3 mois</b> puis à <b>3 mois et 3 semaines</b> pour
            garantir que la méthode est efficace pour toi et que tu es bien
            stérile.
          </li>
          <li>
            <b>régulièrement, tous les mois ou 3 mois</b>, pour t'assurer de
            l'efficacité dans le temps.
          </li>
          <li>
            si tu décide d'arrêter cette méthode contraceptive,
            <b>3 mois après l'arrêt</b>.
          </li>
        </ul>
      </Card>
      <Card title="Je le fais où ?">
        Dans un <b>laboratoire d'analyses médicales</b>.
        <p>
          Attention toutefois, tous les laboratoires ne proposent pas cette
          option. Le plus simple reste de leur passer un petit coup de fil.
        </p>
        <p>
          Voici une
          <NuxtLink
            href="http://umap.openstreetmap.fr/en/map/laboratoires-spermogrammes-andro-switch_329996#6"
            target="_blank"
            >carte des labos</NuxtLink
          >
          proposant des spermogrammes.
        </p>
        <p>
          Il faut aussi être au courant que tous les labos n'acceuillent pas
          dans les mêmes conditions. Certains te proposeront une salle dédiée,
          prévue à cet effet et confortable alors que pour d'autres ce sera dans
          les toilettes près de l'entrée..
        </p>
      </Card>
      <Card title="J'ai besoin de quoi ?">
        <b>Une ordonnance</b>. Ça tombe bien, il y a une
        <NuxtLink to="/guides/ordonnance">page dédiée</NuxtLink> qui t'explique
        ça.
        <p>
          <b>Un rendez-vous</b>, donc pense à le prendre en avance où à réserver
          ton prochain quand tu connais déjà la date.
        </p>
        <p>
          <b>Ta carte vitale et ta mutuelle</b>, pour ne pas avoir à avancer et
          être remboursé à 100%. Sinon le prix moyen est estimé à 30€.
        </p>
      </Card>
      <Card title="Quelles sont les conditions ?">
        <p>
          Tu dois respecter une <b>période d'abstinence sexuelle</b> comprise
          <b>entre 2 et 7 jours sans aucune éjaculation</b>. Cela permet d'avoir
          une densité et un volume de sperme suffisant.<br />
          Il est aussi recommandé de <b>bien t'hydrater</b> la veille.<br />
          Le mieux est de conserver la même durée d'abstinence (par exemple 3
          jours) pour tous tes spermogrammes afin de pouvoir les comparer sur
          une base similaire.
        </p>
        <p>
          Le sperme doit rester à une température constante et être analysé
          idéalement dans l'heure. C'est pour ça que le recueil est fait en
          laboratoire.
        </p>
      </Card>
      <Card title="Comment ça se passe ?">
        <p>
          Chaque laboratoire est différent mais généralement ça se passe comme
          ça :
        </p>
        <ol>
          <li>Tu <b>arrives</b> pour ton rendez-vous.</li>
          <li>
            Un membre du personnel va t'<b>acceuillir</b> et t'ammener dans une
            salle dédiée.
          </li>
          <li>
            Iel va prendre le temps de <b>t'expliquer le protocole</b>,
            <b>te poser quelques questions</b> (durée de l'abstinence, fièvre,
            fumeur, etc..) et <b>te remettre le flacon</b> qui va te servir pour
            le recueil.
          </li>
          <li>
            Tu passes aux toilettes <b>faire pipi</b> (afin d'éliminer les
            germes contenues dans l'urêtre).
          </li>
          <li>
            Tu reviens dans la salle et tu utilises une compresse stérile et du
            savon pour <b>nettoyer ton gland</b> et le méat urinaire.
          </li>
          <li>Tu te <b>masturbes</b>.</li>
          <li>Tu <b>éjacules</b> dans le flacon qu'on t'as fourni.</li>
          <li>
            Tu notes l'<b>heure du prélevement</b> et si oui ou non l'<b
              >ensemble de l'éjaculat a été receuilli</b
            >.
          </li>
          <li>Tu passes à l'acceuil pour <b>remettre ton flacon</b>.</li>
          <li><b>C'est fini</b> ✨</li>
        </ol>
        <p>
          Pense bien à dire ou à écrire qu'il s'agit d'un
          <b>spermogramme à but contraceptif</b>, ça pourra orienter et aider le
          personnel.
        </p>
        <p>
          Généralement tu <b>reçois tes résultats par mail en quelques jours</b>
          seulement. Demande quand même à l'acceuil pour t'assurer de ça.
        </p>
      </Card>
      <Card title="Comment je lis mes résultats ?">
        Tu peux <b>demander conseil à ta.ton médecin</b> ou la personne qui te
        suis. Sinon, tu peux aussi utiliser l'outil
        <NuxtLink href="/outils/decrypte-spermogramme"
          >Décrypte ton spermogramme</NuxtLink
        >
        disponible sur ce site.
      </Card>
    </div>
  </PageSkeleton>
</template>
<script setup lang="ts">
definePageMeta({
  title: "🧪 Le spermogramme",
  desc: "Ce guide te donne toutes les informations ce qu'est un spermogramme.",
});
</script>
