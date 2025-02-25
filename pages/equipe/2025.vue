<template lang="html">
    <div>
        <pane type="pane--media" :bg-image="presentation.bgImage" :image="presentation.image"
            :text="presentation.text" />
        <div v-for="pole in equipe" :key="pole.pole" class="section">
            <div class="section__description">
                <NuxtImg :src="pole.logo" alt="" />
                <h2>{{ pole.pole }}</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in pole.personnes" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2025/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>












    </div>
</template>

<script>
const presentation = {
    text: `
        <h2>2025 - Face au Mur</h2>
        <p>
            <span class="text-[var(--redLight2025)]">Berlin, 1989</span>.
            Trois jours après la chute du Mur, tandis que la Stasi s’empresse
            d’effacer les traces de ses crimes, un père retrouve enfin sa famille à l’Est après cinq ans
            d’absence. Mais ces retrouvailles sont vite troublées par de lourds secrets.
        </p>
        <p>
            À l’image de la société allemande, la famille Neumann est tiraillée entre l’espoir d’un
            futur meilleur et des fractures qui semblent irréparables. Entre trahisons familiales et
            secrets d’État, comment se reconstruire quand le passé refuse de s’effacer ?
        </p>
`,


    bgImage: '/images/equipes/equipe--2025.jpg',
    image: '/images/affiches/affiche--2025.jpg'
}

