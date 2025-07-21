<template>
  <div class="flex flex-col items-center space-y-5 my-8">

    <h1 class="text-4xl font-extrabold md:text-5xl lg:text-6xl dark:text-white text-center flex flex-col ">
      <!-- We may use text-neutral-900 for light mode-->
      <span>Bonne nouvelle</span>
      <span>La Commuz' recrute !</span>
    </h1>

    <div class="flex flex-col gap-4 md:px-40 px-10 items-center justify-center ">
      <div class="md:w-1/2">
        Quels que soient vos talents ou vos passions, la Commuz' vous accueille à bras ouverts pour l'aventure {{ year
        }} ! Les
        castings sont ouverts à toutes et tous.
      </div>
      <div class="md:w-1/2">
        Au programme : {{poles.map(pole => pole.name.toLowerCase()).join(", ")}}.
      </div>
      <div>
        <AnimatedNuxtLink text="Découvrir la Commuz'" to="/" icon="i-heroicons-arrow-long-right-solid" />
      </div>
    </div>

    <div class="flex flex-col gap-4 md:px-40 px-10 items-center justify-center pt-10">
      <div v-if="castingsAvancesOpen" class="w-full flex flex-row gap-4 items-center  ">
        <UIcon name="i-heroicons-calendar-days" class="w-20 h-20" />
        <span class="flex flex-col">
          <span class="font-bold">Castings anticipés</span>
          Réservés aux 2A/3A/4A de l'emlyon et Centrale.
          <br />
          Inscription entre le 8 août et le 17 septembre
          <AnimatedNuxtLink text="Formulaire d'inscription" target="_blank"
            to="https://docs.google.com/forms/d/e/1FAIpQLSfSXolt-PMM8c7XBdwA6NHZtXAUnjglKZDcd4E10RjSWU9yvA/viewform"
            lefticon="i-heroicons-link" />
        </span>
      </div>

      <div v-if="castingsGenerauxOpen" class="w-full flex flex-row gap-4 items-center  ">
        <UIcon name="i-heroicons-calendar-days" class="w-20 h-20" />
        <span class="flex flex-col">
          <span class="font-bold">Castings généraux</span>
          Ouverts à tout élève de l'emlyon et Centrale. Inscription entre le 2 et le 15 octobre.
          <AnimatedNuxtLink text="Formulaire d'inscription" target="_blank"
            to="https://docs.google.com/forms/d/e/1FAIpQLSed9jeutgxnaGQW_zXS_MaxoS6piQT1gjiiagRBmLhnkInAHA/viewform"
            lefticon="i-heroicons-link" />
        </span>
      </div>

      <div v-if="castingsComplementairesOpen" class="w-full flex flex-row gap-4 items-center  ">
        <UIcon name="i-heroicons-calendar-days" class="w-20 h-20" />
        <span class="flex flex-col">
          <span class="font-bold">Castings complémentaires</span>
          Ouverts à tout élève de l'emlyon et Centrale. Inscription entre le 11 et le 17 novembre.
          <AnimatedNuxtLink text="Formulaire d'inscription" target="_blank"
            to="https://docs.google.com/forms/d/e/1FAIpQLSdtT2BXxHlYJc7uHNaKAfs79luDA6uqpJnoUdzY9-xR6QaEyQ/viewform"
            lefticon="i-heroicons-link" />
        </span>
      </div>
    </div>


    <div class="flex flex-col gap-4 md:px-40 px-10 items-center justify-center pt-10">
      Découvrez les postes

      <HeroCarousel v-for="pole, index in poles" :key="pole.name" :title="pole.name" :reversed="index % 2 == 0"
        :images="images[pole.imageFolder]">
        <p>
          {{ pole.description }}
        </p>
      </HeroCarousel>

    </div>
  </div>

</template>

<script setup lang="ts">
const castingsAvancesOpen = false;
const castingsGenerauxOpen = false;
const castingsComplementairesOpen = true;
const year = 2025;


