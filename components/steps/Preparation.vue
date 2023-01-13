<template>
  <div class="mx-auto mt-8 w-fit">
    <Card
      title="a. Je me renseigne"
      link="/parcours#etape-1-renseigne"
      id="etape-1-renseigne"
      sticky
    >
      <p>
        Pour bien commencer, il va <b>falloir t'informer</b>.<br />
        Ça tombe bien, tu es au bon endroit pour ça ! 👏
      </p>
      <p>
        Dans les grandes lignes, tu vas utiliser la chaleur de ton corps pour
        stopper le processus de création des spermatozoïdes. Et oui, en
        <b>remontant tes testicules</b> (elles se trouvent dans tes bourses)
        vers ton corps, elles passent de 35° à 37°. Et là, magie 🪄, la
        <b>spermatogènése s'arrête</b>.
      </p>
      <p>
        Pour aider cette remontée, il existe diverses solutions. Celle mise en
        avant par ce site c'est <b>un anneau en silicone</b>. Maintenu à la base
        de ton pénis, il doit être
        <b>porté tous les jours pendant au moins 15 heures</b>.
      </p>
      <p>
        C'est un peu contraignant au début, mais très vite on ne le sent plus.
        Un peu comme un bracelet au poignet ou une paire de lunettes.
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
          La contraception thermique permet de devenir stérile (et c'est
          réversible), mais
          <b
            >ne protège pas des
            <Tooltip trigger="MST"
              >Maladies Sexuellement Transmissible</Tooltip
            ></b
          >. Pour cela, il faut recourir à d'autres méthodes (préservatifs par
          exemple).
        </p>
      </Alert>
    </Card>
    <Card
      title="b. Je me fais accompagner"
      sticky
      link="/parcours#etape-1-accompagner"
      id="etape-1-accompagner"
    >
      <p>
        La contraception est un sujet sérieux. Il est donc important pour toi de
        <b>te faire accompagner</b> dans cette démarche. Pour cela, il te faudra
        trouver un.e médecin ou un.e professionel.le de santé (urologue,
        andrologue) prêt.e à te suivre.
      </p>
      <p>
        C'est <b>cette personne qui te préscrira </b>
        <NuxtLink to="/guides/ordonnance">une ordonnance</NuxtLink>.
      </p>
      <p>
        Bon, on ne va pas se mentir, aujourd'hui encore trop peu de médecins
        connaissent réellement cette méthode. Alors si tu tombes sur
        <b>quelqu'un.e de réticent</b>, ou qui prône la dangerosité voire la
        non-existance de la contraception thermique, libre à toi d'argumenter ou
        d'aller <b>trouver quelqu'un.e d'autre</b>. Dans tous les cas, tu
        finiras par trouver quelqu'un.e de curieux.se. D'autant plus si tu sais
        de quoi tu parles et de pourquoi tu veux le faire.
      </p>
      <div>
        Il y a
        <Toggle
          text="quelques contre-indications à garder en tête."
          class="inline-block underline decoration-dashed underline-offset-4 hover:text-zinc-500 hover:decoration-zinc-500"
          right
        >
          <ul>
            <li>
              un antécédent de testicules mal descendus dans l'enfance
              (cryptorchidie ou ectopie)
            </li>
            <li>une torsion du cordon spermatique</li>
            <li>une hernie inguinale (soignée ou pas)</li>
            <li>un cancer du testicule</li>
            <li>un varicocèle de grade 3</li>
          </ul>
        </Toggle>
        <div>N'hésite pas à lui <b>demander son avis</b>.</div>
      </div>
    </Card>
    <Card
      title="c. Je fais mon premier spermogramme"
      sticky
      link="/parcours#etape-1-spermogramme"
      id="etape-1-spermogramme"
    >
      <p>Il permet de <b>contrôler si tu es fertile</b> ou non.</p>
      <Alert title="⚠️ Attention" type="accent">
        Il se peut que tu sois déjà stérile. Il faut te préparer à cette
        éventualité là pscychologiquement. Sois sûr d'être prêt et soutenu.
      </Alert>
      <div>
        Ce sera aussi ton <b>spermogramme de référence</b> pour suivre
        l'évolution de ta contraception. Pour faire un spermogramme, il te
        suffit de
        <b
          >prendre un rendez-vous dans un laboratoire, muni de ton
          ordonnance.</b
        >
        <div>
          Plus d'info sur la page
          <NuxtLink to="/guides/ordonnance">📜️ Ordonnances</NuxtLink>.
        </div>
      </div>
      <div class="mt-4">
        Si le résultat de ton premier spermogramme a :
        <ul>
          <li>
            une concentration en <b>spermatozoïdes supérieure à 15M/mL</b>
          </li>
          <li>une mobilité <b>supérieure à 32%</b></li>
        </ul>
        alors c'est bon, <b>tu es fertile, tu peux continuer</b>.<br />
        Par contre, si les valeurs <b>n'atteignent pas ces paliers</b> (définis
        par l'OMS), la <b>contraception thermique est déconseillée</b>, il te
        faudra demander l'avis d'un.e professionnel.le de santé.
      </div>
    </Card>
    <Card
      title="d. Je choisis mon outil de contraception"
      sticky
      link="/parcours#etape-1-outil"
      id="etape-1-outil"
    >
      <p>
        Ça y est, le moment de s'équiper est arrivé. Il y a
        <b>plusieurs dispositif de contraception thermiques</b> disponibles
        (anneau, jockstrap, slip chauffant) mais ici on va parler principalement
        de l'<b>anneau</b>.
      </p>
      <div>
        Pour <b>trouver le tien</b>, un outil est disponible sur cette page :
        <NuxtLink to="/outils/ano-taille">📏 AnoTaille</NuxtLink>.
        <div>
          Tu prends tes mesures, tu les rentres dans l'outil et voilà, il
          t'indique l'anneau qu'il te faut. 😃
        </div>
      </div>
    </Card>
  </div>
</template>
