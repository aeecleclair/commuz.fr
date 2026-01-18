<<template>
  <div class="photo-quiz">
    <img :src="currentPhoto" alt="Random Photo" class="photo" />
    <div v-if="!showError" class="buttons flex flex-row justify-center gap-4">
      <UButton class="bg-commuz-500 hover:bg-commuz-900" v-for="name in currentNames" :key="name" @click="checkAnswer(name)">{{ name }}</UButton>
    </div>
    <div v-else class="error-message">
      <p>Eh non ! C'était {{ correctName }}.</p>
      <UButton class="bg-commuz-500 hover:bg-commuz-900 mt-4" @click="continueGame">Continuer</UButton>
    </div>
    <div class="counters">
      <p>Score: {{ score }}</p>
      <p>Streak: {{ streak }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        { name: 'Adèle/Fetah', src: '/images/equipes/2026/Photo Trombi/Adèle_Fetha - Zikos_Alto.png' },
        { name: 'Adrien/Shall', src: '/images/equipes/2026/Photo Trombi/Adrien_Shall - MeS.png'},
        { name: 'Agathe', src: '/images/equipes/2026/Photo Trombi/Agathe - Costumes.png' },
        { name: 'Albertine', src: '/images/equipes/2026/Photo Trombi/Albertine - Respo Vidéo.png'},
        { name: 'Alice/Bensé', src: '/images/equipes/2026/Photo Trombi/Alice_Ben_sé - Costumes.png' },
        { name: 'Alexandre/Patso', src: '/images/equipes/2026/Photo Trombi/Alexandre_Patso - AC.png' },
        { name: 'Alicia', src: '/images/equipes/2026/Photo Trombi/Alicia - AC.png' },
        { name: 'Aline/Boonth', src: '/images/equipes/2026/Photo Trombi/Aline_Boonth - Zikos_Basson.png' },
        { name: 'Alix L', src: '/images/equipes/2026/Photo Trombi/Alix - Prez_ Em.png' },
        { name: 'Alix O', src: '/images/equipes/2026/Photo Trombi/Alix - Respo Danse.png' },
        { name: 'Amaury/Sybher', src: '/images/equipes/2026/Photo Trombi/Amaury_Sybher - Zikos_Trompette.png' },
        { name: 'Anaïs', src: '/images/equipes/2026/Photo Trombi/Anaïs - Danse.png' },
        { name: 'Anne-Isabelle', src: '/images/equipes/2026/Photo Trombi/Anne-Isabelle - Scénariste.png' },
        { name: 'Anthony', src: '/images/equipes/2026/Photo Trombi/Antony - Respo Vidéo.png' },
        { name: 'Armand/Jhobahtes', src: '/images/equipes/2026/Photo Trombi/Armand_Jhobates - Trez_.png' },
        { name: 'Armel/Garibaldi', src: '/images/equipes/2026/Photo Trombi/Armel_Garibaldi - Respo Zikos.png' },
        { name: 'Audrey/Ophyne', src: '/images/equipes/2026/Photo Trombi/Audrey_Ophyne - Respo Costumes.png' },
        { name: 'Augustin/Barbâk', src: '/images/equipes/2026/Photo Trombi/Augustin_Barbâk - Zikos_Clarinette.png' },
        { name: 'Aurélien/Rekse', src: '/images/equipes/2026/Photo Trombi/Aurélien_Rekse - Zikos_Alto.png' },
        { name: 'Baptiste/Blue', src: '/images/equipes/2026/Photo Trombi/Baptiste_Blue - Respo Décors.png' },
        { name: 'Baptise/Windo', src: '/images/equipes/2026/Photo Trombi/Baptiste_Windo - Danse.png' },
        { name: 'Basile/Guetah', src: '/images/equipes/2026/Photo Trombi/Basile_Guetah - Décors.png' },
        { name: 'Benoît/Vigho', src: '/images/equipes/2026/Photo Trombi/Benoît_Vigho - Respo CHant.png' },
        { name: 'Bilâl/Hydro', src: '/images/equipes/2026/Photo Trombi/Bilâl_Hydro - Respo Lumières.png' },
        { name: 'Brieuc/Trohn', src: '/images/equipes/2026/Photo Trombi/Brieuc_Trohn - Danse.png' },
        { name: 'Camille', src: '/images/equipes/2026/Photo Trombi/Camille - Décors.png' },
        { name: 'Cassandre/Chaky', src: '/images/equipes/2026/Photo Trombi/Cassandre_Cha_ky - Respo Compo.png' },
        { name: 'Célia', src: '/images/equipes/2026/Photo Trombi/Célia - Danse.png' },
        { name: 'Célia/Loopyh', src: '/images/equipes/2026/Photo Trombi/Célia_Loopyh - Son.png' },
        { name: 'Charline', src: '/images/equipes/2026/Photo Trombi/Charline - CA.png' },
        { name: 'Charlotte/Ohkaÿe', src: '/images/equipes/2026/Photo Trombi/Charlotte_Okhaÿe - WebMaster.png' },
        { name: 'Chloé', src: '/images/equipes/2026/Photo Trombi/Chloé - Costumes.png' },
        { name: 'Claire', src: '/images/equipes/2026/Photo Trombi/Claire - Respo Costumes.png' },
        { name: 'Clarence/Lindy', src: '/images/equipes/2026/Photo Trombi/Clarence_Lindy - AC.png' },
        { name: 'Daphné', src: '/images/equipes/2026/Photo Trombi/Daphné - Danse.png' },
        { name: 'Eléonore', src: '/images/equipes/2026/Photo Trombi/Eléonore - Danse.png' },
        { name: 'Emanuelle/Madj', src: '/images/equipes/2026/Photo Trombi/Emanuelle_Madj - Amour.png' },
        { name: 'Emilie/Ryne', src: '/images/equipes/2026/Photo Trombi/Emilie_Ryne - Costumes.png' },
        { name: 'Emma L', src: '/images/equipes/2026/Photo Trombi/Emma L - Danse.png' },
        { name: 'Emma B', src: '/images/equipes/2026/Photo Trombi/Emma.B - Danse.png' },
        { name: 'Erik/Zimbra', src: '/images/equipes/2026/Photo Trombi/Erik_Zimbra - Respo Zikos.png' },
        { name: 'Etienne/Ebay', src: '/images/equipes/2026/Photo Trombi/Etienne_Ebay - Amour.png' },
        { name: 'Flavien/Klay', src: '/images/equipes/2026/Photo Trombi/Flavien_Klay - Compo.png' },
        { name: 'Flora', src: '/images/equipes/2026/Photo Trombi/Flora - Amour.png' },
        { name: 'Gabrielle/Kapla', src: '/images/equipes/2026/Photo Trombi/Gabrielle_Kapla - Choriste.png' },
        { name: 'Geoffrey/Proko', src: '/images/equipes/2026/Photo Trombi/Geoffrey_Proko - Décors.png' },
        { name: 'Guilhem/.wav', src: '/images/equipes/2026/Photo Trombi/Guilhem_.wav - Zikos_Batterie.png' },
        { name: 'Guillaume/Termo', src: '/images/equipes/2026/Photo Trombi/Guillaume_Termo - Décors.png' },
        { name: 'Jeanne/Etsy', src: '/images/equipes/2026/Photo Trombi/Jeanne_Etsy - Choriste.png' },
        { name: 'Johanna', src: '/images/equipes/2026/Photo Trombi/Johanna - AC.png' },
        { name: 'Josie', src: '/images/equipes/2026/Photo Trombi/Joséphine - SecGé.png' },
        { name: 'Jules/Peusher', src: '/images/equipes/2026/Photo Trombi/Jules_Peusher - Choriste.png' },
        { name: 'Juliette C', src: '/images/equipes/2026/Photo Trombi/Juliette - Respo Parte.png' },
        { name: 'Juliette H', src: '/images/equipes/2026/Photo Trombi/Juliette - Danse.png' },
        { name: 'Laureline', src: '/images/equipes/2026/Photo Trombi/Laureline - Respo Com.png' },
        { name: 'Laurène/Lidha', src: '/images/equipes/2026/Photo Trombi/Laurène_Lidha - Son.png' },
        { name: 'Léa/Delré', src: '/images/equipes/2026/Photo Trombi/Léa_Del_ré - CA.png' },
        { name: 'Line/Hardy', src: '/images/equipes/2026/Photo Trombi/Line_Hardy - Respo Chant.png' },
        { name: 'Louise/Ehko', src: '/images/equipes/2026/Photo Trombi/Louise_Ekho - Zikos_Clarinette.png' },
        { name: 'Lucas/Hémoh', src: '/images/equipes/2026/Photo Trombi/Lucas_Hémoh - Zikos_Flûte Traversière.png' },
        { name: 'Lucas/Mayzy', src: '/images/equipes/2026/Photo Trombi/Lucas_Mayzy - Zikos_Basse.png' },
        { name: 'Lucie', src: '/images/equipes/2026/Photo Trombi/Lucie - Costumes.png' },
        { name: 'Lyna-May/Délis', src: '/images/equipes/2026/Photo Trombi/Lyna-May_Délis - Respo Compo.png' },
        { name: 'Malo/Fahso', src: '/images/equipes/2026/Photo Trombi/Malo_Fahso - Scénariste.png' },
        { name: 'Marc/Midi', src: '/images/equipes/2026/Photo Trombi/Marc_Midi - AC.png' },
        { name: 'Marco', src: '/images/equipes/2026/Photo Trombi/Marco - Compo.png' },
        { name: 'Margot/Arial', src: '/images/equipes/2026/Photo Trombi/Margot_Arial - Décors.png' },
        { name: 'Margot/Liba', src: '/images/equipes/2026/Photo Trombi/Margot_Liba - Respo Décors.png' },
        { name: 'Marie', src: '/images/equipes/2026/Photo Trombi/Marie - Zikos_Flûte Traversière.png' },
        { name: 'Marine', src: '/images/equipes/2026/Photo Trombi/Marine - Respo Danse.png' },
        { name: 'Marion', src: '/images/equipes/2026/Photo Trombi/Marion - Danse.png' },
        { name: 'Marion/Loom', src: '/images/equipes/2026/Photo Trombi/Marion_Loom - Son.png' },
        { name: 'Marius/Maha', src: '/images/equipes/2026/Photo Trombi/Marius - Respo Com.png' },
        { name: 'Mattéo/Cyhagha', src: '/images/equipes/2026/Photo Trombi/Mattéo_Cyhagha - MeS.png' },
        { name: 'Maxime/Bolso', src: '/images/equipes/2026/Photo Trombi/Maxime B._Bolso - Zikos_Cor.png' },
        { name: 'Maxime/Sheper', src: '/images/equipes/2026/Photo Trombi/Maxime D._Sheper - Zikos_Violon.png' },
        { name: 'Maxime/Green', src: '/images/equipes/2026/Photo Trombi/Maxime_Green - Parolier.png' },
        { name: 'Mia', src: '/images/equipes/2026/Photo Trombi/Mia - Décors.png' },
        { name: 'Mileva', src: '/images/equipes/2026/Photo Trombi/Mileva - Costumes.png' },
        { name: 'Mona/Ôpack', src: '/images/equipes/2026/Photo Trombi/Mona_Ôpack - Décors.png' },
        { name: 'Naël', src: '/images/equipes/2026/Photo Trombi/Naël - AC.png' },
        { name: 'Nathan/Kdo', src: '/images/equipes/2026/Photo Trombi/Nathan_Kdo - Amour.png' },
        { name: 'Nathan/Manjâh', src: '/images/equipes/2026/Photo Trombi/Nathan_Manjâh - Choriste.png' },
        { name: 'Nicolas/Toven', src: '/images/equipes/2026/Photo Trombi/Nicolas_Toven - Prez_ Centrale.png' },
        { name: 'Nina/Muse', src: '/images/equipes/2026/Photo Trombi/Nina_Muse - Décors.png' },
        { name: 'Pauline/Lelie', src: '/images/equipes/2026/Photo Trombi/Pauline_Lelie - Danse.png' },
        { name: 'Pierre/Kaisen', src: '/images/equipes/2026/Photo Trombi/Pierre_Kaizen - Compo_Piano.png' },
        { name: 'Raphaël/Aux', src: '/images/equipes/2026/Photo Trombi/Raphaël_Aux - Choriste.png' },
        { name: 'Raphaël/Jafar', src: '/images/equipes/2026/Photo Trombi/Raphaël_Jafar - Zikos_Saxo.png' },
        { name: 'Robin/Nawak', src: '/images/equipes/2026/Photo Trombi/Robin_Nawak - Scénariste.png' },
        { name: 'Sacha/Noadkajooh', src: '/images/equipes/2026/Photo Trombi/Sacha_Noadkajooh - Zikos_Hautbois.png' },
        { name: 'Samuel/Dutopinambour', src: '/images/equipes/2026/Photo Trombi/Samuel_Dutopinambour - Son.png' },
        { name: 'Sarah', src: '/images/equipes/2026/Photo Trombi/Sarah - Choriste.png' },
        { name: 'Sibylle/Tiyah', src: '/images/equipes/2026/Photo Trombi/Sibylle_Thyah - Respo So.png' },
        { name: 'Théo/DUB', src: '/images/equipes/2026/Photo Trombi/Théo_DUB - VP Lumière.png' },
        { name: 'Thibault', src: '/images/equipes/2026/Photo Trombi/Thibault - Scénariste.png' },
        { name: 'Tristan/T.A.C', src: '/images/equipes/2026/Photo Trombi/Tristan_T.A.C - Respo Son.png' },
        { name: 'Vincent', src: '/images/equipes/2026/Photo Trombi/Vincent - Amour.png' },
      ],

      currentPhoto: '',
      currentNames: [],
      correctName: '',
      score: 0,
      streak: 0,
      showError: false,
    };
  },
  methods: {
    pickRandomPhoto() {
      const randomIndex = Math.floor(Math.random() * this.photos.length);
      this.currentPhoto = this.photos[randomIndex].src;
      this.correctName = this.photos[randomIndex].name;
      this.pickRandomNames();
    },
    pickRandomNames() {
      const names = this.photos.map(photo => photo.name);
      this.currentNames = [this.correctName];
      while (this.currentNames.length < 3) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        if (!this.currentNames.includes(randomName)) {
          this.currentNames.push(randomName);
        }
      }
      this.currentNames.sort(() => Math.random() - 0.5);
    },
    checkAnswer(selectedName) {
      if (selectedName === this.correctName) {
        this.score++;
        this.streak++;
        this.pickRandomPhoto();
      } else {
        this.streak = 0;
        this.showError = true;
      }
    },
    continueGame() {
      this.showError = false;
      this.pickRandomPhoto();
    },
  },
  mounted() {
    this.pickRandomPhoto();
  },
};
</script>

<style scoped>
.photo-quiz {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo {
  width: 300px;
  height: auto;
  display: block;
  margin-top: 60px;
}
.buttons {
  margin-top: 60px;
  margin-bottom: 20px;
}
button {
  margin: 0 10px;
}
.counters {
  margin-top: 20px;
  margin-bottom: 80px;
}
:deep(.bg-commuz-500:active),
:deep(.bg-commuz-500:focus),
:deep(.bg-commuz-500.active) {
  background-color: inherit !important;
}
</style>
