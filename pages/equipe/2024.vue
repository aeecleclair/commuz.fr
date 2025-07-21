<template lang="html">
    <div>
        <pane type="pane--media" :bg-image="presentation.bgImage" :image="presentation.image"
            :text="presentation.text" />
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/bureau.png" alt="Bureau">
                <h2>Bureau</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.bureau" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/visibilite.png" alt="Visibilité">
                <h2>Visibilité</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.visibilite" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/scenario.png" alt="Scénario">
                <h2>Scénario</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.scenario" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/mes.png" alt="Mise en scène">
                <h2>Direction Artistique</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.mes" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/ac.png" alt="Acteur-chanteur, comédien">
                <h2>Acteurs-chanteurs</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.ac" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/choristes.png" alt="Choristes">
                <h2>Chant</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.chant" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/composition.png" alt="Composition">
                <h2>Composition</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.composition" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/zikos.png" alt="Musique">
                <h2>Musique</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.zikos" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/danse.png" alt="Danseuses">
                <h2>Danse</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.danse" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/costumes.png" alt="Costumes">
                <h2>Costumes</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.costumes" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/decors.png" alt="Décors">
                <h2>Décors</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.decors" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/technique.png" alt="Technique">
                <h2>Lumière et son</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.technique" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
                    <p><b>{{ membre.nom }}</b><br>
                        <i>{{ membre.role }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__description">
                <img src="/logos/poles/2024/amour.png" alt="Support">
                <h2>Amour</h2>
            </div>
            <div class="section__membres">
                <div v-for="(membre, idMembre) in equipe.amour" :key="idMembre" class="trombi_membre square">
                    <img v-if="membre.photo != ''" :src="'/images/equipes/2024/' + membre.photo" alt="">
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
    text: "<h2>2024 - Backstage</h2>" +
        "<p>Hollywood, 1964.<p/>" +
        "<p> Le Highlight Show, le talk show le plus populaire des Etats-Unis, est au sommet de sa gloire. Mais au cours d’une énième émission, son host Alec Keaton décide subitement de prendre sa retraite. Face à l’urgence de la situation, la productrice Norma Desmond mettra tout en œuvre pour assurer le maintien de l’émission.</p>" +
        "<p> Mais c’est sans compter le désir de vengeance de son ex-mari Paul, prêt à tout pour détruire le Highlight, et les machinations du “Réseau”, une mystérieuse organisation qui risque bien de révéler au grand jour les secrets les plus intimes de nos héros. </p>" +
        "<p> Derrière les paillettes, <i> Backstage </i> explore les coulisses du showbusiness, entre amours, passions et ambitions.</p>",
    bgImage: '/images/equipes/equipe--2024.jpg',
    image: '/images/affiches/affiche--2024.png'
}


