<template>
  <section id="sponsors">
    <div id="sponsors__text">
      <h1>Ils nous ont soutenus</h1>
      <p>Vous aussi, entrez en scène à nos côtés !</p>
      <p>Téléchargez la <a class="inline-link" href="/Plaquette-2024.pdf" download>plaquette sponsors</a>, ou contactez
        notre responsable partenariats Gwladys à l'adresse <a
          href="mailto:partenariat@commuz.fr">partenariat@commuz.fr</a></p>

    </div>
    <div id="sponsors__logos">
      <a href="https://www.ec-lyon.fr/" target="_blank" rel="noopener"><img src="/sponsors/ecl.png"
          alt="Logo de l'École Centrale de Lyon"></a>
      <a href="https://www.em-lyon.com" target="_blank" rel="noopener"><img src="/sponsors/em_corpo.svg"
          alt="Logo de la corpo emlyon business school"></a>
      <a href="http://www.crous-lyon.fr/" target="_blank" rel="noopener"><img src="/sponsors/crous.png"
          alt="Logo du Crous de Lyon"></a>
      <a href="https://www.universite-lyon.fr/" target="_blank" rel="noopener"><img src="/sponsors/udl.svg"
          alt="Logo de l'Université de Lyon"></a>
      <a href="https://www.lyon.fr/" target="_blank" rel="noopener"><img src="/sponsors/vdl.png"
          alt="Logo de la ville de Lyon"></a>
    </div>
  </section>
</template>

<style lang="scss">
#sponsors {
  color: white;
  padding: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  #sponsors__text {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 0.5em;
    }
  }

  a {
    color: #ee8c04;
  }

  #sponsors__logos {
    display: flex;
    width: 80%;

    @media only screen and (min-width: 992px) {
      width: 60%;
    }

    flex-wrap: wrap;
    justify-content: center;

    img {
      max-height: 100px;
      margin: 1rem;
    }
  }

  #partenaires_photo {
    display: flex;
    width: 80%;

    @media only screen and (min-width: 992px) {
      width: 60%;
    }

    flex-wrap: wrap;
    justify-content: center;

    img {
      max-height: 100px;
      margin: 1rem;
    }
  }
}
</style>