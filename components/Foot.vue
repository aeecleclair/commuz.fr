<template>
  <footer>
    <img id="footer__logo" src="/logos/commuz-masque-logo-gris.png" alt="Logo Commuz' Noir">
    <div id="social">
      <ul>
        <li><a class="inline-link" target="_blank" rel="noopener"
            href="https://www.facebook.com/commuzlyon">Facebook</a>
        </li>
        <li><a class="inline-link" target="_blank" rel="noopener"
            href="https://www.instagram.com/commuzlyon/">Instagram</a></li>
        <li><a class="inline-link" target="_blank" rel="noopener"
            href="https://www.youtube.com/channel/UCDZ2LRLcQB0MZ6hkB_RNDuQ">YouTube</a></li>
        <li><a class="inline-link" target="_blank" rel="noopener"
            href="https://www.linkedin.com/company/commuz">LinkedIn</a></li>
        <li>
          <NuxtLink class="inline-link" to="/links">
            Nos liens
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div id="legal">
      <h3>Mentions légales</h3>
      <p>La Commuz' est un projet artistique commun à l'École centrale de Lyon et à emlyon business school.<br>
        Elle constitue également un club artistique de l'Association des Élèves de l'École Centrale de Lyon.</p>
    </div>
    <div id="contact">
      <h3>Contacts</h3>
      <p>Pour toute question, contactez <a class="inline-link"
          href="mailto:pierrick.durand-glouchkoff@etu.ec-lyon.fr; johanna.dussoux@edu.em-lyon.com">Pierrick, Johanna,
          Vincent et Romain</a>
        par
        mail ou sur notre page <a class="inline-link" target="_blank" rel="noopener"
          href="https://www.facebook.com/commuzlyon">Facebook</a>. <br>
        Pour toute demande relative aux partenariats, contactez notre responsable partenariats <a class="inline-link"
          href="mailto:partenariat@commuz.fr">Gwladys</a>.</p>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background: #262626;
  color: #ababab;
  fill: #ababab;
  font-size: 0.9rem;
  box-shadow: inset 0px 3px 3px -2px rgba(0, 0, 0, 0.75);
  padding: 3em 2em;

  h3 {
    font-size: 1em;
    line-height: 1em;
    margin-bottom: 0.7em;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.3em;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  grid-gap: 2em;

  @media only screen and (min-width: 576px) {
    grid-template-columns: 1fr 2fr;
  }

  @media only screen and (min-width: 768px) {
    grid-gap: 1em 3em;
    grid-template-columns: 1fr 2fr 2fr;
  }

  #footer__logo {
    max-width: 100%;
    max-height: 120px;
    grid-area: 2 / 1 / 3 / 2;

    @media only screen and (min-width: 576px) {
      grid-area: 1 / 1 / 3 / 2;
    }

    justify-self: center;
    align-self: center;
  }
}

#social {
  grid-area: 1 / 1 / 2 / 3;
  justify-self: center;

  @media only screen and (min-width: 768px) {
    justify-self: auto;
    grid-area: 1 / 2 / 2 / 4;
  }

  display: flex;

  ul {
    list-style: none;
    font-size: 1em;
    line-height: 1em;
    padding-left: 0;

    li {
      display: inline;

      &:not(:first-child) {
        margin-left: 1ch;
      }

      a {
        color: #ee8c04;
      }
    }
  }
}

#contact {
  grid-area: 2 / 2 / 3 / 3;

  @media only screen and (min-width: 768px) {
    grid-area: 1 / 3 / 3 / 4;
  }

  dt {
    font-weight: bold;
    margin-bottom: 0.1em;
    margin-top: 0.5em;
  }

  .inline-link {
    &::before {
      top: 1.1em;
    }

    white-space: nowrap;
    color: white;

  }
}

#legal {
  // grid-area: 2 / 1 / 3 / 3;
  display: none;

  @media only screen and (min-width: 768px) {
    grid-area: 2 / 2 / 3 / 3;
    display: block;
  }
}
</style>
