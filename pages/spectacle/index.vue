<template lang="html">
  <div>
    <title>La Commuz' - Spectacle</title>
    <Meta name="description" content="La Commuz existe depuis plus de 20 ans." />

    <!-- Editions de  l'année -->

    <SpectacleAnnee id="infos" :image="affiche" :bg-image="bgImage"
      :text="infos" />

    <!-- Les éditions précédentes -->
    <div id="precedentes">
      <h2>Éditions précédentes</h2>
      <a v-for="(annee, id) in anneesPassees" :key="id" class="inline-link" :href="'#' + annee.annee">{{ annee.annee
        }}</a>
    </div>

    <div v-for="(annee, id) in anneesPassees" :key="id">
      <SpectacleAnnee :id="annee.annee" :key="id" :bg-image="annee.bgImage" :image="annee.image" :text="annee.text"
        :galerie="annee.galerie" :equipe="annee.equipe" :deezer="annee.deezer" :youtube="annee.youtube"
        :spotify="annee.spotify" :annee="annee.annee" :page="annee.page" />
    </div>
  </div>
</template>

<script>

// Ici le contenu pour l'édition actuelle
const infos = "Commuz' 2025"

const affiche = ""
const bgImage = "/images/equipes/equipe--2024.jpg"

// "<p>1851. Le Léviathan, train gigantesque de l’ingénieur Robert Fawkes, achève sa tournée inaugurale. Après avoir traversé toutes les capitales européennes, le prodige s'apprête à rejoindre Londres pour l’ouverture de l’Exposition Universelle. À l’heure de l’avènement du libéralisme, les braises de la Confrérie Ouvrière semblent se raviver. On murmure que Thomas Ravet préparerait son retour. </p>" +
// '<p>Pour en savoir plus concernant l’édition 2023 rendez-vous <a style="color: var(--pink);" class="inline-link" target="_blank" href="/commuz2023">sur cette page</a>.</p>' +
// "<center> <a target='_blank' rel='noopener' href='https://collecte.io/commuz-2023-billetterie-generale-2418903/fr' class='inline-link'> Et pour acheter sa place c'est ici ! </a> </center>" 


