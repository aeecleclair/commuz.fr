<template lang="html">
  <div class="pane--media">
    <div class="pane__text_container">
      <img v-if="type == 'pane--media-left'" class="pane__img" :src="image">
      <div class="pane__text">
        <div v-html='text' />
        <div v-if="galerie || equipe || youtube" class="annee__links" style="justify-content: center" width="100%">
          <table>
            <tr align="center">
              <table cellspacing="10">
                <th>
                  <div v-if='deezer != ""'>
                    <a :href="deezer" @click="navigate">
                      <img src="/icons/Deezer.png" alt=""></a>
                  </div>
                </th>
                <th>
                  <div v-if='youtube != ""'>
                    <a :href="youtube" @click="navigate">
                      <img src="/icons/Youtube.png" alt=""></a>
                  </div>
                </th>
                <th>
                  <div v-if='spotify != ""'>
                    <a :href="spotify" @click="navigate">
                      <img src="/icons/Spotify.png" alt=""></a>
                  </div>
                </th>
              </table>
            </tr>
            <tr align="center">
              <table>
                <th>
                  <div v-if="galerie" class="button-link">
                    <router-link class="" :to="`/galerie/${annee}`"><img src="/icons/galerie.svg" alt="">Voir les
                      photos</router-link>
                  </div>
                </th>
                <th>
                  <div v-if="equipe" class="button-link">
                    <router-link class="" :to="`/equipe/${annee}`"><img src="/icons/equipe.svg" alt="">Voir
                      l'équipe</router-link>
                  </div>
                </th>
              </table>
            </tr>
          </table>
        </div>
      </div>
      <img v-if="type == 'pane--media'" class="pane__img" :src="image">


    </div>

    <img v-if="bgImage != ''" class="pane__bg" :src="bgImage">
  </div>
</template>

<script setup lang="ts">
defineProps<{
  bgImage: string,
  image: string,
  text: string,
  type: string,
  galerie: boolean,
  equipe: boolean,
  deezer: string,
  youtube: string,
  spotify: string,
  annee: number
}>();
</script>

<style lang="scss">
.pane--media,
.pane--right,
.pane--left,
.pane--media-left {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 1em;
  grid-template-columns: repeat(2, 1fr);
  ;
  grid-template-rows: minmax(500px, auto);

  @media only screen and (orientation: landscape) {
    grid-template-rows: 500px;
  }
}

.pane__bg {
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.pane__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2em;
  max-width: 60ch;
}


.pane--media,
.pane--media-left {
  .pane__img {
    height: auto;
    max-height: 400px;
    margin: 2em;
    max-width: min(100%, 600px);
  }

  .pane__text_container {
    grid-area: 1 / 1 / -1 / -1;
    width: 100%;
    height: 100%;
    display: flex;

    @media only screen and (max-width: 576px) {
      flex-direction: column;
      padding: 4em 2em 1em 2em;
    }

    align-items: center;
    justify-content: center;
  }

  .pane__bg {
    filter: brightness(0.25);
    grid-area: 1 / 1 / -1 / -1;
  }
}

.pane--media-left {
  background: linear-gradient(100deg, rgb(255, 170, 45), rgb(255, 76, 54) 100%);
}

.pane--left,
.pane--right {
  grid-row-start: 1;
  align-self: center;

  @media only screen and (min-width: 768px) {
    padding: 2em 4em;
  }

  .pane__text {
    background: rgba(0, 0, 0, 0.7);
  }

  .pane__bg {
    grid-area: 1 / 1 / -1 / -1;
  }
}

.pane--left {
  @media only screen and (min-width: 768px) {
    .pane__bg {
      grid-area: 1 / 2 / 2 / 5;
    }
  }

  .pane__text_container {
    grid-row-start: 1;
    grid-column: 1 / span 4;

    @media only screen and (min-width: 768px) {
      grid-column: 1 / span 3;
    }

    @media only screen and (min-width: 992px) {
      grid-column: 1 / span 2;
    }
  }
}

.pane--right {
  @media only screen and (min-width: 768px) {
    .pane__bg {
      grid-area: 1 / 1 / 2 / 4;
    }
  }

  .pane__text_container {
    grid-row-start: 1;
    grid-column: span 4 / -1;

    @media only screen and (min-width: 768px) {
      grid-column: span 3 / -1;
    }

    @media only screen and (min-width: 992px) {
      grid-column: span 2 / -1;
    }
  }
}

.annee__links {
  display: flex;
  flex-direction: row;
}
</style>
