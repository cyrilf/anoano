<template>
  <PageSkeleton>
    <template #image="{ imageClass }">
      <image-caption
        src="/explorer.jpg"
        alt="Documents"
        :width="640"
        :class="imageClass"
      >
        Photo de
        <a href="https://unsplash.com/@ian dooley">Ian Dooley</a>
        sur <a href="https://unsplash.com/photos/3NCA3tbaE5I">Unsplash</a>
      </image-caption>
    </template>
    <template #intro>
      <p>
        Le but principal de ce site est de te fournir des informations simples
        et claires.
      </p>
      <p>
        Évidemment celà peut créer quelques lacunes en termes de profondeur.
        Cette page va te permettre de poursuivre tes recherches pour trouver
        plus d'informations. Plus tu seras informé.e, plus tu pourras faire un
        choix éclairé et conscient vers le type de contraception juste pour toi.
      </p>
      <Alert type="danger" title="Besoin d'aide pour le contenu"
        >Si tu connais une ressource qui aurait toute sa place sur cette page,
        envoie nous un mail à
        <nuxt-link href="mailto:hey@anono.page">hey@anoano.page</nuxt-link
        >.</Alert
      >
    </template>
    <div class="flex flex-wrap items-start justify-around 2xl:justify-between">
      <div>
        <Card title="📚 Les livres" link="/explorer#livres" id="livres">
          <ul>
            <li v-for="book in books" :key="book.name">
              <nuxt-link :href="book.link" target="_blank">{{
                book.name
              }}</nuxt-link>
              - {{ book.author }} - {{ book.editor }} - {{ book.year }}
            </li>
          </ul>
        </Card>
        <Card title="🎬 Les vidéos" link="/explorer#vidéos" id="vidéos">
          <ul>
            <li v-for="video in videos" :key="video.name">
              <nuxt-link :href="video.link" target="_blank">{{
                video.name
              }}</nuxt-link>
              - {{ video.author }} - {{ video.year }}
            </li>
          </ul>
        </Card>
        <Card title="🎤 Les podcasts" link="/explorer#podcasts" id="podcasts">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/playlist/6wo0xBl01NYXtJAUcs1hEy"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Card>
      </div>
      <Card
        title="🧑‍🔬 Les ressources scientifiques"
        link="/explorer#ressources-scientifiques"
        id="ressources-scientifiques"
      >
        <Alert type="danger" title="Besoin d'aide pour le contenu"
          >Loin d'être expert.e.s sur la partie "études scientifiques", une aide
          pour recenser/catégoriser/vulgariser le contenu scientifique est la
          bienvenue.</Alert
        >
        <p>
          Depuis 1930, il y a déjà eu plus de 15 études scientifiques, avec
          essais cliniques, sur la contraception <ContentMasculine /> thermique.
        </p>
        Voilà ci-dessous une liste non exhaustive des ressources clés.
        <ul>
          <li>
            Le document référence. <br />Dr Mieusset, andrologue au CHU de
            Toulouse, est un spécialiste de la CMT depuis les années 80. Il est
            à l'origine de nombreuses publications sur le sujet et a créé le
            premier slip à remontée testculaire
            <span class="hand text-xl leading-normal text-zinc-600"
              >(le fameux remonte-couilles toulousain)</span
            >. Les essais cliniques ont permis de démontrer l'efficacité et la
            reversibilité de la cryptorchidie artificielle.
            <p class="mt-0">
              <icon name="fe:document" />
              <nuxt-link
                href="https://link.springer.com/content/pdf/10.1007/s12610-012-0192-1.pdf"
                >Guide pratique d'une contraception masculine hormonale ou
                thermique - C. Soufir et R. Mieusset - 2012</nuxt-link
              >
            </p>
          </li>
          <li>
            <nuxt-link
              href="https://en.wikipedia.org/wiki/Marthe_Voegeli"
              target="_blank"
              >Marthe Voegli</nuxt-link
            >, la première scientifique a avoir testé la méthode thermique et
            les effets de la chaleur sur la spermatogenèse en Inde entre 1930 et
            1950. Elle a pu mettre en évidence que l'exposition des testicules à
            des bains chauds altérait la fertilité.
            <p class="mt-0">
              <icon name="fe:document" />
              <nuxt-link
                href="https://findingaids.smith.edu/repositories/2/archival_objects/69812"
                target="_blank"
                >Correspondance avec le gouvernement Indien - Marthe Voegli -
                1956</nuxt-link
              >
            </p>
          </li>
          <li>
            Une liste des recherches principales sur le sujet
            <i
              >(contenu extrait de la timeline disponible sur
              <nuxt-link
                href="https://thoreme.com/la-contraception-masculine/"
                target="_b
            "
                >Thoreme</nuxt-link
              >)</i
            >.
            <Toggle text="Voir les recherches" text-open="Replier">
              <simple-table
                :headers="headers"
                :items="resources"
                class="min-w-full leading-normal"
              >
                <template #item-name="{ item, header, outerClass, innerClass }">
                  <td :class="outerClass">
                    <nuxt-link :href="item.link" target="_blank">{{
                      item.name
                    }}</nuxt-link>
                  </td>
                </template>
              </simple-table>
            </Toggle>
          </li>
          <li>
            Une autre page sur
            <nuxt-link
              href="https://thoreme.zendesk.com/hc/fr/articles/5448073973777-Quelles-sont-les-%C3%A9tudes-cliniques-d%C3%A9j%C3%A0-men%C3%A9es-sur-la-contraception-testiculaire-thermique-"
              target="_blank"
              >les études cliniques (Thoreme)</nuxt-link
            >
          </li>
        </ul>
        Si tu as envie de creuser par toi même, il existe
        <nuxt-link
          href="https://drive.google.com/drive/folders/1Mqyz5YvbWfGHUvJgnv73rlIfvrWwPpRV"
          >ce lien Drive</nuxt-link
        >
        et
        <nuxt-link
          href="https://drive.google.com/drive/folders/1TMyL0-iXF3Em1FlnXn6MPxm76JVFz99G"
          >celui-ci</nuxt-link
        >
        qui recense plein de recherches concernant la contraception
        <ContentMasculine />. Par contre la majorité du contenu est en Anglais.
      </Card>
    </div>
  </PageSkeleton>
