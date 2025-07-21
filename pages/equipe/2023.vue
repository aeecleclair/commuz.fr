<template lang="html">
  <div>
    <pane type="pane--media" :bg-image="presentation.bgImage" :image="presentation.image" :text="presentation.text" />
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/bureau.png" alt="Bureau">
        <h2>Bureau</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.bureau" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/visibilite.png" alt="Visibilité">
        <h2>Visibilité</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.visibilite" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/scenario.png" alt="Scénario">
        <h2>Scénario</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.scenario" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/mes.png" alt="Mise en scène">
        <h2>Direction Artistique</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.mes" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/ac.png" alt="Acteur-chanteur, comédien">
        <h2>Acteurs-chanteurs</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.ac" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/choristes.png" alt="Choristes">
        <h2>Chant</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.chant" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/composition.png" alt="Composition">
        <h2>Composition</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.composition" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/zikos.png" alt="Musique">
        <h2>Musique</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.zikos" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/danse.png" alt="Danseuses">
        <h2>Danse</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.danse" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/costumes.png" alt="Costumes">
        <h2>Costumes</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.costumes" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/decors.png" alt="Décors">
        <h2>Décors</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.decors" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/technique.png" alt="Technique">
        <h2>Lumière et son</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.technique" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br>
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2023/amour.png" alt="Support">
        <h2>Amour</h2>
      </div>
      <div class="section__membres">
        <div v-for="(membre, idMembre) in equipe.amour" :key="idMembre" class="trombi_membre square">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2023/' + membre.photo" alt="">
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
  text: "<h2>2023 - Hymne à la Voie</h2>" +
    "<p>1851. Le Léviathan, train gigantesque de l’ingénieur Robert Fawkes, achève sa tournée inaugurale. Après avoir traversé toutes les capitales européennes, le prodige s'apprête à rejoindre Londres pour l’ouverture de l’Exposition Universelle. À l’heure de l’avènement du libéralisme, les braises de la Confrérie Ouvrière semblent se raviver. On murmure que Thomas Ravet préparerait son retour. </p>",
  bgImage: '/images/equipes/equipe--2023.jpg',
  image: '/images/affiches/affiche--2023.png'
}