const poles = [
  {
    name: "Danseur.euse",
    description: `Le pôle danse met les tableaux en mouvement et fait vibrer les spectateurs ! C’est aussi beaucoup de rires, d’ambiance et de bienveillance ! Peu importe votre niveau et votre style de danse (jazz, classique, hip hop, contempo ou autre !), tentez votre chance, on est open à tout ! L’objectif c’est avant tout de
vivre une expérience incroyable tous ensemble et de KIFFER !`,
    imageFolder: "danse"
  },

  /* Castings septembre */
  /*
  {
    name: "Acteur.rice chanteur.euse",
    description: `Incarnez un des personnages qui donneront vie à la Commuz’ 2025, et vivez une incroyable aventure artistique et humaine. Pas besoin d’expérience préalable, nous vous accompagnerons avec un coaching individuel en théâtre, en chant et en danse, pour faire de vous une bête de scène !`,
    imageFolder: "ac"
  },
  {
    name: "Choriste",
    description: `Les choristes sont essentiels pour donner de la force et du soutien à l’orchestre et aux AC : la clé de voûte qui sublime la musique. Ils sont aux nombres de huit ! Ainsi chaque harmonie résonne puissement et envahit la scène en charmant les oreilles de toutes et tous.`,
    imageFolder: "choristes"
  },
  {
    name: "Danseur.euse",
    description: `Le pôle danse met les tableaux en mouvement et fait vibrer les spectateurs ! C’est aussi beaucoup de rires, d’ambiance et de bienveillance ! Peu importe votre niveau et votre style de danse (jazz, classique, hip hop, contempo ou autre !), tentez votre chance, on est open à tout ! L’objectif c’est avant tout de
vivre une expérience incroyable tous ensemble et de KIFFER !`,
    imageFolder: "danse"
  },
  {
    name: "Muscien.ne",
    description: `Zbouing Pouet Boom Tchatcha Ting... Vous reconnaissez l’un de ces sons ? Vous avez votre place aux meilleurs pupitres de la Commuz', celui qui brille sous les projecteurs !!! Rejoingnez notre orchestre cette année, nous cherchons tous les instruments !`,
    imageFolder: "zikos"
  },
  {
    name: "Compositeur.rice",
    description: `Composer pour la Commuz’, c’est une expérience
unique, très prenante et parmi les plus gratifiantes qui soient. C’est simple, vous pourrez écrire les morceaux et musiques qui constitueront l’identité sonore du spectacle, et resteront gravés dans la mémoire des spectateurs et spectatrices bien après la fin des représentations !`,
    imageFolder: "compo"
  },
  {
    name: "Décorateur.rice",
    description: `Le pôle Décors est une initiation formidable à la Commuz’, pas de stress de la scène, pas de pression mise par les Respos et que du kiff. On y retrouve des personnes avec beaucoup de talents de bricolage (on sent que les gens ont fait Prépa Techno) et d’autres qui souhaitent s’initier à la bricole et qui grâce à notre pôle se sont découverts une âme d’artiste.`,
    imageFolder: "decors"
  },
  */
  {
    name: "Costumier.ère",
    description: `Le pôle costume est un pilier de la Commuz’ : il doit réaliser une centaine de costumes pour habiller les acteurs-chanteurs, les choristes, les danseurs, tout en s’inscrivant dans le thème, l’ambiance musicale et l’époque de la pièce. Du design à la réalisation des costumes, en passant par le choix des tissus et des accessoires, tout sera fait par vous si vous nous rejoignez !`,
    imageFolder: "costumes"
  },
  /*
  {
    name: "Son",
    description: "Vous souhaitez intégrer un pôle technique et développer de vraies compétences en manipulant du matériel professionnel ? Le pôle son vous ouvre les bras ! Confirmé ou débutant, armé de votre motivation et de votre bonne humeur, vous apprendrez comment sonoriser un orchestre entier avec du matériel sensationnel. Vous apprendrez aussi à mixer des musiques pour produire un album, à maîtriser les bruitages et à combattre les larsens.",
    imageFolder: "son"
  },
  {
    name: "Vidéo",
    description: `Vous souhaitez apprendre à faire de belles vidéos ou encore perfectionner vos compétences de montage, ce poste est fait pour vous ! Au sein du pôle visibilité, vous aurez l’opportunité de travailler avec tous les pôles et de leur créer des souvenirs indélébiles à travers des trailers ou en filmant la Commuz’ le soir des représentations.`,
    imageFolder: "video"
  },
  */
  {
    name: "Partenariats",
    description: `Le VP Partenariat à la Commuz, c’est le coup de pouce de tout le mandat pour obtenir des fonds servant à proposer un spectacle de qualité et de la nourriture pour les WER ! Cela permet de travailler avec tout le monde et d’apporter sa pierre à l’édifice sans nécessairement avoir besoin de talent artistique : venez avec l’envie de bien faire et vous pourrez vivre une expérience géniale au travers d’un projet annuel fabuleux !`,
    imageFolder: "partenariats"
  },
  /*
  {
    name: "Amour",
    description: `Imaginer, préparer et servir des petits repas sains et
équilibrés afin que les WER se déroulent parfaitement,
en s’assurant que le sourire soit présent sur les lèvres de
nos petits gambins, c'est le travail des VP Amour ! Mais au-delà de la nourriture, les VP Amour sont le lien invisible qui enlacent les Commuzards et les transformeront jours après jours en une seconde famille.
`,
    imageFolder: "amour"
  },
  */
  {
    name: "Lumière",
    description: `Le pôle Lumière, c’est le pôle qui s’occupe de A à Z de la mise en scène lumineuse de la Commuz’.  Ce pôle doit travailler en étroite collaboration avec les metteurs en scène, les coordinateurs artistiques et tous les autres pôles qui interviennent sur scène pour donner une cohérence lumineuse au spectacle ! Il imagine la scénographie lumineuse et la met en pratique le jour J !
Nous recrutons un VP lumière pour avoir un double regard sur la scénographie lumineuse. Vous serez formé à utiliser et programmer une console lumineuse digne des plus grands zéniths, accompagné avec un régisseur lumière.`,
    imageFolder: "lumiere"
  },
]

const imageFiles = import.meta.glob('public/images/castings/**/*');

const images: { [poleName: string]: string[] } = {};

for (const filepath in imageFiles) {
  const poleImageFolder = filepath.split("/")[4]
  if (!images[poleImageFolder]) images[poleImageFolder] = []

  // We remove /public from the url, as NuxtImage will search for the image in the public directory
  images[poleImageFolder].push(filepath.replace("/public", ""))
}
</script>