const equipe = {
    bureau: [
        {
            role: 'Président',
            nom: 'Agustín SOUX',
            photo: 'Primito.png'
        },
        {
            role: 'Présidente',
            nom: 'Inès BATTISTI',
            photo: 'Inès.png'
        },
        {
            role: 'Secrétaire Générale',
            nom: "Antoine HAYNEZ",
            photo: 'Antoine_Atmos.png'
        },
        {
            role: 'Trésorier',
            nom: 'Oscar BOLZINGER',
            photo: 'Babs.png'
        },
        {
            role: 'Star',
            nom: 'Bro Douai',
            photo: 'Bro Douai.png'
        },
    ],

    visibilite: [
        {
            role: 'Communication',
            nom: 'Marie RIVAL',
            photo: 'Marie Com.png'
        },
        {
            role: 'Communication',
            nom: 'Aymeric THIERRY-WILKISON',
            photo: 'Aymeric.png'
        },
        {
            role: 'Webmaster',
            nom: 'Frédéric LEGRAND',
            photo: 'Fred.png'
        },
        {
            role: 'Respo Vidéo',
            nom: 'Pauline CHARNIN',
            photo: 'Blade.png'
        },
        {
            role: 'Vidéo',
            nom: 'Thomas HUDRY',
            photo: 'Thomas.png'
        },
        {
            role: 'Respo Partenariats',
            nom: 'Vincent ROUARET',
            photo: 'Vincent - visi.png'
        },
        {
            role: 'Partenariats',
            nom: 'Lou TAFFANEL',
            photo: 'Lou.png'
        }
    ],

    scenario: [
        {
            role: 'Scénariste',
            nom: 'Audrey TEIXEIRA',
            photo: 'Neyla.png'
        },
        {
            role: 'Scénariste',
            nom: 'Solal CHOMAND',
            photo: 'Solal.png'
        },
        {
            role: 'Scénariste',
            nom: 'Matéo JUND',
            photo: 'Montîh.png'
        },
        {
            role: 'Scénariste',
            nom: 'Mattéo BEVILACQUA',
            photo: 'Cyhagha.png'
        }
    ],

    mes: [
        {
            role: 'Coordinatrice artistique',
            nom: 'Emma BELLOC',
            photo: 'Emma.png'
        },
        {
            role: 'Coordinateur artistique',
            nom: 'Antonin DELORME',
            photo: 'Zumo.png'
        },
        {
            role: 'Metteur en scène',
            nom: 'Andréas DAGANNAUD DELISLE',
            photo: 'Andréas.png'
        },
        {
            role: 'Metteur en scène',
            nom: 'Jules MANSION',
            photo: 'Jules.png'
        }
    ],

    ac: [
        {
            role: 'Actrice-chanteuse',
            nom: 'Hermine TOLLET',
            photo: 'Hermine.png'
        },
        {
            role: 'Actrice-chanteuse',
            nom: 'Léa SERVAL',
            photo: 'Del_ré.png'
        },
        {
            role: 'Actrice-chanteuse',
            nom: 'Lucie PREYSSAS',
            photo: 'Lucie.png'
        },
        {
            role: 'Acteur-chanteur',
            nom: 'Matthieu LEVEAU',
            photo: 'Gueulphor.png'
        },
        {
            role: 'Acteur-chanteur',
            nom: 'Benjamin DENISE',
            photo: 'K2.png'
        },
        {
            role: 'Acteur-chanteur',
            nom: 'Côme LAROCHE',
            photo: 'Côme.png'
        }
    ],

    chant: [
        {
            role: 'Respo chant',
            nom: 'Louise WITTMANN',
            photo: 'Maha.png'
        },
        {
            role: 'Respo chant',
            nom: 'Étienne PATRIARCHE',
            photo: 'Etienne.png'
        },
        {
            role: 'Chant',
            nom: 'Julien DELAFFON',
            photo: 'Julien_Buster.png'
        },
        {
            role: 'Chant',
            nom: 'Marc-Antoine CARPENTIER',
            photo: 'Marco.png'
        },
        {
            role: 'Chant',
            nom: 'Clément RONDEPIERRE',
            photo: 'Clément.png'
        },
        {
            role: 'Chant',
            nom: 'Mathilde CHANTRE',
            photo: 'Sérah.png'
        },
        {
            role: 'Chant',
            nom: 'Louise WAGNER',
            photo: 'Guimy.png'
        },
        {
            role: 'Chant',
            nom: 'Flora DANG-NHU',
            photo: 'Flora.png'
        }
    ],

    composition: [
        {
            role: 'Respo compositeur',
            nom: 'Armel ROUXEL',
            photo: 'Garibaldi.png'
        },
        {
            role: 'Respo compositeur',
            nom: 'Louis BRUNO',
            photo: 'stawss.png'
        },
        {
            role: 'Compositeur',
            nom: 'Erik DELAUNAY',
            photo: 'erik.png'
        },
        {
            role: 'Compositeur',
            nom: 'Hugo DIETZ',
            photo: 'Twitch.png'
        },
        {
            role: 'Compositeur',
            nom: 'Joachim BOULY',
            photo: 'joachim.png'
        }
    ],

    zikos: [
        {
            role: 'Cheffe d\'orchestre',
            nom: 'Cassandre GIRARDEAU-DARNAND',
            photo: 'Cha_ky.png'
        },
        {
            role: 'Chef d\'orchestre',
            nom: 'Antoine FERNANDES',
            photo: 'Antoine_Siffer.png'
        },
        {
            role: 'Piano',
            nom: 'Basile DARNE',
            photo: 'Duc.png'
        },
        {
            role: 'Batterie',
            nom: 'Mathis DE GEA',
            photo: 'mathis.png'
        },
        {
            role: 'Guitare',
            nom: 'Baptiste FONTANEY',
            photo: 'brag.png'
        },
        {
            role: 'Basse',
            nom: 'Armel ROUXEL',
            photo: 'Garibaldi.png'
        },
        {
            role: 'Flûte',
            nom: 'Anne-Isabelle DE VILLEMAGNE',
            photo: 'anne isa.png'
        },
        {
            role: 'Flûte',
            nom: 'Lucas FERNANDES',
            photo: 'hémoh.png'
        },
        {
            role: 'Hautbois',
            nom: 'Antide LEFEVRE',
            photo: 'Khosto.png'
        },
        {
            role: 'Clarinette',
            nom: 'Maxime GUYET',
            photo: 'Sajji.png'
        },
        {
            role: 'Clarinette',
            nom: 'Thomas CALMEL',
            photo: 'thomas(1).png'
        },
        {
            role: 'Trompette',
            nom: 'Amaury CORCOS',
            photo: 'Sybher.png'
        },
        {
            role: 'Trombone',
            nom: 'Colin Aubonnet',
            photo: 'Dilat.png'
        },
        {
            role: 'Sax Alto',
            nom: 'Raphaël MONTOLOY',
            photo: 'Jafar.png'
        },
        {
            role: 'Sax Baryton',
            nom: 'Louis HUMBERT',
            photo: 'Louis.png'
        },
        {
            role: 'Violoncelle',
            nom: 'Guillaume TARTAR',
            photo: 'Kaskooh.png'
        },
        {
            role: 'Violon',
            nom: 'Camille NORMANT',
            photo: 'camille.png'
        }
    ],

    danse: [
        {
            role: 'Respo danse',
            nom: 'Marine Denée',
            photo: 'Marinette.png'
        },
        {
            role: 'Respo danse',
            nom: 'Philippine KEDZIA',
            photo: 'Philippine.png'
        },
        {
            role: 'Danseuse',
            nom: 'Livia PALMADE',
            photo: 'Livia.png'
        },
        {
            role: 'Danseuse',
            nom: 'Rebecca WALKER',
            photo: 'Rebecca.png'
        },
        {
            role: 'Danseuse',
            nom: 'Violette MOREL',
            photo: 'Violette.png'
        },
        {
            role: 'Danseur',
            nom: 'Baptiste DUPOUX',
            photo: 'Windo.png'
        },
        {
            role: 'Danseuse',
            nom: 'Marion TOURCHICK',
            photo: 'Marion.png'
        },
        {
            role: 'Danseuse',
            nom: 'Marie FECK',
            photo: 'Marie Feck.png'
        },
        {
            role: 'Danseuse',
            nom: 'Capucine Norcia',
            photo: 'Capu.png'
        },
        {
            role: 'Danseuse',
            nom: 'Marine Sigaud',
            photo: 'Marine.png'
        },
        {
            role: 'Danseuse',
            nom: 'Charline MEJEAN',
            photo: 'Charline.png'
        },
        {
            role: 'Danseuse',
            nom: 'Joséphine BUTTY',
            photo: 'Josephine.png'
        }
    ],

    costumes: [
        {
            role: 'Respo costumes',
            nom: 'Laura CHEVAILLIER',
            photo: 'Laura.png'
        },
        {
            role: 'Respo costumes',
            nom: 'Lucile AUDARD',
            photo: 'Lucile.png'
        },
        {
            role: 'Costumier',
            nom: 'Aurélien BLANCHET',
            photo: 'lafé.png'
        },
        {
            role: 'Costumière',
            nom: 'Marie ERCEAU',
            photo: 'Khoqsy.png'
        },
        {
            role: 'Costumière',
            nom: 'Héléa GUILLOUCHE',
            photo: 'héléa.png'
        },
        {
            role: 'Costumière',
            nom: 'Emma WANG',
            photo: 'Minzah.png'
        },
        {
            role: 'Costumière',
            nom: 'Lucille COUTAUD',
            photo: 'hyllis.png'
        },
        {
            role: 'Costumière',
            nom: 'Delphine THOMAZO',
            photo: 'delphine.png'
        }
    ],

    decors: [
        {
            role: 'Respo décors',
            nom: 'Pierrick DURAND GLOUCHKOFF',
            photo: 'Pierrick.png'
        },
        {
            role: 'Respo décors',
            nom: 'Vincent DANIEL',
            photo: '2zer.png'
        },
        {
            role: 'Décorateur',
            nom: 'Adrien FALOURD',
            photo: 'Shall.png'
        },
        {
            role: 'Décoratrice',
            nom: 'Caroline PAULUS',
            photo: 'caroline.png'
        },
        {
            role: 'Décoratrice',
            nom: 'Coline LANJARD',
            photo: 'Coline.png'
        },
        {
            role: 'Décorateur',
            nom: 'Julien GONIN',
            photo: 'Julien.png'
        },
        {
            role: 'Décoratrice',
            nom: 'Soline Minvielle',
            photo: 'Ysby.png'
        },
        {
            role: 'Décoratrice',
            nom: 'Toscane CHEMLA',
            photo: 'Toscane.png'
        },
        {
            role: 'Décoratrice',
            nom: 'Lydie HOUSER',
            photo: 'Lydie.png'
        },
        {
            role: 'Décoratrice',
            nom: 'Arièle ELIARD',
            photo: 'Arièle.png'
        }
    ],

    technique: [
        {
            role: 'Respo lumière',
            nom: 'Marie GACHERE',
            photo: 'Marie.png'
        },
        {
            role: 'Respo son',
            nom: 'Manon POLVERINI',
            photo: 'Manon.png'
        },
        {
            role: 'Respo son',
            nom: 'Nicolas WATIEZ',
            photo: 'Toven.png'
        },
        {
            role: 'Son',
            nom: 'Raphaël PADOVANI',
            photo: 'Zeepee.png'
        },
        {
            role: 'Son',
            nom: 'Thibault AGOSSOU-COFFI',
            photo: 'Dhenza.png'
        },
        {
            role: 'Son',
            nom: 'Sarah PREVOT',
            photo: 'Sarah.png'
        },
        {
            role: 'Son',
            nom: 'Thomas GUENIER',
            photo: 'Skotch.png'
        }
    ],

    amour: [
        {
            role: 'VP Amour',
            nom: 'Marie GAILLARD',
            photo: 'Marie - Amour.png'
        },
        {
            role: 'VP Amour',
            nom: 'Samuel PINCEMAIL',
            photo: 'Zipette.png'
        },
        {
            role: 'VP Amour',
            nom: 'Nelly WU',
            photo: 'Nelly.png'
        },
        {
            role: 'VP Amour',
            nom: 'Théo DE SENNEVILLE',
            photo: 'Théo.png'
        },
        {
            role: 'VP Amour',
            nom: 'Alix LAROCHE',
            photo: 'Alix.png'
        }
    ]
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