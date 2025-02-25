<template lang="html">
  <title>La Commuz' - Equipe</title>
  <Meta name="description"
    content="Chaque année, c'est un peu moins d'une centaine de d'étudiants qui font vivre le spectacle." />
  <div>
    <div id="years-list">
      <router-link v-for="(annee, id) in anneesEquipes" :key="id" class="inline-link" :to="`/equipe/${annee}`"
        active-class="selected" exact>{{
          annee }}</router-link>
    </div>
    <NuxtPage />
  </div>
</template>

<script>
const anneesEquipes = ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016']

export default {
  setup() {
    definePageMeta({
      layout: 'default',
    });
  },
  data: function () {
    return { anneesEquipes }
  },
};
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

.section {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  padding: 0 2em;

  h2 {
    align-self: center;
    font-size: 1.1em;
  }
}

.button-link {
  margin-top: 1em;
}

.pane--media~.section {
  margin-top: 5rem;
}

.section__description {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  img {
    margin-right: 1em;
    max-height: 100px;
    max-width: 100px;
  }

  h2 {
    margin-bottom: 0;
  }
}

.section__membres {
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.trombi_membre {
  margin: 1em;
  display: grid;
  justify-items: center;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: auto;

  img {
    grid-area: 1 / 1 / 2 / 2;
    border-radius: 50%;
    height: 150px;
    margin-bottom: 1em;
  }

  .membre_apparition {
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .membre_apparition:hover {
    opacity: 1;
  }

  p {
    grid-row-start: 2;
    text-align: center;
    font-size: 0.8em;
    line-height: 1.2em;
  }
}
</style>
