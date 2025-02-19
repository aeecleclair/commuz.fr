<template>
    <div id="home__hero">
        <img id="home__hero__logo" src="/images/homepage/Commuz_Titre.png" alt="Commuz">
        <a id="home__hero__scroll" onclick="window.scrollTo(0,document.querySelector('#home__hero ~ div').offsetTop)"
            class="flex flex-row">
            <img src="/icons/scroll-down.svg" alt="Flèche basse">Découvrir
        </a>

        <video id="home__hero_bg" poster="/images/homepage/danseurs-2019.jpg" autoplay loop>
            <source src="/videos/video-intro.webm" type="video/mp4">
        </video>
    </div>
</template>


<style lang="scss" scoped>
#home__hero {
    position: relative;
    width: 100%;
    height: 80vh;

    @media (orientation: landscape) {
        height: 100vh;
    }

    margin-bottom: 2em;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr auto 1fr;
    align-items: center;
    justify-items: center;

    #home__hero__logo {
        grid-area: 2 / 1 / 3 / -1;
        z-index: 1;
        width: 75%;

        @media (min-width: 992px) {
            width: 50%;
        }
    }

    #home__hero__scroll {
        grid-area: 3 / 1 / -1 / -1;
        z-index: 1;
        align-self: flex-start;
        // color: #e6e6e6;
        font-size: 1.5em;
        margin-top: 1.5em;
        cursor: pointer;
        user-select: none;

        img {
            transition: transform 0.2s ease-out;
        }

        &:hover img {
            transform: translateY(5px);
            transition: transform 0.3s cubic-bezier(0.42, 0, 0, 2.42);
        }
    }

    #home__hero_bg {
        grid-area: 1 / 1 / -1 / -1;
        z-index: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        filter: brightness(0.7);
    }
}
</style>