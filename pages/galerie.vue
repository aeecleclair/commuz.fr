@@ -1,125 +0,0 @@
<template lang="html">
  <div>
    <title>La Commuz' - Galerie</title>
    <Meta name="description" content="Retour en image sur les quelques dernières années." />
    <div id="years-list">
      <router-link v-for="(annee, id) in anneesGalerie" :key="id" class="inline-link" :to="`/galerie/${annee}`"
        active-class="selected" exact>{{
          annee }}
      </router-link>
    </div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
const imagesFiles = import.meta.glob('./public/images/galeries/**')
console.log(imagesFiles)

const years = new Set<string>();

for (const filepath in imagesFiles) {
  // Paths wil have the format : /public/images/galeries/2024/94.jpg, we want to keep 2024
  years.add(filepath.split("/")[4])
}

const anneesGalerie = Array.from(years).sort().reverse();

export default defineComponent({
  setup() {
    definePageMeta({
      layout: 'default',
    });
  },
  data: function () {
    return { anneesGalerie };
  },
});
</script>

<style lang="scss">
#years-list {
  padding: 1rem 5rem 3rem 5rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .selected {
    color: white;
  }

  @media only screen and (max-width: 992px) {
    font-size: .7em;
    justify-content: center;
  }

  a {
    margin-right: 0.8em;
    font-size: 1.9em;
    color: rgb(120, 120, 120);

    &.nuxt-link-active {
      color: white;
    }
  }
}

.galerie_grid {
  width: 100%;
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 5px;
  justify-content: center;

  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: calc(0.5 * 2/3 * 100vw);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(1/3 * 2/3 * 100vw);
  }

  @media (min-width: 1199px) {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: calc(1/5 * 2/3 * 100vw);
  }
}

.big-image {
  grid-area: span 2 / span 2;
}

.small-image {
  grid-area: span 1 / span 1;
}

.galerie_grid__entry {
  background-color: #2a0917;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}


.fade-in {
  animation: fadeIn 0.6s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fullscreen-v-img {
  z-index: 100;
}
</style>
