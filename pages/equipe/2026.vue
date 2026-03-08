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
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2026/' + membre.photo" alt="">
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
        <h2>2026 - Dernier Éclat</h2>
        <p>
            <span class="text-[var(--redLight2025)]">Paris, 1923</span>.
           À l'Indigo, cabaret parisien où les plumes et les projecteurs font oublier 
            le reste du monde, une étoile est en train de naître. Iris Lenoir enchaîne les triomphes sous l’œil attentif de son agent, Maurice. Mais 
            alors que la capitale s’emballe pour sa nouvelle idole, le nouveau projet inattendu d’Odette, directrice de l’Indigo, vient diviser le cabaret.
        </p>
        <p>
            La scène devient alors le théâtre d’un choix impossible : Faut-il plaire à tout prix ou oser déranger ? Entre cancan endiablé, soif de 
          succès et poids du passé, Dernier Éclat vous entraîne derrière les rideaux d’un monde où monter sur scène peut tout changer.
        </p>        <p><i>Un merci particuler à Léa Serval pour son investissement dans la direction artistique de la Commuz' 2026.</i></p>        `,
    bgImage: '/images/equipes/equipe--2026.jpg',
    image: '/images/affiches/affiche--2026.png',
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
                    nom: 'Nicolas Watiez',
                    photo: 'Buro -  Nicolas.jpg'
                },
                {
                    role: 'Présidente',
                    nom: 'Alix Laroche',
                    photo: 'Buro - Alix.jpg'
                },
                {
                    role: 'Secrétaire Générale',
                    nom: "Joséphine Butty",
                    photo: 'Buro - Josephine.jpg'
                },
                {
                    role: 'Trésorier',
                    nom: 'Armand Didierjean',
                    photo: 'Buro - Armand.jpg'
                },
            ],
    },


    visibilite: {
        pole: 'Visibilité',
        logo: '/logos/poles/2024/visibilite.png',
        personnes: [
            {
                role: 'Communication',
                nom: 'Laureline Barras',
                photo: 'Visi - Laureline.jpg'
            },
            {
                role: 'Communication',
                nom: 'Marius Gonidec',
                photo: 'Visi - Marius.jpg'
            },
            {
                role: 'Webmaster',
                nom: 'Charlotte Demode',
                photo: 'Visi - Charlotte.jpg'
            },
            {
                role: 'Respo Vidéo',
                nom: 'Albertine Didierjean',
                photo: 'Visi - Albertine.jpg'
            },
            {
                role: 'Respo Vidéo',
                nom: 'Antony Dubreuil',
                photo: 'Visi - Antony.jpg'
            },
            {
                role: 'Respo Partenariats',
                nom: 'Juliette Cangelosi',
                photo: 'Visi - Juliette.jpg'
            },
            // {
            //     role: 'Partenariats',
            //     nom: 'Camille FERVEUR',
            //     photo: 'Visi - Camille.jpg'
            // }, pas de VP Partenariats cette année
            // {
            //     role: 'Partenariats',
            //     nom: 'Guillaume FRANCHI',
            //     photo: 'Visi - Termo.jpg'
            // },
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
                nom: 'Robin Audebert',
                photo: 'Scenariste - Robin.jpg'
            },
            {
                role: 'Scénariste',
                nom: 'Thibault Colas des Francs',
                photo: 'Scenariste - Thibault.jpg'
            },
            {
                role: 'Scénariste',
                nom: 'Anne-Isabelle de Villemagne',
                photo: 'Scenariste - Anne-Isabelle.jpg'
            },
            {
                role: 'Scénariste',
                nom: 'Malo Helbert',
                photo: 'Scenariste - Malo.jpg'
            }
        ]
    },
    mes: {
        pole: 'Direction Artistique',
        logo: '/logos/poles/2024/mes.png',
        personnes: [
            {
                role: 'Coordinatrice artistique',
                nom: 'Charline Mejean',
                photo: 'DA - Charline.jpg'
            },
            // {
            //     role: 'Coordinatrice artistique',
            //     nom: 'Léa Serval',
            //     photo: 'DA - Léa.jpg'
            // },
            {
                role: 'Metteur en scène',
                nom: 'Matteo Bevilacqua',
                photo: 'DA - Matteo.jpg'
            },
            {
                role: 'Metteur en scène',
                nom: 'Adrien Falourd',
                photo: 'DA - Adrien.jpg'
            }
            
        ]
    }, 

    ac: {
        pole: 'Acteurs-chanteurs',
        logo: '/logos/poles/2024/ac.png',
        personnes: [
            {
                role: 'Actrice-chanteuse',
                nom: 'Clarence Rakotobe',
                photo: 'AC - Clarence.jpg'
            },
            {
                role: 'Actrice-chanteuse',
                nom: 'Alicia Delepoulle',
                photo: 'AC - Alicia.jpg'
            },
            {
                role: 'Actrice-chanteuse',
                nom: 'Johanna Dussoux',
                photo: 'AC - Johanna.jpg'
            },
            {
                role: 'Acteur-chanteur',
                nom: 'Alexandre Anjolras',
                photo: 'AC - Alexandre.jpg'
            },
            {
                role: 'Acteur-chanteur',
                nom: 'Nael Zahir',
                photo: 'AC - Nael.jpg'
            },
            {
                role: 'Acteur-chanteur',
                nom: 'Marc Salinas Pons',
                photo: 'AC - Marc.jpg'
            }
        ]
    },
    chant: {
        pole: 'Choristes',
        logo: '/logos/poles/2024/choristes.png',
        personnes: [
            {
                role: 'Respo chant',
                nom: 'Benoît Garrel',
                photo: 'Chant - Benoit.jpg'
            },
            {
                role: 'Respo chant',
                nom: 'Line Vannier',
                photo: 'Chant - Line.jpg'
            },
            {
                role: 'Chant',
                nom: 'Jules Guilloud',
                photo: 'Chant - Jules.jpg'
            },
            {
                role: 'Chant',
                nom: 'Nathan Prot',
                photo: 'Chant - Nathan.jpg'
            },
            {
                role: 'Chant',
                nom: 'Gabrielle Cuchet',
                photo: 'Chant - Gabrielle.jpg'
            },
            {
                role: 'Chant',
                nom: 'Jeanne Constant',
                photo: 'Chant - Jeanne.jpg'
            },
            {
                role: 'Chant',
                nom: 'Sarah Bonnettee',
                photo: 'Chant - Sarah.jpg'
            },
            {
                role: 'Chant',
                nom: 'Raphaël Cremona',
                photo: 'Chant - Raphaël.jpg'
            }
        ]
    },

    composition: {
        pole: 'Composition',
        logo: '/logos/poles/2024/composition.png',
        personnes: [
            {
                role: 'Respo composition',
                nom: 'Cassandre Girardeau-Darnand',
                photo: 'Compo - Cassandre.jpg'
            },
            {
                role: 'Respo composition',
                nom: 'Lyna-May Mokrani',
                photo: 'Compo - Lyna.jpg'
            },
            {
                role: 'Compositeur',
                nom: 'Marc-Antoine Carpentier',
                photo: 'Compo - Marco.jpg'
            },
            {
                role: 'Compositeur',
                nom: 'Flavien Mairot',
                photo: 'Compo - Flavien.jpg'
            },
            {
                role: 'Compositeur',
                nom: 'Pierre Pérault',
                photo: 'Compo - Pierre.jpg'
            },
               {
                role: 'Parolier',
                nom: 'Maxime Pitrou',
                photo: 'Compo - Maxime.jpg'
            }
        ]
    },

    zikos: {
        pole: 'Musique',
        logo: '/logos/poles/2024/zikos.png',
        personnes: [
            {
                role: 'Chef d\'orchestre',
                nom: 'Delaunay Erik',
                photo: 'Zikos - Erik.jpg'
            },
            {
                role: 'Chef d\'orchestre',
                nom: 'Armel Rouxel',
                photo: 'Zikos - Armel.jpg'
            },
            {
                role: 'Alto',
                nom: 'Aurélien André',
                photo: 'Zikos - Aurelien.jpg'
            },
            {
                role: 'Batterie',
                nom: 'Guilhem Llopis',
                photo: 'Zikos - Guilhem.jpg'
            },
            {
                role: 'Clarinette',
                nom: 'Louise Lithard',
                photo: 'Zikos - Louise.jpg'
            },
            {
                role: 'Clarinette',
                nom: 'Augustin Laurent',
                photo: 'Zikos - Augustin.jpg'
            },
            {
                role: 'Basse',
                nom: 'Lucas Mahé-Boisneau',
                photo: 'Zikos - Lucas.M.jpg'
            },
            {
                role: 'Trompette',
                nom: 'Amaury Corcos',
                photo: 'Zikos - Amaury.jpg'
            },
            {
                role: 'Basson',
                nom: 'Aline Zabban',
                photo: 'Zikos - Aline.jpg'
            },
            {
                role: 'Flûte traversière',
                nom: 'Lucas Fernandes',
                photo: 'Zikos - Lucas.F.jpg'
            },
            {
                role: 'Flûte traversière',
                nom: 'Marie Gaillard',
                photo: 'Zikos - Marie.jpg'
            },
            {
                role: 'Violoncelle',
                nom: 'Adele Teyssier',
                photo: 'Zikos - Adele.jpg'
            },
            {
                role: 'Hautbois',
                nom: 'Sacha Vial',
                photo: 'Zikos - Sacha.jpg'
            },
            {
                role: 'Violon',
                nom: 'Hugo Dietz',
                photo: 'Zikos - Hugo.jpg'
            },
            {
                role: 'Violon',
                nom: 'Maxime Dampierre',
                photo: 'Zikos - Maxime.jpg'
            },
            {
                role: 'Cor',
                nom: 'Maxime Bourgeois',
                photo: 'Zikos - Maxime (2).jpg'
            },
            {
                role: 'Saxophone',
                nom: 'Raphaël Montoloy',
                photo: 'Zikos - Raphaël.jpg'
            }
        ]
    },

    danse: {
        pole: 'Danse',
        logo: '/logos/poles/2024/danse.png',
        personnes: [
            {
                role: 'Respo danse',
                nom: 'Alix Espitalier-Noël',
                photo: 'Danse - Alix.jpg'
            },
            {
                role: 'Respo danse',
                nom: 'Marine Sigaud',
                photo: 'Danse - Marine.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Emma Belloc',
                photo: 'Danse - Emma.B.jpg'
            },
            {
                role: 'Danseur',
                nom: 'Brieuc Savornin',
                photo: 'Danse - Brieuc.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Marion Legait',
                photo: 'Danse - Marion.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Pauline Marrel',
                photo: 'Danse - Lelie.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Eléonore DAVID',
                photo: 'Danse - Eleonore.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Célia Camanes',
                photo: 'Danse - Celia.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Anaïs Pohl',
                photo: 'Danse - Anais.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Daphné Lim',
                photo: 'Danse - Daphne.jpg'
            },
            {
                role: 'Danseur',
                nom: 'Baptiste Dupoux',
                photo: 'Danse - Baptiste.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Emma Lai',
                photo: 'Danse - Emma.L.jpg'
            },
            {
                role: 'Danseuse',
                nom: 'Juliette Hamon',
                photo: 'Danse - Juliette.jpg'
            }
        ]
    },

    costumes: {
        pole: 'Costumes',
        logo: '/logos/poles/2024/costumes.png',
        personnes: [
            {
                role: 'Respo costumes',
                nom: 'Claire Joly',
                photo: 'Costumes - Claire.jpg'
            },
            {
                role: 'Respo costumes',
                nom: 'Audrey Le Mestre',
                photo: 'Costumes - Audrey.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Lucie Brion',
                photo: 'Costumes - Lucie.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Chloé Amor',
                photo: 'Costumes - Chloé.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Alice Fournial',
                photo: 'Costumes - Alice.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Emilie Bleriot',
                photo: 'Costumes - Emilie.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Agathe Dorange',
                photo: 'Costumes - Agathe.jpg'
            },
            {
                role: 'Costumière',
                nom: 'Mileva Piezel',
                photo: 'Costumes - Mileva.jpg'
            }
        ]
    },

    decors: {
        pole: 'Décors',
        logo: '/logos/poles/2024/decors.png',
        personnes: [
            {
                role: 'Respo décors',
                nom: 'Margot Mauny',
                photo: 'Decors - Margot.M.jpg'
            },
            {
                role: 'Respo décors',
                nom: 'Baptiste Galand',
                photo: 'Decors - Baptiste.jpg'
            },
            {
                role: 'Décorateur',
                nom: 'Basile Rogier',
                photo: 'Decors - Basile.jpg'
            },
            {
                role: 'Décorateur',
                nom: 'Guillaume Franchi',
                photo: 'Decors - Guillaume.jpg'
            },
            {
                role: 'Décoratrice',
                nom: 'Nina Houzel',
                photo: 'Decors - Nina.jpg'
            },
            {
                role: 'Décorateur',
                nom: 'Geoffrey Brunon',
                photo: 'Decors - Geoffrey.jpg'
            },
            {
                role: 'Décoratrice',
                nom: 'Margot Nguyen Huu',
                photo: 'Decors - Margot.N.jpg'
            },
            {
                role: 'Décoratrice',
                nom: 'Mia Zhou',
                photo: 'Decors - Mia.jpg'
            },
            {
                role: 'Décorateur',
                nom: 'Camille Thiry',
                photo: 'Decors - Camille.jpg'
            },
            {
                role: 'Décoratrice',
                nom: 'Mona Breton',
                photo: 'Decors - Mona.jpg'
            }
        ]
    },

    technique: {
        pole: 'Lumière et son',
        logo: '/logos/poles/2024/technique.png',
        personnes: [
            {
                role: 'Respo lumière',
                nom: 'Bilâl Etchegaray',
                photo: 'Lumieres - Bilal.jpg'
            },
            {
                role: 'Lumière',
                nom: 'Théo Huangfu',
                photo: 'Lumieres - Theo.jpg'
            },
            {
                role: 'Respo son',
                nom: 'Sibylle Vergnon',
                photo: 'Son - Sibylle.jpg'
            },
            {
                role: 'Respo son',
                nom: 'Tristan Taraud',
                photo: 'Son - Tristan.jpg'
            },
            {
                role: 'Son',
                nom: 'Célia Garreau',
                photo: 'Son - Celia.jpg'
            },
            {
                role: 'Son',
                nom: 'Laurène Cristol',
                photo: 'Son - Laurène.jpg'
            },
            {
                role: 'Son',
                nom: 'Samuel Cohen',
                photo: 'Son - Samuel.jpg'
            },
            {
                role: 'Son',
                nom: 'Marion Aubert',
                photo: 'Son - Marion.jpg'
            }
        ]
    },

    amour: {
        pole: 'Amour',
        logo: '/logos/poles/2024/amour.png',
        personnes: [
            {
                role: 'VP Amour',
                nom: 'Vincent Rouaret',
                photo: 'Amour - Vincent.jpg'
            },
            {
                role: 'VP Amour',
                nom: 'Etienne Patriarche',
                photo: 'Amour - Etienne.jpg'
            },
            {
                role: 'VP Amour',
                nom: 'Nathan Mabilais',
                photo: 'Amour - Nathan.jpg'
            },
            {
                role: 'VP Amour',
                nom: 'Emmanuelle Lambermont',
                photo: 'Amour - Emmanuelle.jpg'
            },
            {
                role: 'VP Amour',
                nom: 'Flora Dang-nhu Borras',
                photo: 'Amour - Flora.jpg'
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