const equipe = {
    bureau:
    {
        pole: 'Bureau',
        logo: '/logos/poles/2024/bureau.png',
        personnes:
            [
                {
                    role: 'Président',
                    nom: 'Pierrick DURAND-GLOUCHKOFF',
                    photo: 'Buro - Pierrick.jpg'
                },
                {
                    role: 'Présidente',
                    nom: 'Johanna DUSSOUX',
                    photo: 'Buro - Jo.jpg'
                },
                {
                    role: 'Secrétaire Générale',
                    nom: "Vincent ROUARET",
                    photo: 'Buro - Vincent.jpg'
                },
                {
                    role: 'Trésorier',
                    nom: 'Romain MÉAUX',
                    photo: 'Buro - Romain.jpg'
                },
            ],
    },


    visibilite: {
        pole: 'Visibilité',
        logo: '/logos/poles/2024/visibilite.png',
        personnes: [
            {
                role: 'Communication',
                nom: 'Eléonore MALICORNET',
                photo: 'Visi - Eleonore.jpg'
            },
            {
                role: 'Communication',
                nom: 'Julien GONIN',
                photo: 'Visi - Julien.jpg'
            },
            {
                role: 'Webmaster',
                nom: 'Armand DIDIERJEAN',
                photo: 'Visi - Armand.jpg'
            },
            {
                role: 'Respo Vidéo',
                nom: 'Lou-Anne DELADOEUILLE',
                photo: 'Visi - Lou-Anne.jpg'
            },
            {
                role: 'Vidéo',
                nom: 'Dorian JACQUIN',
                photo: 'Visi - Dorian.jpg'
            },
            {
                role: 'Respo Partenariats',
                nom: 'Gwladys VOISIN',
                photo: 'Visi - Gwladys.jpg'
            },
            {
                role: 'Partenariats',
                nom: 'Camille FERVEUR',
                photo: 'Visi - Camille.jpg'
            },
            {
                role: 'Partenariats',
                nom: 'Guillaume FRANCHI',
                photo: 'Visi - Termo.jpg'
            },
            {
                role: 'Star',
                nom: 'Bro DOUAI',
                photo: 'Bro Douai - Star.jpg'
            },
        ]
    },

    scenario: {
        pole: 'Scénario',
        logo: '/logos/poles/2024/scenario.png',
        personnes: [
            {
                role: 'Scénariste',
                nom: 'Coline LANJARD',
                photo: 'Scénariste - Coline.jpg'
            },
            {
                role: 'Scénariste',
                nom: 'Alix LAROCHE',
                photo: 'Scénariste - Alix.jpg'
            },
            {
                role: 'Scénariste',
                nom: 'Marie VOILAND',
                photo: 'Scénariste - Marie.jpg'
            },
            {
                role: 'Scénariste',
                nom: 'Arièle ELIARD',
                photo: 'Scenariste - Ariele.jpg'
            }
        ]
    },
    mes: {
        pole: 'Direction Artistique',
        logo: '/logos/poles/2024/mes.png',
        personnes: [
            {
                role: 'Coordinatrice artistique',
                nom: 'Livia PALMADE',
                photo: 'DA - Livia + Sarah.jpg'
            },
            {
                role: 'Coordinatrice artistique',
                nom: 'Sarah MARTINOTTI',
                photo: 'DA - Livia + Sarah (2).jpg'
            },
            {
                role: 'Metteuse en scène',
                nom: 'Hermine TOLLET',
                photo: 'DA - Hermine.jpg'
            },
            {
                role: 'Metteur en scène',
                nom: 'Côme LAROCHE',
                photo: 'DA - Côme.jpg'
            }
        ]
    },
    ac: {
        pole: 'Acteurs-chanteurs',
        logo: '/logos/poles/2024/ac.png',
        personnes: [
            {
                role: 'Acteur-chanteur',
                nom: 'Clément RONDEPIERRE',
                photo: 'AC - Clément.jpg'
            },
            {
                role: 'Actrice-chanteuse',
                nom: 'Flora DANG-NHU',
                photo: 'AC - Flora + Marco.jpg'
            },
            {
                role: 'Actrice-chanteuse',
                nom: 'Line VANNIER',
                photo: 'AC - Hardy.jpg'
            },
            {
                role: 'Acteur-chanteur',
                nom: 'Marc-Antoine CARPENTIER',
                photo: 'AC - Flora + Marco.jpg'
            },
            {
                role: 'Actrice-chanteuse',
                nom: 'Margaux ALOIN',
                photo: 'AC - Margaux.jpg'
            },
            {
                role: 'Acteur-chanteur',
                nom: 'Mathis BOUTAULT',
                photo: 'AC - Mathoudoux.jpg'
            }
        ]
    },
    chant: {
        pole: 'Chant',
        logo: '/logos/poles/2024/choristes.png',
        personnes: [
            {
                role: 'Respo chant',
                nom: 'Mathilde CHANTRE',
                photo: 'Chant - Mathilde.jpg'
            },
            {
                role: 'Respo chant',
                nom: 'Marguerite DELCOURT',
                photo: 'Chant - Marguerite.jpg'
            },
            {
                role: 'Chant',
                nom: 'Benoît GARREL',
                photo: 'Chant - Vigho.jpg'
            },
            {
                role: 'Chant',
                nom: 'Clarence RAKOTOBE',
                photo: 'Chant - Lindy.jpg'
            },
            {
                role: 'Chant',
                nom: 'Dune COMBET',
                photo: 'Chant - Pi_ky.jpg'
            },
            {
                role: 'Chant',
                nom: 'Emy SANSON',
                photo: 'Chant - Ipso.jpg'
            },
            {
                role: 'Chant',
                nom: 'Louis BRUNO',
                photo: 'Chant - Stawss.jpg'
            },
            {
                role: 'Chant',
                nom: 'Samuel COHEN',
                photo: 'Chant - Dutopi.jpg'
            }
        ]
    },

    composition: {
        pole: 'Composition',
        logo: '/logos/poles/2024/composition.png',
        personnes: [
            {
                role: 'Respo compositeur',
                nom: 'Mattéo BEVILACQUA',
                photo: 'Compo - Cyhagha.jpg'
            },
            {
                role: 'Respo compositeur',
                nom: 'Erik DELAUNAY',
                photo: 'Compo - Erik.jpg'
            },
            {
                role: 'Compositeur',
                nom: 'Baptiste FONTANEY',
                photo: 'Compo - Brag.jpg'
            },
            {
                role: 'Compositeur',
                nom: 'François DE MONTS',
                photo: 'Compo - François.jpg'
            },
            {
                role: 'Compositeur',
                nom: 'Maxime BOURGEOIS',
                photo: 'Compo - Bolso.jpg'
            }
        ]
    },

    zikos: {
        pole: 'Musique',
        logo: '/logos/poles/2024/zikos.png',
        personnes: [
            {
                role: 'Chef d\'orchestre',
                nom: 'Colin AUBONNET',
                photo: 'Zikos - Dilat.jpg'
            },
            {
                role: 'Chef d\'orchestre',
                nom: 'Flavio SESTU',
                photo: 'Zikos - Flavio.jpg'
            },
            {
                role: 'Piano',
                nom: 'Lyna May MOKRANI',
                photo: 'Zikos - Adhi.jpg'
            },
            {
                role: 'Batterie',
                nom: 'Théo MERANGER',
                photo: 'Zikos - Théo.jpg'
            },
            {
                role: 'Guitare',
                nom: 'Felix KALIL',
                photo: 'Zikos - Felix.jpg'
            },
            {
                role: 'Basse',
                nom: 'Victoria FALCONE',
                photo: 'Zikos - Vicky + Modération.jpg'
            },
            {
                role: 'Flûte',
                nom: 'Anne-Isabelle DE VILLEMAGNE',
                photo: 'Zikos - Anne Isa.jpg'
            },
            {
                role: 'Flûte',
                nom: 'Léa MOOTHOOCARPEN',
                photo: 'Zikos - Léa.jpg'
            },
            {
                role: 'Hautbois',
                nom: 'Antide LEFEVRE',
                photo: 'Zikos - Khosto.jpg'
            },
            {
                role: 'Clarinette',
                nom: 'Maxime BEHOCARAY',
                photo: 'Zikos - Maxime B.jpg'
            },
            {
                role: 'Clarinette',
                nom: 'Maxime PETER',
                photo: 'Zikos - Maxime P.jpg'
            },
            {
                role: 'Trompette',
                nom: 'Maxime BOURGEOIS',
                photo: 'Compo - Bolso.jpg'
            },
            {
                role: 'Sax Alto',
                nom: 'Alix ORMANCEY',
                photo: 'Zikos - Baila.jpg'
            },
            {
                role: 'Contrebasse',
                nom: 'Gauthier DECOUTURE',
                photo: 'Zikos - Modération + Vicky.jpg'
            },
            {
                role: 'Violoncelle',
                nom: 'Adele TEYSSIER',
                photo: 'Zikos - Fetah.jpg'
            },
            {
                role: 'Violon',
                nom: 'Maxime DAMPIERRE',
                photo: 'Zikos - Sheper.jpg'
            },
            {
                role: 'Violon',
                nom: 'Lyna REBAI',
                photo: 'Zikos - Adhi.jpg'
            }
        ]
    },

    danse: {
        pole: 'Danse',
        logo: '/logos/poles/2024/danse.png',
        personnes: [
            {
                role: 'Respo danse',
                nom: 'Marion TOURCHICK',
                photo: 'Danse - Marion + Josie.jpg'
            },
            {
                role: 'Respo danse',
                nom: 'Joséphine BUTTY',
                photo: 'Danse - Marion + Josie.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Alix ESPITALIER-NOËL',
                photo: 'Danse - Alix.jpg'
            },
            {
                role: 'Danseur',
                nom: 'Brieuc SAVORNIN',
                photo: 'Danse - Brieuc.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Cécilia TEKNETZIAN',
                photo: 'Danse - Cécilia.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Claire JOLY',
                photo: 'Danse - Clax.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Eléonore DAVID',
                photo: 'Danse - Eleonore.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Fanny LOM',
                photo: 'Danse - Lerry.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Lise LE BLÉVENNEC',
                photo: 'Dance - Lise.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Marie FECK',
                photo: 'Danse - Marie.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Marion LEGAIT',
                photo: 'Danse - Marion L.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Charline MEJEAN',
                photo: 'Danse - Charline.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Violette MOREL',
                photo: 'Danse - Violette.jpg'
            }
        ]
    },

    costumes: {
        pole: 'Costumes',
        logo: '/logos/poles/2024/costumes.png',
        personnes: [
            {
                role: 'Respo costumes',
                nom: 'Aurélien BLANCHET',
                photo: 'Costumes - Lafé.jpg'
            },
            {
                role: 'Respo costumes',
                nom: 'Margot MAUNY',
                photo: 'Costumes - Liba.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Audrey TEIXEIRA',
                photo: 'Costumes - Neyla.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Clémence CHAURIS',
                photo: 'Costumes - Mhancy.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Joséphine BREITWILLER',
                photo: 'Costumes - Lektra.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Julia GASNIER',
                photo: 'Costumes - Ledzi.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Lou TAFFANEL',
                photo: 'Costumes - Lou.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Sélène CHAUSSON',
                photo: 'Costumes - Sélène.jpg'
            }
        ]
    },

    decors: {
        pole: 'Décors',
        logo: '/logos/poles/2024/decors.png',
        personnes: [
            {
                role: 'Respo décors',
                nom: 'Adrien FALOURD',
                photo: 'Décors - Shall.jpg'
            },
            {
                role: 'Respo décors',
                nom: 'Elliot MALHERBES',
                photo: 'Décors - Elliot.jpg'
            },
            {
                role: 'Décorateur',
                nom: 'Adrien LEMEILLE',
                photo: 'Décors - Nüjan.jpg'
            },
            {
                role: 'Décoratrice',
                nom: 'Apolline MATTEÏ',
                photo: 'Décors - Zoom.jpg'
            },
            {
                role: 'Décoratrice',
                nom: 'Ariane KERAUDREN',
                photo: 'Décors - Nerissou.jpg'
            },
            {
                role: 'Décoratrice',
                nom: 'Colombe LOVITON',
                photo: 'Décors - Sheel.jpg'
            },
            {
                role: 'Décoratrice',
                nom: 'Marine SAUREL',
                photo: 'Décors - Marine.jpg'
            },
            {
                role: 'Décoratrice',
                nom: 'Thaïs ORIOL',
                photo: 'Décors - Kala.jpg'
            },
            {
                role: 'Décorateur',
                nom: 'David WAGNER',
                photo: 'Décors - Bheydai.jpg'
            }
        ]
    },

    technique: {
        pole: 'Lumière et son',
        logo: ' /logos/poles/2024/technique.png',
        personnes: [
            {
                role: 'Respo lumière',
                nom: 'Marius GONIDEC',
                photo: 'Lumières - Marius.jpg'
            },
            {
                role: 'Lumière',
                nom: 'Leny-Jazz MAZOYER',
                photo: 'Lumières - Leny-Jazz.jpg'
            },
            {
                role: 'Respo son',
                nom: 'Thibaut AGOSSOU-COFFI',
                photo: 'Son - Dhenza.jpg'
            },
            {
                role: 'Respo son',
                nom: 'Raphaël PADOVANI',
                photo: 'Son - Zeepee.jpg'
            },
            {
                role: 'Son',
                nom: 'Mehdi BENJELLOUN',
                photo: 'Son - Mehdi.jpg'
            },
            {
                role: 'Son',
                nom: 'Roman PINO',
                photo: 'Son - Roman.jpg'
            },
            {
                role: 'Son',
                nom: 'Sibylle VERGNON',
                photo: 'Son - Tiyah.jpg'
            },
            {
                role: 'Son',
                nom: 'Tristan TARAUD',
                photo: 'Son - Tristan.jpg'
            }
        ]
    },

    amour: {
        pole: 'Amour',
        logo: '/logos/poles/2024/amour.png',
        personnes: [
            {
                role: 'VP Amour',
                nom: 'Agathe DORANGE',
                photo: 'Amour - Agathe.jpg'
            },
            {
                role: 'VP Amour',
                nom: 'Alexandre DURIF',
                photo: 'Amour - Alexandre.jpg'
            },
            {
                role: 'VP Amour',
                nom: 'Ambre VALENTIN',
                photo: 'Amour - Fetyh.jpg'
            },
            {
                role: 'VP Amour',
                nom: 'Clément HEDDE',
                photo: 'Amour - Zhorro.jpg'
            },
            {
                role: 'VP Amour',
                nom: 'Mai Vân NGUYEN',
                photo: 'Amour - Mai Van.jpg'
            },
        ]
    }
}


export default {
    data: function () {
        return { equipe, presentation }
    }
}
</script>

<style lang="scss">
.trombi_membre.square {
    img {
        border-radius: 0%;
    }
}
</style>