</template>
<script setup lang="ts">
import { Header } from "~/types/Model";

definePageMeta({
  title: "🔎 Des ressources pour explorer",
  desc: "Ce guide référence l'ensemble des revues scientifiques disponible au sujet de la contraception thermique.",
});

const headers = ref<Header[]>([
  { name: "Année", key: "year" },
  { name: "Nom", key: "name" },
  { name: "Auteur.ice.s", key: "author" },
]);

const resources = ref([
  {
    year: 1965,
    author: "Rock et al. Am. J. Obst. & Gyneco",
    name: "Effect of induced intrascrotal hyperthermia on testicular functiun in man",
    link: "https://www.sciencedirect.com/science/article/abs/pii/0002937865900803",
  },
  {
    year: 1973,
    author: "French et al. Andrologie 5 (4) : 311-316",
    name: "Self-induced scrotal hyperthermia in man followed by decrease in sperm output",
    link: "https://pubmed.ncbi.nlm.nih.gov/4778918/",
  },
  {
    year: 1985,
    author:
      "Mieusset, R., Grandjean, H., Mansat, A. and Pontonnier, F. 1985. Fertil. Steril., 43: 589.",
    name: "Inhibiting effect of artificial cryptorchidism on spermatogenesis.",
    link: "https://pubmed.ncbi.nlm.nih.gov/3987927/",
  },
  {
    year: 1987,
    author:
      "Mieusset, R., Bujan, L., Mansat, A., Pontonnier, F. and Grandjean, H. 1987a. .Int. J. Androl., 10: 471. &",
    name: "Hyperthermia and human spermatogenesis: enhancement of the inhibitory effect obtained by “artificial cryptorchidism”",
    link: "https://pubmed.ncbi.nlm.nih.gov/2888735/",
  },
  {
    year: 1987,
    author:
      "Mieusset, R., Bujan, L., Mansat, A., Pontonnier, F. and Grandjean, H. 1987b.Fertil. Steril., 47: 150.",
    name: "Effects of artificial cryptorchidism on sperm morphology",
    link: "https://pubmed.ncbi.nlm.nih.gov/3792568/",
  },
  {
    year: 1988,
    author:
      "F. R. Kandeel et Swerdloff R. S., Fertil Steril, vol. 49, no 1, janvier 1988, p. 1–23",
    name: "Role of temperature in regulation of spermatogenesis and the use of heating as a method for contraception",
    link: "https://pubmed.ncbi.nlm.nih.gov/3275550/",
  },
  {
    year: 1991,
    author:
      "Mieusset R., Bujan L., Mansat A., Grandjean H., Pontonnier F. 1991 Medicine and Biology, vol 286. Springer, Boston, MA",
    name: "Heat Induced Inhibition of Spermatogenesis in Man.",
    link: "https://link.springer.com/chapter/10.1007/978-1-4684-5913-5_26",
  },
  {
    year: 1991,
    author: "Shafik A. Adv Contr Deliv Syst. 1991;VII:269–79.",
    name: "Testicular suspension as a method of male contraception: technique and results",
    link: "https://pubmed.ncbi.nlm.nih.gov/12284770/",
  },
  {
    year: 1992,
    author: "Shafik A. Contraception. 1992;45:439–51.",
    name: "Contraceptive efficacy of polyester-induced azoospermia in normal men.",
    link: "https://pubmed.ncbi.nlm.nih.gov/1623716/",
  },
  {
    year: 1994,
    author: "MIEUSSET R., BUJAN L. Int. J. Androl., 1994 ; 17 : 186-191.",
    name: "The potential of mild testicular heating as a safe, effective and reversible contraceptive method for men.",
    link: "https://pubmed.ncbi.nlm.nih.gov/7995654/",
  },
  {
    year: 1995,
    author: "Moeloeck N. Med J. Indones 1995; Vol 4, No 4",
    name: "Polyester Sling in Indonesian Men 225 Cover Induces Oligozoospermia in Normal Indonesian Men",
    link: "https://www.researchgate.net/publication/269624487_Polyester_sling_scrotal_cover_induces_oligozoospermia_in_normal_Indonesian_men",
  },
  {
    year: 2010,
    author:
      "Zhu H, Cui Y, Xie J, Chen L, Chen X, Guo X, et al. « . Proteomics. 2010;10:3480–93.",
    name: "Proteomic analysis of testis biopsies in men treated with transient scrotal hyperthermia reveals the potential targets for contraceptive development",
    link: "https://pubmed.ncbi.nlm.nih.gov/20815088/",
  },
  {
    year: 2012,
    author:
      "Ahmad G, Moinard N, Lamare C, Mieusset R, Bujan L.  Fertil Steril. 2012;97:546–53.",
    name: "Mild testicular and epididymal hyperthermia alters sperm chromatin integrity in men.",
    link: "https://pubmed.ncbi.nlm.nih.gov/22265039/",
  },
  {
    year: 2019,
    author:
      "Abdelhamid MHM, Esquerre-Lamare C, Walschaerts M, Ahmad G, Mieusset R, Hamdi S, Bujan L. Reprod Biol.",
    name: "Experimental mild increase in testicular temperature has drastic, but reversible, effect on sperm aneuploidy in men: A pilot study.",
    link: "https://pubmed.ncbi.nlm.nih.gov/31208935/",
  },
]);