// Les éditions précédentes
const anneesPassees = [
{
    annee: 2024,
    text: "<h2>2024 - Backstage</h2><p>Hollywood, 1964. Le Highlight Show, le talk show le plus populaire des Etats-Unis, est au sommet de sa gloire. Mais au cours d’une énième émission, son host Alec Keaton décide subitement de prendre sa retraite. Face à l’urgence de la situation, la productrice Norma Desmond mettra tout en œuvre pour assurer le maintien de l’émission. Mais c’est sans compter le désir de vengeance de son ex-mari Paul, prêt à tout pour détruire le Highlight, et les machinations du “Réseau”, une mystérieuse organisation qui risque bien de révéler au grand jour les secrets les plus intimes de nos héros. Derrière les paillettes, Backstage explore les coulisses du showbusiness, entre amours, passions et ambitions.</p>",
    bgImage: '/images/equipes/equipe--2024.jpg',
    image: '/images/affiches/affiche--2024.png',
    galerie: true,
    equipe: true,
    page: true,
    deezer: 'https://www.deezer.com/en/album/642414161',
    spotify: 'https://open.spotify.com/intl-fr/album/2q484DfxPZu0ToRYVbz3bR',
    youtube: 'https://www.youtube.com/watch?v=w9eKXbZRkcE',
  },
  {
    annee: 2023,
    text: "<h2>2023 - Hymne à la Voie</h2>" +
      "<p>1851. Le Léviathan, train gigantesque de l’ingénieur Robert Fawkes, achève sa tournée inaugurale. Après avoir traversé toutes les capitales européennes, le prodige s'apprête à rejoindre Londres pour l’ouverture de l’Exposition Universelle. À l’heure de l’avènement du libéralisme, les braises de la Confrérie Ouvrière semblent se raviver. On murmure que Thomas Ravet préparerait son retour. </p>",
    bgImage: '/images/equipes/equipe--2023.jpg',
    image: '/images/affiches/affiche--2023.png',
    galerie: true,
    equipe: true,
    deezer: 'https://deezer.page.link/XnKmApuvbtXYbcQ77',
    spotify: 'https://open.spotify.com/album/4LKVvxW6faIUebrjoH17KT?si=CKOqb9xASp-WeLy19TKxsg',
    youtube: 'https://www.youtube.com/watch?v=KF35clz-ue8'
  },
  {
    annee: 2022,
    text: "<h2>2022 - En Memoria</h2>" +
      "<p>Mexique, 1842. Happée par la Fête des morts, la danseuse Diana prépare son spectacle, tiraillée entre la mémoire de sa mère biologique et les desseins vengeurs de sa mère adoptive. De son côté, son fiancé Rafael enquête sur la mort de l’ancien gouverneur du Vera Cruz dont le fantôme lui apparaît : un grand danger s’annonce.<br />Les ombres du passé resurgissent, de vieilles blessures se réveillent. Leurs destins s’entremêlent inextricablement. Pourront-ils empêcher cette fête de tourner au drame ?</p>",
    bgImage: '/images/equipes/equipe--2022.jpg',
    image: '/images/affiches/affiche--2022.png',
    galerie: true,
    equipe: true,
    deezer: 'https://deezer.page.link/7Ctzsq8PzZqNzqzn8',
    spotify: 'https://open.spotify.com/album/4boTthC3VNuTVeBVcmJAED?si=v-lbw3GbSfWFfbZ_HxZ_cw',
    youtube: 'https://youtu.be/Lrsam24N3GM'
  },
  {
    annee: 2021,
    text: "<h2>2021 - Noces d'opium</h2>" +
      "<p>Sous couvert de vendre du thé, le jeune Thomas a organisé à Shanghai un gigantesque trafic d’opium. Avec sa partenaire commerciale et amante Meiyun, il s’apprête à faire un dernier gros coup avant de se retirer. Mais c’était sans compter la visite surprise de sa femme Gemma, débarquée tout droit de Londres avec sa belle-famille. Le jeune anglais devra donc rivaliser d'efforts pour gérer son commerce sans être découvert par sa belle-famille.</p>",
    bgImage: '/images/equipes/equipe--2021.jpg',
    image: '/images/affiches/affiche--2021.jpg',
    galerie: true,
    equipe: true,
    deezer: 'https://deezer.page.link/2WyH56nTqYPyuFBa6',
    spotify: 'https://open.spotify.com/album/75UGY5R9yFlqCxhYB91CLB?si=1hmhdxhrTnuvfKQQKoHxmg',
    youtube: 'https://youtu.be/Ol1sHc2vqZc'
  },
  {
    annee: 2020,
    text: '<h2>Commuz 2020 - Contretemps</h2>' +
      "<p>Titouan, adolescent de 17 ans en fac d'Histoire se réveille à Versailles, un matin de 1712, dans un corps qui n'est pas le sien. Le propriétaire de ce corps s'appelle Joseph, est compositeur du Roi, et reprend connaissance au même moment dans la chambre de Titouan, au XXI<sup>e</sup> siècle. Alors que les proches de Joseph défilent devant Titouan avec leurs intrigues et leurs secrets, l'adolescent se rend rapidement compte qu'il a une énorme responsabilité : il doit composer une comédie-ballet pour Louis XIV. </p>",
    bgImage: '/images/equipes/equipe--2020.jpg',
    image: '/images/affiches/affiche--2020.jpg',
    galerie: true,
    equipe: true,
    deezer: '',
    spotify: 'https://open.spotify.com/album/4vHXsNBT0GHheB2SSNk7u1?si=9kWyVeiuQa63yN-LUUOQvg',
    youtube: 'https://youtu.be/lv7gpmfUM18'
  },
  {
    annee: 2019,
    text: '<h2>2019 - Désorientés</h2>' +
      "<p>Au cœur du XIe siècle, alors que les tensions montent entre Orient et Occident, Elena et Alix sont envoyées en mission à l’aube de la première Croisade. Cependant, elles se font capturer par le puissant Calife. Désormais devenues esclaves, elles se retrouvent au milieu d’un conflit mêlant jalousie, querelles familiales et souvenirs douloureux.</p>" + "<p>Quels secrets chaque membre de cette famille cache-t-il aux autres ? Elena et Alix sauront-elles se sortir de cette prison orientale ? Mais où est donc passée la semoule ? Le vent d’Ouest souffle sur le palais : ils en seront tous... Désorientés.</p>",
    bgImage: '/images/equipes/equipe--2019.jpg',
    image: '/images/affiches/affiche--2019.jpg',
    galerie: true,
    equipe: true,
    deezer: 'https://deezer.page.link/6Q77z1Uv5kF3MCmy6',
    spotify: 'https://open.spotify.com/album/6ymtsIOKfk6TsKiHoGssp5?si=5wNVOCC_QyeHY0TLd3JRFw',
    youtube: 'https://youtu.be/rYEpRUDMMVY'
  },
  {
    annee: 2018,
    text: '<h2>2018 - Bas les masques</h2>' +
      "<p>1919, États-Unis.</p>" +
      "<p>A l'aube des années folles, un vent de liberté souffle sur l’Amérique. Le grand magnat de l’automobile Daniel Richard vient de quitter ce monde laissant une immense fortune derrière lui. Sur son testament sont inscrits les noms des proches du défunt mais aussi d'illustres inconnus.</p>" +
      "<p>Comment connaissaient-ils Daniel Richard ? Que se cache-t-il derrière ce testament ? Quelles que soient les réponses à ces questions, ce mystère les amènera à se poser des questions sur eux-mêmes et fera ressurgir le passé de Daniel.</p>",
    bgImage: '/images/equipes/equipe--2018.jpg',
    image: '/images/affiches/affiche--2018.jpg',
    galerie: true,
    equipe: true,
    deezer: 'https://deezer.page.link/hav7hyoD5KXgLXpGA',
    spotify: 'https://open.spotify.com/album/1s8CnJ9apfTqF5w3gVrDbB?si=0y3VMFGrQPiFahQbWjBf4w',
    youtube: 'https://youtu.be/4Q8OuQs7RYM'
  },
  {
    annee: 2017,
    text: '<h2>2017 - Les Caprices des jeux</h2>' +
      '<p>Grèce Antique, vous avez dit ? Nous irons donc y rencontrer Pélops et sa mère, deux modestes gens vivant paisiblement grâce à leur troupeau de moutons.</p>' +
      '<p>Au grand désespoir de sa mère persuadée que son fils peut accomplir de grandes choses, Pélops se satisfait de sa position, sans véritable ambition. Elle aura beau le sermonner, Pélops reviendra toujours à ses moutons. Cependant, surplombant la Grèce depuis le Mont Olympe, les dieux, eux, ne font pas la sourde oreille.</p>' +
      '<p>Quel destin réservent-ils à Pélops ?</p>',
    bgImage: '/images/equipes/equipe--2017.jpg',
    image: '/images/affiches/affiche--2017.jpg',
    galerie: true,
    equipe: true,
    deezer: '',
    spotify: '',
    youtube: 'https://www.youtube.com/playlist?list=PL6KbPcvX6MlnZXpNN6eE4WzZ6jlA3HFEE'
  },
  {
    annee: 2016,
    text: '<h2>2016 - Les Fruits de la Passion</h2>' +
      '<p>Voyagez dans une Espagne morcelée où la Renaissance n’en est encore qu’à ses prémices... A cette époque où les guerres de territoires sont encore monnaie courante, le duché de la Rioja, l\'un des plus important duché d\'Espagne, vit des moments difficiles : les finances du royaume sont au plus mal et les tensions avec les royaumes voisins de Castille et d\'Aragon sont palpables...</p>' +
      '<p>Comment la situation a-t-elle pu dégénérer à ce point ? La gestion calamiteuse et frivole du Duc de la Rioja y est certainement pour quelque chose ! Ce joyeux luron a une fâcheuse tendance à privilégier les bals décadents et les danses folâtres aux problèmes géopolitiques...</p>' +
      '<p>Son entourage va-t-il enfin se décider à réagir ?</p>',
    bgImage: '/images/equipes/equipe--2016.jpg',
    image: '/images/affiches/affiche--2016.jpg',
    galerie: true,
    equipe: true,
    deezer: '',
    spotify: '',
    youtube: 'https://www.youtube.com/playlist?list=PL6KbPcvX6Mll2wirTaiZAMUQpZKCY1kNt'
  },
  {
    annee: 2015,
    text: '<h2>2015 - <i>Ad Vitam Aeternam</i></h2>' +
      '<p>Une sacrée histoire de bonnes sœurs et de moines qui chaussent leurs sandales pour échapper à leur quotidien.</p>',
    bgImage: '/images/equipes/equipe--2015.jpg',
    image: '/images/affiches/affiche--2015.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: ''
  },
  {
    annee: 2014,
    text: '<h2>2014 - Broadway To Hell</h2>' +
      '<p>John Wise, icône du cinéma muet, fait parler de lui sur le plateau de la série <i>Cœur d\'amour </i>, théâtre de la rivalité entre ses deux anciens élèves, Daniel et Natacha.</p>' +
      '<p>Sous les yeux d\'un producteur aussi despotique qu\'incompétent et de son stagiaire préposé au café, tous deux escaladent les feux de la rampe, jusqu\'à l\'arrivée de Cunégonde Wise, la fille de John Wise.</p>',
    bgImage: '/images/equipes/equipe--2014.jpg',
    image: '/images/affiches/affiche--2014.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: ''
  },
  {
    annee: 2013,
    text: '<h2>2013 - Mange-moi si tu peux !</h2>' +
      '<p>Alors que le plus grand magnat du bonbon vient de succomber à un terrible accident de vélo, ses deux fils Antoine et Pierre que tout oppose se rerouvent forcés de diriger ensemble l\'entreprise familiale.</p>' +
      '<p>Cela sous le regard de la fatale Laure, de l\'inventeur fou Gaston et de la sévère secrétaire de son père.</p>',
    bgImage: '/images/equipes/equipe--2013.jpg',
    image: '/images/affiches/affiche--2013.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: 'https://www.youtube.com/playlist?list=PL6KbPcvX6MlnAZnSwPstP1z8-sIDdAkUu'
  },
  {
    annee: 2012,
    text: '<h2>2012 - Des loups dans la bergerie</h2>' +
      '<p>Deux bourgeois de la ville débarquent dans le village de Patagnac et sèment le trouble dans cette paisible communauté d\'éleveurs de moutons.</p>' +
      '<p>Une enquête romantico-politique dans laquelle les masques tombent et les passions se déchaînent.</p>',
    bgImage: '/images/equipes/2012.jpg',
    image: '/images/affiches/affiche--2012.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: 'https://www.youtube.com/playlist?list=PL6KbPcvX6Mlmz5oL30V_Q7nlFFfoDpHI7'
  },
  {
    annee: 2011,
    text: '<h2>2011 - Le destin animé de Mr. Swyt</h2>' +
      '<p>Pour sa 10ème édition la Commuz\' vous emmène à Hollywood... Artiste incompris ou réalisateur de génie, qui est réellement Mr. Swyt ?</p>' +
      '<p>Goûtant aux jeux d\'un monde de paillettes, saura-t-il déjouer les pièges tendus par la diabolique Miss Devil sans se brûler les ailes ?</p>',
    bgImage: '/images/equipes/2011.jpg',
    image: '/images/affiches/affiche--2011.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: 'https://www.youtube.com/playlist?list=PL6KbPcvX6MlmWKQqIeNZ8llL4qPpt8vQj'
  },
  {
    annee: 2010,
    text: '<h2>2010 - Humour, gouache et beauté</h2>' +
      '<p>La pièce retrace l’histoire (véritable) de nos plus grands peintres de la Renaissance : Raphaël, Léonard, Vitruve, et Michel et Ange, les siamois.</p>',
    bgImage: '/images/equipes/equipe--2010.jpg',
    image: '/images/affiches/affiche--2010.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: 'https://www.youtube.com/playlist?list=PL6KbPcvX6Mln8q3O7XbEItLRd7CP6Y83b'
  },
  {
    annee: 2009,
    text: '<h2>2009 - Bons baisers de l\'Olympe</h2>' +
      '<p>Quand il apprend les dernières frasques de son fils Junior, Zeus l\'envoie en périple sur Terre pour qu\'il lui prouve qu\'il est apte à devenir un vrai dieu : il a une journée pour se trouver une femme.</p>' +
      '<p>Les rencontres s\'enchaînent, heureuses, malheureuses, souvent tumultueuses, sous les yeux attentifs de Dora, une déesse rivale de Dieu, et de son fils, Marcus, qui feront tout pour l\'empêcher d\'accomplir sa mission...</p>',
    bgImage: '/images/equipes/2009.jpg',
    image: '/images/affiches/affiche--2009.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: 'https://www.youtube.com/playlist?list=PL6KbPcvX6MllVpKCrke2mD3UNwrZsKMY8'
  },
  {
    annee: 2008,
    text: '<h2>2008 - Profession : détective</h2>' +
      '<p>La nuit s\'est achevée. Désormais les korrigans dansent, dansent autour du feu. Mais leurs victimes ne seront pas au rendez-vous... Non, ce soir, quelqu\'un d\'autre s\'en chargera : un étrange évènement menace la vie tranquille d\'un manoir des plus éclectiques de la Bretagne profonde.</p>' +
      '<p>Les rideaux s\'ouvrent, les personnages s\'affrontent, se méfient, s\'aiment, se détestent... Les quiproquos naissent, se mêlent pour concocter une potion efficace contre les idées les plus noires. Tandis que les émotions se succèdent au gré des situations, les indices apparaissent et disparaissent sous les yeux des spectateurs. Serez-vous aussi perspicace que notre détective pour percer le mystère ?</p>',
    bgImage: '/images/equipes/2008.jpg',
    image: '/images/affiches/affiche--2008.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: 'https://www.youtube.com/playlist?list=PL6KbPcvX6MllNvY9aq3IXNj3xZRAUtq2-'
  },
  {
    annee: 2007,
    text: '<h2>2007 - Opération Redfish</h2>' +
      '<p>Il existe un objet précieux, véritable Saint Graal des temps modernes, mais qui n\'a de vraie valeur que si les deux parties qui le composent sont réunies.</p>' +
      '<p>La première vient d\'être dérobée mais la seconde a disparu depuis des temps immémoriaux. Afin de protéger cette dernière, deux experts décident de partir à sa recherche.</p>',
    bgImage: '/images/equipes/2007.jpg',
    image: '/images/affiches/affiche--2007.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: 'https://www.youtube.com/playlist?list=PL6KbPcvX6MlnvSrpfcwxgElB15TTvdcOw'
  },
  {
    annee: 2006,
    text: '<h2>2006 - La surprise du Chef</h2>' +
      '<p>Cette année, la pièce sera une satire, humoristique mais pertinente, du monde de la politique. Le spectateur se verra plonger pendant plus d\'une heure et demie dans une aventure rocambolesque.</p>' +
      '<p>Un chef qui plaque tout du jour au lendemain... voilà qui donne une bien mauvaise image dans le milieu de la politique. Pour rester crédible, les quatre membres qui restent n’ont qu’une seule solution : être unis, et essayer de cacher l’affaire aux médias. Mais la réalité est d’un tout autre ton !</p>',
    bgImage: '/images/equipes/2006.jpg',
    image: '/images/affiches/affiche--2006.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: ''
  },
  {
    annee: 2005,
    text: '<h2>2005 - Derrière le miroir</h2>' +
      '<p>6 personnes, que rien ne semble relier entre elles, se retrouvent dans un lieu étrange... Durant leur attente, des relations se nouent, les passés et les cœurs se dévoilent. Mais au fait, qu\'attendent-elles ainsi ? Et quel est cet étrange « administrateur » qui apparaît de temps à autre et semble détenir toutes les réponses sans jamais rien révéler ?</p>' +
      '<p>Dans ce lieu où le temps semble ne plus exister, sous le regard cynique de l’administrateur, ces 6 personnes vont apprendre à voir leur vie sous un éclairage différent, à la lumière de l\'histoire et du regard des 5 autres. Ne pas savoir pourquoi pour combien de temps elles sont ensemble les pousse à découvrir leurs sentiments, leurs envies, et à se parler sans se préoccuper des apparences.',
    bgImage: '/images/equipes/equipe--2005.jpg',
    image: '/images/affiches/affiche--2005.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: ''
  },
  {
    annee: 2004,
    text: '<h2>2004 - La danse des girafes</h2>' +
      '<p>8 amis réunis, leur passé sur la table, leur présent avec eux et leur futur en question se retrouvent, mais qu\'ont t\'ils encore en commun, que pensent-ils réellement des uns et des autres, d\'eux-mêmes ? Quelles conséquences sur leur propre vie ces retrouvailles vont-elles avoir ?</p>' +
      '<p>C\'est dans cette ambiance à la fois introspective et sociale qu\'évolue le spectacle de la Commuz\' 2004, plongé dans l\'onirisme et la dure réalité des rapports humains, mais où les scènes peuvent être drôles et graves à la fois car c\'est ainsi que sont nos liens quand on est une grande bande d\'amis aux caractères aussi diverses et parfois incompatibles que possible.</p>' +
      '<p>Parfois, c\'est la jungle.</p>',
    bgImage: '/images/equipes/equipe--2004.jpg',
    image: '/images/affiches/affiche--2004.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: ''
  },
  {
    annee: 2003,
    text: '<h2>2003 - T.V. Paillettes Show</h2>' +
      '<p>Un temps que les moins de 20 ans ne peuvent pas connaître.</p>',
    bgImage: '',
    image: '/images/affiches/affiche--2003.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: ''
  },
  {
    annee: 2002,
    text: '<h2>2002 - Voyage au bout de la rue</h2>' +
      '<p>Un temps que les moins de 20 ans ne peuvent pas connaître.</p>',
    bgImage: '',
    image: '/images/affiches/affiche--2002.jpg',
    galerie: false,
    equipe: false,
    deezer: '',
    spotify: '',
    youtube: ''
  }
];


export default defineComponent({
  setup() {
    definePageMeta({
      layout: 'default',
    });
  },
  data: function () {
    return { anneesPassees, infos, affiche, bgImage };
  },
});
</script>

<style lang="scss" scoped>
#precedentes {
  padding: 5rem;
  color: white;

  a {
    color: #9b9b9b;

    &:not(:last-child) {
      margin-right: 1ch;

      &::after {
        content: ",";
      }
    }
  }
}

.image {
  margin-top: 50px;
}

.annee__links {
  display: flex;
  flex-direction: row;
}

.button-link {
  margin-top: 0.5em;
  margin-top: 0.5em;
}

#trailer--2023 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  width: 100%;

  h2 {
    text-align: center;
  }

  #trailer-video {
    width: 100%;
  }
}

#retrospective-2023 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  width: 100%;

  h2 {
    text-align: center;
  }
}

#youtube {
  max-width: 100%;
}

@media screen and (min-width: 800px) {
  #trailer--2019 {
    #trailer-video {
      /*display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 25px;
        padding-top: 25px;*/
      width: 800px;
      //text-align: center;
    }
  }
}
</style>
