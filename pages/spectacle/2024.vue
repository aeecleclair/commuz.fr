<template>
    <title>La Commuz' - Commuz' 2024</title>
    <Meta name="description" content="La Commuz présente son spectacle de 2024." />
    <div>
        <!-- Description -->
        <div id="home__hero">
            <img id="home__hero__logo" src="/Commuz2024/images/watermark-2024.png" alt="Commuz">
            <a id="home__hero__scroll"
                onclick="window.scrollTo(0,document.querySelector('#home__hero ~ div').offsetTop)"><img
                    src="/icons/scroll-down.svg" alt="Flèche basse">Découvrir</a>
            <!-- Image d'en tête -->
            <picture id="home__hero_bg">
                <source id="home__hero_bg" media="(min-width:560px)" srcset="/Commuz2024/images/poster-commuz2024.png">
                <img id="home__hero_bg" src="/Commuz2024/images/affiche--2024.png">
            </picture>
        </div>

        <pane id="infos1" :type="'pane--media-left'" :image="'/Commuz2024/images/MeS.png'" :text="item.text1" />
        <pane id="infos2" :type="'pane--media'" :image="'/Commuz2024/images/ACs.png'" :text="item.text2" />
        <pane id="infos3" :type="'pane--media-left'" :image="'/Commuz2024/images/Ensembles.png'" :text="item.text3" />
        <pane id="infos4" :type="'pane--media'" :image="'/Commuz2024/images/Tombola.jpg'" :text="item.text4" />


        <!-- Trailer -->
        <div style="text-align:center; margin:2em">
            <h1>Trailer de l'édition 2024 !</h1>
            <iframe id="youtube" width="560" height="315" src="https://www.youtube.com/embed/cxJJHY5vGNk"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen />
        </div>
    </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'

const data = {
    text1:
        "<h2>Synopsis</h2>" +
        "<p align=justify >Hollywood, 1964. Le Highlight Show, le talk show le plus populaire des Etats-Unis, est au sommet de sa gloire. Mais au cours d’une énième émission, son host Alec Keaton décide subitement de prendre sa retraite.</p>",
    text2:
        "<p align=justify>Face à l’urgence de la situation, la productrice Norma Desmond mettra tout en œuvre pour assurer le maintien de l’émission. Mais c’est sans compter le désir de vengeance de son ex-mari Paul, prêt à tout pour détruire le Highlight, et les machinations du “Réseau”, une mystérieuse organisation qui risque bien de révéler au grand jour les secrets les plus intimes de nos héros.</p>" +
        "<p align=justify>Derrière les paillettes, Backstage explore les coulisses du showbusiness, entre amours, passions et ambitions.</p>",
    text3:
        "<h2>Informations pratiques</h2>" +
        "<p>La Commuz' vous invite à nouveau à voyager les 8-9-10 mars !</p>" +
        "<p> <U>Adresse :</U> Théâtre Astrée, 6 Avenue Gaston Berger, 69100 Villeurbanne (accessible en tramway)</p>" +
        "<p> <U> Horaire d'ouverture des portes </U> : </p>" +
        "<ul><li> Vendredi : 19h </li> <li> Samedi : 19h </li> <li> Dimanche : 17h</li> </ul>" +
        "<p> Le spectacle commence 30 minutes après l'ouverture des portes.</p>" +
        "<center> <a target='_blank' rel='noopener' href='https://collecte.io/commuz-2024-global-3824258/fr' class='inline-link'> Pour acheter sa place c'est ici ! </a> </center>",
    text4:
        "<h2>La Grande Tombola Commuz'</h2>" +
        "<p> À l'aide de ses partenaires, la Commuz' 2024 vous propose une tombola pour gagner de nombreux lots !</p>" +
        "<p> Vous pouvez tenter de gagner des places de paintball, des places de cinémas, des goodies au thème de la Commuz' 2024, et bien d'autres encore... </p>" +
        "<p> <U> Date du tirage: 13/03 <U> </p>" +
        "<p> <U> Prix du ticket: 2€ <U> </p>" +
        "<center> <a target='_black' rel='noopener' href='https://collecte.io/commuz-2024-tombola-3825547/fr' class='inline-link'> Pour participer c'est ici ! </a> </center>"

};

const information = {
    Sammy: {
        persona: "Sammy",
        description:
            "",
        notes: "",
        image: "/Commuz2024/images/Come.png",
        ID: 0
    },
    Norma: {
        persona: "",
        description:
            "",
        notes: "",
        image: "/Commuz2024/images/Del_re.png",
        ID: 1
    },
    Paul: {
        persona: "",
        description:
            "",
        notes: "",
        image: "/Commuz2024/images/K2.png",
        ID: 2
    },
    Marc: {
        persona: "",
        description:
            "",
        notes: "",
        image: "/Commuz2024/images/Lucie.png",
        ID: 3
    },
    Alec: {
        persona: "",
        description:
            "",
        notes: "",
        image: "/Commuz2024/images/Gueulphor.png",
        ID: 4
    },
    Hermine: {
        persona: "",
        description:
            "",
        notes: "",
        image: "/Commuz2024/images/Hermine.png",
        ID: 4
    }
};

const background = "/Commuz2024/images/poster-commuz2024.png"

export default defineComponent({

    setup() {
        definePageMeta({
            name: "App",
            layout: 'default',
        });
    },
    data: function () {
        return {
            item: data,
            postes: information,
            bgImg: background
        };
    },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    height: 100vh;
    background: linear-gradient(100deg, #ee8c04, #e83a00 40%);

    /* mocking native UI */
    // cursor: default !important; /* remove text selection cursor */
    user-select: none;
    /* remove text selection */
    // user-drag: none; /* disbale element dragging */
    display: flex;
    align-items: center;
    justify-content: center;
}

.Main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
}

#home__hero {
    position: relative;
    width: 100%;
    height: 80vh;

    @media (orientation: landscape) {
        height: 100vh;
    }

    margin-bottom: 0.5em;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr auto 1fr;
    align-items: center;
    justify-items: center;

    #home__hero__logo {
        grid-area: 2 / 1 / 3 / -1;
        z-index: 1;
        width: 95%;

        @media (min-width: 992px) {
            width: 75%;
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

.carousel-item {

    .photos {
        height: 500px;
        width: 500px;
    }

    .title {
        font-size: 22;
        font-weight: bold;
    }

    .description {
        font-size: 18;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 600px;
    }

}

.inline-link {
    color: var(--pink);
    text-decoration: none;
    font-weight: bold;
}

h2 {
    text-align: center;
}

#youtube {
    max-width: 100%;
}
</style>