const books = ref([
  {
    name: "Le coeur des zobs",
    link: "https://www.dargaud.com/bd/le-coeur-des-zobs/le-coeur-des-zobs-le-coeur-des-zobs-bda5441250",
    author: "Bobika",
    editor: "Dargaud",
    year: 2022,
    type: "BD",
  },
  {
    name: "Les contraceptés",
    link: "https://steinkis.com/livres/les-contraceptes/les-contraceptes.html",
    author: "Caroline Lee, Guillaume Daudin, Stéphane Jourdain",
    editor: "Steinkis",
    year: 2021,
    type: "BD",
  },
  {
    name: "Opération vasectomie",
    link: "https://www.editionslibertalia.com/catalogue/poche/operation-vasectomie",
    author: "Élodie Serna",
    editor: "Libertalia",
    year: 2021,
    type: "book",
  },
  {
    name: "L'homme sous pilule",
    link: "https://www.marabout.com/livre/lhomme-sous-pilule-9782501146944/",
    author: "Anne-Sophie Delcour, Lucy Macaroni",
    editor: "Marabulles",
    year: 2022,
    type: "BD",
  },
  {
    name: "SOS contraception",
    link: "https://www.lisez.com/livre-grand-format/sos-contraception-les-cles-pour-comprendre-son-corps-et-bien-choisir-sa-contraception-le-guide-illustre/9782412068403",
    author: "Marie-Laure Brival, Violette Suquet",
    editor: "First",
    year: 2021,
    type: "BD",
  },
  {
    name: "La contraception masculine ",
    link: "https://link.springer.com/book/10.1007/978-2-8178-0346-3",
    author: " Jean-Claude Soufir , Roger Mieusset",
    editor: "Springer",
    year: 2012,
    type: "book",
  },
  {
    name: "S'occuper de son sperme",
    link: "https://contraceptionthermique.noblogs.org/le-livre/",
    author: "",
    editor: "Leslie Bhar",
    year: 2021,
    type: "book",
  },
]);
const videos = ref([
  {
    name: "La contraception masculine, ça existe déjà",
    link: "https://www.brut.media/fr/health/la-contraception-masculine-ca-existe-deja--a2f0c0b0-70d7-435f-9349-e0890e3e2197",
    author: "Brut",
    year: 2021,
    type: "video",
  },
  {
    name: "La contraception masculine, vous connaissez ?",
    link: "https://www.youtube.com/watch?v=yRvukqkfLr4",
    author: "Broute",
    year: 2021,
    type: "video",
  },
  {
    name: "Contraception masculine : slip chauffant et anneau, existe-t-il une alternative au préservatif ?",
    link: "https://france3-regions.francetvinfo.fr/hauts-de-france/nord-0/video-contraception-masculine-slip-chauffant-et-anneau-existe-t-il-une-alternative-au-preservatif-2622112.html",
    author: "France 3",
    year: 2022,
    type: "video",
  },
  {
    name: "Contraception 'masculine' : où (en) sont les hommes ? | Erwan Taverne | TEDxRennes",
    link: "https://www.youtube.com/watch?v=BvXokJPL4cs",
    author: "TEDx Talks",
    year: 2021,
    type: "video",
  },
  {
    name: "#65 - La contraception",
    link: "https://www.youtube.com/watch?v=SYXxK_Ukd54",
    author: "Et tout le monde s'en fout",
    year: 2020,
    type: "video",
  },
  {
    name: "La contraception masculine, comment ça marche ?",
    link: "https://www.youtube.com/watch?v=EszbVq-41Fg",
    author: "Dr Nozman",
    year: 2021,
    type: "video",
  },
  {
    name: "Le scandale de la contraception masculine",
    link: "https://www.youtube.com/watch?v=1sbsp_pNGIo",
    author: "Blast",
    year: 2021,
    type: "video",
  },
  {
    name: "Contraception Masculine",
    link: "https://www.youtube.com/watch?v=KMPsfaMo-Zg",
    author: "Parlons peu Mais parlons !",
    year: 2018,
    type: "video",
  },
]);
</script>
