<template>
  <PageSkeleton>
    <template #image="{ imageClass }">
      <image-caption
        :src="image"
        alt="Thermomètre"
        :width="575"
        :class="imageClass"
      >
        Photo de
        <a href="https://unsplash.com/@matteofusco">Matteo Fusco</a>
        sur <a href="https://unsplash.com/photos/4zvnt60-pak">Unsplash</a>
      </image-caption>
    </template>
    <template #intro>
      <div>
        <p>
          La contraception thermique est une méthode de contraception naturelle
          qui utilise la chaleur produite par ton propre corps pour stopper la
          <Tooltip trigger="création des spermatozoïdes"
            >la spermatogenèse</Tooltip
          >.
        </p>
        <p>
          C'est efficace en quelques mois seulement, entièrement reversible et
          sans hormones.
        </p>
      </div>
    </template>
    <div>
      <div class="flex flex-wrap justify-around 2xl:justify-between">
        <Card
          title="La chaleur"
          icon="noto-fire"
          link="/guides/spermogramme#chaleur"
          id="chaleur"
        >
          Notre corps est à une température moyenne de 37.5°.
          <p>
            Pour que la production des spermatozoïdes se déroule dans de bonnes
            conditions, l'idéal c'est d'être à 35°. C'est pour celà que
            naturellement les testicules sont en position basse, dans le
            scrotum. Elles s'éloignent de la chaleur corporelle. En effet, à
            partir de 37°, la spermatogenèse réduit puis s'arrête.
          </p>
          <p>
            Il nous suffit de prendre avantage de ce méchanisme assez simple. En
            forçant les testicules à remonter au plus proche de notre corps,
            alors nous forçons par la même occasion l'arrêt de la
            spermatogenèse.
          </p>
          <p>
            Il faut quand même respecter cette exposition à la chaleur (37°)
            pendant 15 heures par jours, tous les jours. Au bout de 3 mois il
            devient possible d'atteindre le seuil contraceptif défini par l'OMS
            à savoir mois d'1 million de spermatozoïdes par millilitre de
            sperme. Pour vérifier ses chiffres il faudra faire
            <nuxt-link href="guides/ordonnance">une ordonnance</nuxt-link> et
            effectuer
            <nuxt-link href="guides/spermogramme">un spermogramme</nuxt-link>.
            L'analyse des résultats te permettra d'ajuster la durée du port à
            comment fonctionne ton corps.
          </p>
          <p>
            Chaque personne étant unique, 15 heures reste une valeur de
            référence. Seuls les spermogrammes peuvent attester de l'efficacité,
            ou non, de la méthode sur toi.
          </p>
          <p>Au bout de 3 mois, tu peux donc être contracepté.e.</p>
          <p>
            Et si jamais un jour tu décides de redevenir fertile, c'est tout à
            fait possible. Le processus est entièrement réversible.
          </p>
          <p>
            Dès que les testicules sont exposées à une chaleur normale (35°), la
            production de spermatozoïdes reprends. Il faudra quand même attendre
            3 mois pour que les nouveaux spermatozoïdes soient bien matûres. Et
            dans le cas d'un projet d'avoir un enfant alors il est recommandé
            d'attendre 6 mois après le port de l'anneau ou du slip (ce qui
            équivaut à 2 cycles de spermatogenèse) pour être sûr que tout va
            bien. Encore une fois, c'est le spermogramme qui attestera de ça.
          </p>
        </Card>
        <Card
          title="La technique"
          icon="noto-wrench"
          link="/guides/spermogramme#technique"
          id="technique"
        >
          L'idée est donc de remonter les testicules.
          <p>
            Ça tombe bien c'est leur position initiale à la naissance et pendant
            les premières semaines
            <span class="hand text-xl"
              >(ou lorsqu'il fait très très froid).</span
            >
            Cet endroit s'apelle la <b>poche inguinale</b>, elle est située à la
            base de la verge. Pour maintenir les testicules dans cette position
            haute, on peut donc utiliser un anneau (en silicone ou en tissu dans
            les jockstraps).
          </p>
          <p>
            Pour apprendre à le mettre tu peux te réferrer à la section
            <nuxt-link href="/parcours#anneau"
              >"J'apprends à mettre l'anneau"</nuxt-link
            >
            dans le parcours.
          </p>
          <p>
            Une fois que l'anneau est bien en place, tu peux palper légerement
            la zone du pubis et tu pourras t'apercevoir que tes testicules sont
            bien là, dans ton corps. Tu peux même réaliser ça sans anneau, juste
            pour sentir la sensation. Attention, ça peut faire un petit peu mal
            au début, les canaux déferrent ne sont pas habitués à être en
            tension. Donc va si doucement et écoute ton corps.
          </p>
        </Card>
        <Card
          title="C'est fiable ?"
          icon="noto-check-mark-button"
          link="/guides/spermogramme#fiable"
          id="fiable"
        >
          <div>
            Oui, cette méthode est efficace. Après, il est important de
            rappeller qu'aucune méthode de contraception n'est fiable à 100% en
            pratique, pas même la vasectomie (il y a eu un cas où les canaux
            déférent s'étaient ressoudés longtemps après l'opération).
            <p>
              L'unique source de vérité pour contrôler l'efficacité reste
              <nuxt-link href="/guides/spermogramme">le spermogramme</nuxt-link
              >. Il faut que ce dernier indique une concentration de
              spermatozoïdes inférieure à 1 million par millilitre de sperme. Si
              c'est le cas alors la contraception est efficace et la personne
              est considérée comme contracepté.e.
            </p>
            <p>
              L'outil qui permet de mesurer l'efficacité d'une méthode
              contraceptive est l'<b>indice de Pearl</b>. C'est le taux de
              grossesses non désirées pour un an d'utilisation optimale d'une
              méthode contraceptive' Il est important aussi de faire la
              disctinction entre l'indice (valeur théorique) et l'efficacité
              pratique. Par exemple le préservatif a un indice de Pearl très bas
              (grande efficacité), mais son efficacité pratique est moindre car
              des accidents arrivent régulièrement et son utilisation n'est pas
              toujours optimale.
            </p>
            <p>
              La méthode thermique a une grande efficacité pratique, avec un
              taux de grosseses non désirées inférieur à 0,5% pour les
              utilisateurs des slips chauffants. On obtient donc de meilleurs
              résultats qu'avec la pillule contraceptive lorsque la méthode est
              correctement utilisée. Sur l'ensemble de l'étude, 1 seule
              grossesse non désirée avait eu lieu et celà suite à une mauvaise
              utilisation du dispositif (arrêt du port du slip pendant plusieurs
              semaines).
            </p>
            <p>
              Les études de Mieusset ont été effectué sur la base d'un slip qui
              est légérement différent des jockstraps et de l'anneau. Mais dans
              le fond, c'est la même méthode de remontée testiculaire qui a été
              étudié.
            </p>
            <p>
              Les
              <nuxt-link
                href="https://link.springer.com/content/pdf/10.1007/s12610-012-0192-1.pdf"
                target="_blank"
                >études du Dr Mieusset</nuxt-link
              >
              restent la référence dans le domaine. Si tu veux plus
              d'informations sur les recherches scientifiques alors tu peux lire
              <nuxt-link href="explorer#ressources-scientifiques"
                >notre page "Des ressources pour explorer"</nuxt-link
              >
            </p>
          </div>
        </Card>
        <Card
          title="Les outils"
          icon="noto-briefs"
          link="/guides/spermogramme#outils"
          id="outils"
        >
          Alors dans les options disponibles on retrouve :
          <ul>
            <li>
              L'<b>anneau</b>. On commence par lui car c'est quand même la star
              <icon name="noto-glowing-star" /> de ce site. Un simple anneau en
              silicone bio-compatible qui se place à la base de ton pénis. Il
              existe différentes versions que tu peux trouver en ligne ou tu
              peux en fabriquer un lors d'ateliers.
            </li>
            <li>
              Le <b>jockstrap</b> (aussi appelé remonte-couille toulousain ou
              slip chauffant). Que la base parte d'un slip, de simples bandes
              élastiques ou parfois d'un soutien-gorge, la finalité reste la
              même. Un système qui maintient un anneau fait à partir d'une
              chaussette repliée. Il existe des ateliers coutûres un peu partout
              en France pour apprendre à fabrique le sien.
            </li>
            <li>
              <b>Spermapause</b>. Olivier Nago, a crée ce slip qui est muni
              d'une batterie et d'une résistance pour chauffer les testicules.
              La température atteinte est plus élevée et permet de le garder
              seulement 4h par jour. Par contre, l'exposition des testicules à
              une température > 37° n'a jamais été validée par aucune étude.
            </li>
          </ul>
          Pour rappel, aujourd'hui, aucun dispositif ne dispose ni de la norme
          CE (normes ISO européenes) ni d'une autorisation de mise sur le marché
          pour usage contraceptif. Mais les choses bougent
          <a href="https://entrelac.coop/">une coopérative</a> a été créée pour
          atteindre la certification européenne pour l'anneau (Andro-switch).
        </Card>
        <Card
          title="Contre-indications ou effets secondaires"
          icon="noto-cross-mark"
          link="/guides/spermogramme#contre-indication"
          id="contre-indication"
        >
          Les <b>contre-indications</b> à la remontée testiculaire sont :
          <ul>
            <li>
              Une <b>fertilité de base trop basse</b> lors de ton premier
              spermogramme (<b
                >concentration en spermatozoïdes inférieure à 15M/mL</b
              >
              ou une <b>mobilité inférieure à 32%</b>).
            </li>
            <li>
              un antécédent de testicules mal descendus dans l'enfance (<b
                >cryptorchidie</b
              >
              ou <b>ectopie</b>)
            </li>
            <li>une <b>torsion du cordon spermatique</b></li>
            <li>une <b>hernie inguinale</b> (soignée ou pas)</li>
            <li>un <b>cancer du testicule</b></li>
            <li>un <b>varicocèle de grade 3</b></li>
          </ul>

          Les <b>principaux effets secondaires</b> :
          <ul>
            <li>
              <b>Irritations de la peau</b> : si l'anneau n'est pas à la bonne
              taille et qu'il sert trop ou bien si on le porte trop longtemps et
              pendant des activités physiques intenses
            </li>
            <li>
              <b>Mycoses</b> : si l'anneau n'est pas lavé assez réguilèrement ou
              que les tissus n'ont pas le temps de respirer la nuit.
            </li>
            <li>
              <b>Mictions résiduelles, difficulté à uriner</b> : taille
              inadaptée ou l'anneau est trop petit
            </li>
            <li>
              <b>Sténose de l'urêtre</b> : taille inadaptée ou l'anneau est trop
              petit. Dangereux car peut avoir des conséquences durables
            </li>
            <li>
              <b>Altération des paramètres spermatiques</b> : celui-là est un
              effet désiré, donc tout va bien.
            </li>
            <li><b>Réduction du volume des testicules</b> : aucun danger.</li>
          </ul>

          Si tu observes un effet secondaire génant, arrête le port de l'anneau
          et rapproche toi de la personne qui suit ton dossier médical ou d'un
          groupe de personnes contraceptées près de chez toi.
        </Card>
      </div>
      <div class="mt-16">
        <Alert title="Au fait !" type="info">
          Maintenant que tu comprends comment fonctionne la contraception
          thermique, tu peux commencer ou continuer
          <nuxt-link href="/parcours">le parcours</nuxt-link>.
        </Alert>
      </div>
    </div>
  </PageSkeleton>
</template>
<script setup lang="ts">
definePageMeta({
  title: "La contraception thermique",
  icon: "noto-thermometer",
  desc: "Ce guide te donne toutes les informations sur la contraception thermique.",
});
const image = ref("/thermometer.jpg");
useSeoMeta({
  ogImage: image,
  twitterImage: image,
});
</script>
