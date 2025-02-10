<template>
  <nav class="navbar">
    <ul class="navbar__navs">
      <li class="navbar__item">
        <NuxtLink active-class="navbar__link--active" to="/" class="navbar__link"><img src="/logos/logo.svg" alt=""
            width="37.44" height="48"></NuxtLink>
      </li>
      <li v-if="castingOpen" class="navbar__item">
        <NuxtLink active-class="navbar__link--active" to="/castings" class="navbar__link">Castings</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink active-class="navbar__link--active" to="/spectacle/2024" class="navbar__link">Commuz' 2024</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink active-class="navbar__link--active" to="/spectacle" class="navbar__link">Le spectacle</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink active-class="navbar__link--active" to="/galerie/2024" class="navbar__link">Les photos</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink active-class="navbar__link--active" to="/equipe/2024" class="navbar__link">L'équipe</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink active-class="navbar__link--active" to="/partenariats" class="navbar__link">Partenariats</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
/*
Set `castingOpen` to true to enable the casting page link in the navigation bar. It will also show a card "La Commuz' recrute" on the main page
*/
const castingOpen = useState('castingOpen')
castingOpen.value = false
</script>

<style lang="scss">
.navbar {
  background: rgba(0, 0, 0, 0.5);
  border-bottom: solid 0.3px rgba(0, 0, 0, 0.4);
  z-index: 10;
  width: 100%;
}

.navbar.abs {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.navbar__navs {
  list-style-type: none;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;

  @media only screen and (max-width: 992px) {
    font-size: 0.8em;
    justify-content: center;
  }
}

.navbar__link {
  text-decoration: none;
  fill: white;
  color: white;
  margin-right: 0.25rem;

  svg {
    padding: 0.25rem;
    margin-right: 0.25rem;

    path {
      fill: inherit;
    }
  }
}

.navbar__item:first-child {
  margin: 0 7px;
}

.navbar__item:not(:first-child) .navbar__link {
  padding: 0.5rem;
  position: relative;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    opacity: 0.6;
    background: #ee8c04;
    transform: scale3d(0, 1, 1);
    transform-origin: 0% 50%;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:hover {
    &::before {
      transform: scale3d(1, 1, 1);
    }
  }
}

.navbar__link--active {
  color: #ee8c04
}
</style>