<template lang="html">
  <div>
    <title>La Commuz' - Partenaires</title>
    <Meta name="description" content="Venez soutenir la Commuz en devenant partenaire." />
    <div>
      <div id="plaquette">
        <p>
          Téléchargez notre
          <a class="inline-link" href="/partenariats/Plaquette_Partenariats_Commuz_2025.pdf" download>
            plaquette partenariats
          </a>,
          ou contactez notre responsable partenariat Pierre à l'adresse
          <a href="mailto:partenariat@commuz.fr">
            partenariat@commuz.fr
          </a>
        </p>
      </div>

      <div class="flex flex-col md:flex-row justify-center">
        <div v-for="partenaire in respoPartenariats" :key="partenaire.nom" class="flex flex-col items-center">
          <NuxtImg class="h-28 rounded-full pb-2" :src="partenaire.image" />
          <span class="">{{ partenaire.prenom + ' ' + partenaire.nom }}</span>
          <span class="">{{ partenaire.telephone }}</span>
        </div>
      </div>

      <div class=" m-8 flex flex-col items-center">
        <h2>Les coulisses de la Commuz' 2023</h2>

        <YouTubeVideo class="md:h-96" videoId="0in9oBqaI0I" />
      </div>

      <sponsors />
    </div>
  </div>
</template>

<script>
const respoPartenariats = {
  respo1: {
    prenom: "Pierre",
    nom: "Homsi",
    telephone: "07 66 64 90 20",
    mail: "commuzlyon@gmail.com",
    image: "/images/Partenaires/Pierre.jpeg",
  },
};

export default defineComponent({
  setup() {
    definePageMeta({
      layout: 'default',
    });
  },
  data: function () {
    return { respoPartenariats }
  },
});

</script>

<style lang="scss" scoped>
#plaquette {
  color: white;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  margin-bottom: 1rem;

  a {
    color: #ee8c04;
  }
}
</style>
