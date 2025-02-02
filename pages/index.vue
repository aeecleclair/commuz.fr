<template>
  <div>
    <title>La Commuz'</Title>
    <Meta name="description"
      content="La Commuz' est une comédie musicale organisée chaque année depuis 20 ans par une équipe de près de 100 étudiants de l'École Centrale de Lyon et de l'EMLyon." />

    <IndexVideoTitle />

    <div class="flex flex-col gap-40 px-40 mt-30 pt-10 mb-40 snap-start">




      <UCard class="group py-10 my-5">
        <div class="flex flex-col items-center justify-center text-primary">
          <span class="text-xl text-gray-700">La Commuz' présente son spectacle 2024</span>

          <span
            class="text-5xl font-bold rounded-xl transition-all duration-500 bg-gradient-to-tl from-fuchsia-800 via-blue-500 to-cyan-500 bg-size-200 bg-pos-0 text-transparent group-hover:bg-pos-100 bg-clip-text mt-3">
            BACKSTAGE
          </span>

          <ULink to="/2024" active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mt-4">
            <span class="flex flex-row items-center space-x-2"><span>En savoir plus </span>
              <UIcon name="i-heroicons-arrow-long-right-solid" />
            </span>
          </ULink>
        </div>
      </UCard>

      <div class="flex flex-col gap-20">

        <HeroCarousel title=" La Commuz', c'est quoi ?" :images="[
          '/AaZ/IMG_1547.jpg',
          '/AaZ/IMG_2246.jpg',
          '/AaZ/IMG_5434.jpg',
          '/AaZ/IMG_5917.jpg',
          '/AaZ/IMG_6097.jpg',
          '/AaZ/IMG_6154.jpg',
        ]">
          <p>
            La Commuz' est une comédie musicale organisée chaque année depuis 20 ans par une équipe de près de 100
            étudiant&#183;e&#183;s de l'École Centrale de Lyon et de l'emlyon business school.
          </p>
          <p>
            La Commuz’ réunit chaque année plus de 1 200 spectateurs lors de quatre soirées de représentations au mois
            de
            mars.
          </p>
        </HeroCarousel>

        <HeroCarousel title="Un spectacle imaginé de A à Z" :reversed="true" :images="[
          '/AaZ/IMG_1547.jpg',
          '/AaZ/IMG_2246.jpg',
          '/AaZ/IMG_5434.jpg',
          '/AaZ/IMG_5917.jpg',
          '/AaZ/IMG_6097.jpg',
          '/AaZ/IMG_6154.jpg',
        ]">
          <p>
            De l'élaboration du scénario en passant par les chorégraphies, la composition et l'orchestration des
            musiques,
            la mise en place de l'éclairage et du son, la création des costumes et des décors…
          </p>
          <p>
            Tous les corps de métier du théâtre, du chant et de la danse sont réunis pour créer ce spectacle qui se veut
            d'une qualité professionnelle.
          </p>
        </HeroCarousel>

        <HeroCarousel title="Deux écoles, un projet commun" :images="[
          '/AaZ/IMG_1547.jpg',
          '/AaZ/IMG_2246.jpg',
          '/AaZ/IMG_5434.jpg',
          '/AaZ/IMG_5917.jpg',
          '/AaZ/IMG_6097.jpg',
          '/AaZ/IMG_6154.jpg',
        ]">
          <p>
            100 élèves aux talents variés issus de l'emlyon business school et de l'École Centrale de Lyon travaillent
            pendant un an pour offrir un spectacle unique.
          </p>
          <p>
            Du recrutement de l'équipe, à la fermeture du dernier rideau, chaque membre contribue au caractère
            authentique
            et inédit de ce grand projet.
          </p>
        </HeroCarousel>

      </div>

      <!-- Témoignages -->
      <UCard
        class="group py-10 flex flex-col items-center justify-center bg-gradient-to-tr from-commuz-900 to-commuz-500 border-none">
        <IndexQuote name="Frank Debouck &ndash; Directeur de l'École Centrale de Lyon entre 2011 et 2021"
          img-src="/images/homepage/debouck.jpg">
          J'ai pris hier soir un grand plaisir, le spectacle est de grande qualité, son, lumière, costumes magnifiques,
          décors, le tout au service d'artistes de talents : musiciens, danseurs, chanteurs, acteurs-chanteurs.
        </IndexQuote>

        <div class="h-10"></div>

        <IndexQuote name="Pascal Ray &ndash; Directeur de l'École Centrale de Lyon depuis 2021"
          img-src="/images/homepage/PascalRay.jpg">
          Tout est parfaitement pensé et orchestré pour produire un spectacle unique et d'une qualité exceptionnelle.
          N'hésitez-pas à rejoindre l'aventure Commuz' en soutenant le talent de nos étudiant.e.s. Et n'oubliez-pas de
          venir les applaudir sur scène. Merci pour eux !
        </IndexQuote>
      </UCard>
    </div>

    <!-- Sponsors -->
    <Sponsors />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "home",
});
</script>