const equipe = {
  bureau: [
    {
      role: 'Président',
      nom: 'Benjamin Denise',
      photo: 'K2.png'
    },
    {
      role: 'Vice-Président',
      nom: 'Andréas Dagannaud Delisle',
      photo: 'Toupi.png'
    },
    {
      role: 'Secrétaire Générale',
      nom: "Aurore Granier",
      photo: 'Choupie.png'
    },
    {
      role: 'Trésorière',
      nom: 'Clara Angrand',
      photo: 'Nahe.png'
    }
  ],

  visibilite: [
    // {
    //   role: 'Star',
    //   nom: 'Bro Douai',
    //   photo: '0-Bro.jpg'
    // },
    {
      role: 'Communication',
      nom: 'Tristan Petit',
      photo: 'Bliss.png'
    },
    {
      role: 'Communication',
      nom: 'Fanny Weber',
      photo: 'Fanny.png'
    },
    {
      role: 'Webmestre',
      nom: 'Antoine Haynez',
      photo: 'Antoine.png'
    },
    {
      role: 'Respo Vidéo',
      nom: 'Armand Didierjean',
      photo: 'Armand.png'
    },
    {
      role: 'Partenariats',
      nom: 'Aleksandra Krivokapic',
      photo: 'KS.png'
    },
    {
      role: 'Partenariats',
      nom: 'Paul-Etienne Clément',
      photo: 'PE.png'
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Emma Carotche',
      photo: 'Kafheo.png'
    },
    {
      role: 'Scénariste',
      nom: 'Jules Mansion',
      photo: 'Jules.png'
    },
    {
      role: 'Scénariste',
      nom: 'Victor Angot',
      photo: 'Victor.png'
    }
  ],

  mes: [
    {
      role: 'Coordinatrice artistique',
      nom: 'Claire de Montgolfier',
      photo: 'Claire.png'
    },
    {
      role: 'Coordinateur artistique',
      nom: 'Matthieu Leveau',
      photo: 'Matthieu.png'
    },
    {
      role: 'Metteur en scène',
      nom: 'Jean Rannou',
      photo: 'Jean.png'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Inès Battisti',
      photo: 'Ines2.png'
    }
  ],

  ac: [
    {
      role: 'Actrice-chanteuse',
      nom: 'Solène Wallaert',
      photo: 'Solene.png'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Toscane Chemla',
      photo: 'Toscane.png'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Alban Journet',
      photo: 'Alban.png'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Tristan Boucansaud',
      photo: 'Tristan.png'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Hippolyte Morillon',
      photo: 'Hippolyte.png'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Victoire Bertrand',
      photo: 'Victoire.png'
    }
  ],

  chant: [
    {
      role: 'Respo chant',
      nom: 'Antonin Delorme',
      photo: 'Zumo.png'
    },
    {
      role: 'Respo chant',
      nom: 'Marguerite Lafeuillade',
      photo: 'Yomi.png'
    },
    {
      role: 'Choriste',
      nom: 'Cléo Larminay',
      photo: 'Cleo.png'
    },
    {
      role: 'Choriste',
      nom: 'Louise Wittmann',
      photo: 'Maha.png'
    },
    {
      role: 'Choriste',
      nom: 'Marguerite Delcourt',
      photo: 'Kiissy.png'
    },
    {
      role: 'Choriste',
      nom: 'Paul de Breteuil',
      photo: 'Paul.png'
    },
    {
      role: 'Choriste',
      nom: 'Maxime Guvet',
      photo: 'Sajji.png'
    },
    {
      role: 'Choriste',
      nom: 'Etienne Patriarche',
      photo: 'Ebay.png'
    }
  ],

  composition: [
    {
      role: 'Respo compositeur',
      nom: 'Leopold Kowalski',
      photo: 'Leopold.png'
    },
    {
      role: 'Respo compositeur',
      nom: 'Antoine Fernandes',
      photo: 'Sifer.png'
    },
    {
      role: 'Respo compositeur',
      nom: 'Antonin Rouffet',
      photo: 'Heiser.png'
    },
    {
      role: 'Compositeur',
      nom: 'Armel Rouxel',
      photo: 'Garibaldi.png'
    },
    {
      role: 'Compositeur',
      nom: 'Samuel Aubin',
      photo: 'Sam.png'
    },
    {
      role: 'Compositeur',
      nom: 'Louis Bruno',
      photo: 'Louis.png'
    }
  ],

  zikos: [
    {
      role: 'Respo Zikos / Chef d\'orchestre',
      nom: 'Paul Kaassis',
      photo: 'Paul2.png'
    },
    {
      role: 'Respo Zikos / Basse',
      nom: 'Emilie Stentz',
      photo: 'Elka.png'
    },
    {
      role: 'Violon',
      nom: 'Irène Herraiz',
      photo: 'Irene.png'
    },
    {
      role: 'Violon',
      nom: 'Hugo Dietz',
      photo: 'Hugo.png'
    },
    {
      role: 'Alto',
      nom: 'Marie Gachère',
      photo: 'Marie.png'
    },
    {
      role: 'Violoncelle',
      nom: 'Manon Polverini',
      photo: 'Manon.png'
    },
    {
      role: 'Contrebasse',
      nom: 'Julien Durand',
      photo: 'Jack.png'
    },
    {
      role: 'Piano',
      nom: 'Cassandre Girardeau-Darnand',
      photo: 'Chaky.png'
    },
    {
      role: 'Guitare',
      nom: 'Etienne Couble',
      photo: 'Jimboh.png'
    },
    {
      role: 'Batterie',
      nom: 'Théo Méranger',
      photo: 'Klipss.png'
    },
    {
      role: 'Flûte',
      nom: 'Iris Vermeulen',
      photo: 'Roownhi.png'
    },
    {
      role: 'Trompette',
      nom: 'Grégoire Bon',
      photo: 'Grez.png'
    },
    {
      role: 'Trombone',
      nom: 'Colin Aubonnet',
      photo: 'Dilat.png'
    },
    {
      role: 'Sax Alto',
      nom: 'Louis Humbert',
      photo: 'Louis2.png'
    },
    {
      role: 'Sax Soprano',
      nom: 'Martin Greiveldinger',
      photo: 'Quibu.png'
    },
    {
      role: 'Basson',
      nom: 'Aline Zabban',
      photo: 'Boonth.png'
    }
  ],

  danse: [
    {
      role: 'Respo danse',
      nom: 'Sarah Martinotti',
      photo: 'Sasa.png'
    },
    {
      role: 'Respo danse',
      nom: 'Margaux Aloin',
      photo: 'Margaux.png'
    },
    {
      role: 'Danseuse',
      nom: 'Marine Denée',
      photo: 'Marinette.png'
    },
    {
      role: 'Danseuse',
      nom: 'Philippine Kedzia',
      photo: 'Phil.png'
    },
    {
      role: 'Danseuse',
      nom: 'Julie Mateu',
      photo: 'Julie.png'
    },
    {
      role: 'Danseuse',
      nom: 'Inès Aouar',
      photo: 'Ines.png'
    },
    {
      role: 'Danseuse',
      nom: 'Sarah Menand',
      photo: 'Lysee.png'
    },
    {
      role: 'Danseuse',
      nom: 'Léa Ruas',
      photo: 'Hanas.png'
    },
    {
      role: 'Danseuse',
      nom: 'Capucine Norcia',
      photo: 'Capu.png'
    },
    {
      role: 'Danseuse',
      nom: 'Marine Sigaud',
      photo: 'Schtroumpfette.png'
    },
    {
      role: 'Danseuse',
      nom: 'Lise Le Blévennec',
      photo: 'Lise.png'
    },
    {
      role: 'Danseur',
      nom: 'Edmond Verdier',
      photo: 'Edmond.png'
    },
    {
      role: 'Danseuse',
      nom: 'Emma Belloc',
      photo: 'Emma.png'
    }
  ],

  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Jean Turk',
      photo: 'Zan.png'
    },
    {
      role: 'Respo costumes',
      nom: 'Imane Demnati',
      photo: 'Nappyh.png'
    },
    {
      role: 'Costumière',
      nom: 'Laura Chevaillier',
      photo: 'Laura.png'
    },
    {
      role: 'Costumière',
      nom: 'Soohyun Choi',
      photo: 'Soohyun.png'
    },
    {
      role: 'Costumier',
      nom: 'Celine Souksavat',
      photo: 'Celine.png'
    },
    {
      role: 'Costumière',
      nom: 'Mariem Naimi',
      photo: 'Pucc.png'
    },
    {
      role: 'Costumière',
      nom: 'Eya Bachterzi',
      photo: 'Mayze.png'
    },
    {
      role: 'Costumière',
      nom: 'Audrey Le Mestre',
      photo: 'Ophyne.png'
    }
  ],

  decors: [
    {
      role: 'Respo décors',
      nom: 'Chloé Marette',
      photo: 'Chloe.png'
    },
    {
      role: 'Respo décors',
      nom: 'Adèle Lefevre',
      photo: 'Adele.png'
    },
    {
      role: 'Décorateur',
      nom: 'Ian Vulcanescu',
      photo: 'Obham.png'
    },
    {
      role: 'Décorateur',
      nom: 'Pierrick Durand',
      photo: 'Pierrick.png'
    },
    {
      role: 'Décorateur',
      nom: 'Léopold Castagne',
      photo: 'Bashung.png'
    },
    {
      role: 'Décorateur',
      nom: 'Vincent Daniel',
      photo: '2zer.png'
    },
    {
      role: 'Décoratrice',
      nom: 'Soline Minvielle',
      photo: 'Ysby.png'
    },
    {
      role: 'Décoratrice',
      nom: 'Anaïs Bousseau',
      photo: 'Anais.png'
    }
  ],

  technique: [
    {
      role: 'Respo lumière',
      nom: 'Eleonor Malicornet',
      photo: 'Eleonore.png'
    },
    {
      role: 'Respo son',
      nom: 'Agustín Soux',
      photo: 'Prime.png'
    },
    {
      role: 'Respo son',
      nom: 'Clément Pacoret',
      photo: 'Dino.png'
    },
    {
      role: 'VP son',
      nom: 'Dan Vulcanescu',
      photo: 'Dan.png'
    },
    {
      role: 'VP son',
      nom: 'Mattéo Hapiot',
      photo: 'Skotch.png'
    },
    {
      role: 'VP son',
      nom: 'Nicolas Watiez',
      photo: 'Toven.png'
    },
    {
      role: 'VP son',
      nom: 'Noémie Furcatte',
      photo: 'Noemie.png'
    }
  ],

  amour: [
    {
      role: 'VP Amour',
      nom: 'Baptiste Dupoux',
      photo: 'Windo.png'
    },
    {
      role: 'VP Amour',
      nom: 'Valentin Russo',
      photo: 'Duble.png'
    },
    {
      role: 'VP Amour',
      nom: 'Maud Ali Mehenni',
      photo: 'Kwhym.png'
    },
    {
      role: 'VP Amour',
      nom: 'Johanna Dussoux',
      photo: 'Jo.png'
    },
    {
      role: 'VP Amour',
      nom: 'Romain Meaux',
      photo: 'Brocs.png'
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
