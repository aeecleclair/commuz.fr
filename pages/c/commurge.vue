<template lang="html">
  <div style="overflow-y: hidden;">
    <audio id="commurge_audio" type="audio/mp3" src="/c/commurge/music/jul.mp3" autoplay loop />

    <div id="commurge__container">
      <div id="overlay_chope">
        <img id="love_loader" src="/c/commurge/iloveyou.gif">
        <div id="match">
          <div id="match__pictures">
            <div id="chopeA" class="match__person">
              <img id="chopeA_photo" src="">
              <!-- <div id="chopeA__photo" class="match__pictures"></div> -->
              <div class="match__description">
                <p id="chopeA__name" class="match__names">Nom 1</p>
                <p id="chopeA__desc">Viergee - INTJ</p>
              </div>
            </div>
            <div id="chopeB" class="match__person">
              <img id="chopeB_photo" src="">
              <!-- <div id="chopeB__photo" class="match__pictures"></div> -->
              <div class="match__description">
                <p id="chopeB__name" class="match__names">Nom 1</p>
                <p id="chopeB__desc">Viergee - INTJ</p>
              </div>
            </div>
          </div>
          <div id="chopOrNot">
            <p id="send_no_chope" class="answer_chope" @click="sendChope('no')">🤮</p>
            <p id="super_chope" class="answer_chope" @click="sendSuperChope()" />
            <p id="send_chope" class="answer_chope" @click="sendChope('yes')">🥰</p>
          </div>
          <div id="chopOrNot">
            <p />
            <p id="counter_no" style="color: #00FF00">0</p> / <p id="counter_yes" style="color: rgb(255, 0, 0)">0</p>

          </div>
        </div>
      </div>
      <div id="commurge__home" style="height : 100vh;">
        <img id="desk" class="commurge__image" src="/c/commurge/desk.png" alt="A Desk">
        <img id="host" class="commurge__image" src="/c/commurge/host.gif" alt="host">
        <img id="mic" class="commurge__image" src="/c/commurge/mic.gif" alt="mic">
        <button id="show_chope" type="button" class="commurge__button" @click="openOverlay()">¡ Willkommen !</button>
      </div>

    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import rainingParticles from '~/includes/rainingParticles';

const hashFunction = function (v, a, b, t) {
  const string = v + a + b + t;

  let hash = 0;

  if (string.length == 0) return hash;

  for (let i = 0; i < string.length; i++) {
    const ch = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash = hash & hash;
  }

  return hash;
}

//We define the status of the Overlay
let OverlayStatus = false;

// Fait apparaitre les propositions de choppes.
const openOverlay = function () {
  const overlayChopeElt = document.getElementById('overlay_chope');
  const homeElt = document.getElementById('commurge__home');
  OverlayStatus = true;

  // Timeline : voir documentation anime.js
  const chopeTimeline = anime.timeline();

  chopeTimeline.add({
    targets: homeElt,
    opacity: [1, 0],
    duration: 500,
    begin: function (anime) {
      genChope();
    },
    complete: function (anime) {
      homeElt.remove();
    },
  })
  // Premier chargement des images
  chopeTimeline.add({
    targets: overlayChopeElt,
    borderRadius: ['50%', '0%'],
    scale: [0, 1],
    duration: 2000,
    easing: 'easeInOutQuart',
    begin: function () {
      overlayChopeElt.style.display = 'flex';
    },
  })

  // Animation des émojies
  anime({
    targets: '.answer_chope',
    translateY: [-5, 5],
    rotateZ: [-5, 5],
    autoplay: true,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  })

}

const commuzards = [];

let canVote = true;

// Mis à jours des photos
const applyChope = function (commuzard, id) {
  const chopeElt = document.getElementById(id)
  const chopeImg = document.getElementById(id + '_photo')
  const chopeName = document.getElementById(id + '__name')
  const chopeDesc = document.getElementById(id + '__desc')
  //chopeImg.src = `/c/commurge/pictures/${commuzard[3]}`
  chopeImg.src = `/images/equipes/2025/${commuzard[3]}`
  chopeName.innerHTML = `${commuzard[0]}`
  chopeDesc.innerHTML = `${commuzard[4]} - ${commuzard[1]} - ${commuzard[2]}`
}

// Génération d'un couple
const genChope = function () {

  // Tirage au sort
  const chopeA = commuzards[1 + Math.floor(Math.random() * Math.floor(commuzards.length - 1))];
  let chopeB = commuzards[1 + Math.floor(Math.random() * Math.floor(commuzards.length - 1))];
  while (chopeA === chopeB) {
    chopeB = commuzards[1 + Math.floor(Math.random() * Math.floor(commuzards.length - 1))]
  }
  // Mis à jour des photos
  applyChope(chopeA, 'chopeA');
  applyChope(chopeB, 'chopeB');
  canVote = true;
}

// Transistion d'un couple à l'autre 
const genNouvelleChope = function () {

  // Fase in and out des nouveaux chopes
  const nouvellechopeTimeline = anime.timeline();
  nouvellechopeTimeline.add({
    targets: document.getElementById('overlay_chope'),
    borderRadius: ['0', '50%'],
    scale: [1, 0],
    duration: 500,
    easing: 'easeInOutQuart'
  });
  nouvellechopeTimeline.add({
    targets: document.getElementById('overlay_chope'),
    borderRadius: ['50%', '0%'],
    scale: [0, 1],
    duration: 500,
    easing: 'easeInOutQuart',
    begin: function (anime) {
      genChope()
    }
  });
}

// Envoie réponse positive
let count_no = 0;
let count_yes = 0;
// Compter superchope
let count_super_chope = 0;

const sendChope = function (answer) {

  if (canVote) {
    canVote = false;
    //At each vote we actualise the count_super_chope and we add the emoji if it is useable !
    count_super_chope++;
    if (count_super_chope > 19) {
      document.getElementById('super_chope').innerHTML = "🤩";
    }
    if (['yes', 'no'].includes(answer)) {
      // Construction de la requête
      if (answer === "yes") {
        rainingParticles(["🧡", "💜", "❤️", "🌼", "🌸"])
        // Incrémentation du compteur
        count_yes++;
        document.getElementById('counter_yes').innerText = count_yes;
      }
      else {
        rainingParticles(["🤮", "💩"])
        // Incrémentation du compteur
        count_no++;
        document.getElementById('counter_no').innerText = count_no;
      }

      const chopeA = document.getElementById('chopeA__name').innerHTML;
      const chopeB = document.getElementById('chopeB__name').innerHTML;
      const timestamp = Date.now().toString();

      fetch('https://commurge.alwaysdata.net/vote', {
        headers: {
          "Content-Type": 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          validay: answer,
          chopeA: chopeA,
          chopeB: chopeB,
          timestamp: timestamp
          // hash : hashFunction(answer, chopeA, chopeB, timestamp)  
        })
      })
        .then(res => {
          if (res.ok) {
            genNouvelleChope()
          }
          else {
            alert("Erreur 😿")
          }
        })
        .catch(() => alert("Erreur 😭"))
    }
  }
}

const sendSuperChope = function () {
  if (canVote && (count_super_chope > 19)) {
    canVote = false;
    //On actualise count_super_chope et on enlève l'emoji
    count_super_chope -= 20;
    if (count_super_chope < 20) {
      document.getElementById('super_chope').innerHTML = " ";
    }
    rainingParticles(["🧡", "💜", "❤️", "🌼", "🌸"])
    // On boucle 2 fois pour envoyer 2 votes
    for (let i = 0; i < 2; i++) {
      count_yes++;
      document.getElementById('counter_yes').innerText = count_yes;

      const chopeA = document.getElementById('chopeA__name').innerHTML;
      const chopeB = document.getElementById('chopeB__name').innerHTML;
      const timestamp = Date.now().toString();

      fetch('https://commurge.alwaysdata.net/vote', {
        headers: {
          "Content-Type": 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          validay: "yes",
          chopeA: chopeA,
          chopeB: chopeB,
          timestamp: timestamp
          // hash : hashFunction(answer, chopeA, chopeB, timestamp)  
        })
      })
        .then(res => {
          if (res.ok) {
            genNouvelleChope()
          }
          else {
            alert("Erreur 😿")
          }
        })
        .catch(() => alert("Erreur 😭"))
    }
  }
}


const handleKeyDown = function (event) {
  if (OverlayStatus) {
    if (event.keyCode === 37 || event.key === 'ArrowLeft') {
      this.sendChope('no');
    } else if (event.keyCode === 39 || event.key === 'ArrowRight') {
      this.sendChope('yes');
    } else if (event.keyCode == 38 || event.key === 'ArrowUp') {
      this.sendSuperChope();
    }
  }
}

export default defineComponent({
  setup() {
    definePageMeta({
      layout: "conchiage",
      name: "Site des chopes",
    });
  },
  watch: {
    canActivateSuperChope: function () {
      if (this.count_super_chope > 19) {
        document.getElementById('super_chope').innerHTML = "🤩";
      }
    }
  }, //
  mounted: async function () {

    //await fetch('http://localhost:3000/c/commurge/infos.csv')
    //  .then((response) => response.text())
    //  .then(csv => csv.split('\n'))
    //  .then(t => { t.forEach(e => commuzards.push(e.split(';'))) })


    await fetch('/c/commurge/infos.csv')
      .then((response) => response.text())
      .then(csv => csv.split('\n'))
      .then(t => { t.forEach(e => commuzards.push(e.split(';'))) })
    //let chansons = ['boom.mp3', 'chimai.mp3', 'dion.mp3', 'feuxamour.mp3', 'jul.mp3', 'queen.mp3'];
    //let i = Math.floor(Math.random() * Math.floor(chansons.length));
    //document.getElementById('commurge_audio').src = `/c/commurge/music/${chansons[i]}`;
    anime({
      targets: '#desk',
      autoplay: true,
      rotateY: [-20, 20],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
    anime({
      targets: '#show_chope',
      autoplay: true,
      scale: [1, 1.1],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: { openOverlay, sendChope, rainingParticles, handleKeyDown, sendSuperChope }
})

</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');
@import url('https://fonts.googleapis.com/css?family=Pacifico');

#overlay_chope {
  display: none;
  height: 100%;
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

#match {
  color: rgb(173, 112, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;

  p {
    margin: 0;
  }

  #match__pictures {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    flex: 1;
    width: 50%;
    gap: 20px;

    @media (min-width: 700px) {
      flex-direction: row;
      width: 100%;
    }
  }

  #chopeA {
    flex-direction: column-reverse;
  }

  .match__names {
    font-size: 2em;
  }

  .match__pictures {
    background-size: cover;
  }

  .match__person {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    img {
      width: 100%;
    }

    .match__description {
      font-weight: bold;
    }
  }
}


#chopOrNot {
  display: flex;
  justify-content: space-around;
  font-size: 8vh;
  width: 100%;

  p {
    margin: 0;
  }

  #send_chope {
    cursor: pointer;
  }

  #send_no_chope {
    cursor: pointer;
  }

  #super_chope {
    cursor: pointer;
  }
}

#love_loader {
  opacity: 0;
  z-index: 11;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35vw;
}


#commurge__container {
  height: 100%;

  @media (min-height: 700px) {
    height: 100vh;
    overflow-y: scroll;
  }

  width: 100%;
  align-items: center;
  justify-items: center;
  background-color: #000000;
  background-image: url('/c/commurge/stars_bg.gif');
  background-repeat: repeat;

  #commurge__home {
    padding: 20px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(5, 20%);
    height: 100%;

    // Bouton "Découvrir une choppe"
    .commurge__button {
      grid-area: 4/1/5/4;
      z-index: 2;
      background-color: rgb(173, 112, 0);
      padding: 1em 2em;
      border-radius: 50%;
      font-size: 1.4em;
      color: white;
      font-family: 'Dancing Script', cursive;
      font-weight: bold;
      max-width: 300px;
      margin: 0 auto;
    }

    #desk {
      grid-area: 3/2;
    }

    #mic {
      grid-area: 1/3;
    }

    #host {
      grid-area: 1/1/3/3;
    }

    .commurge__image {
      max-height: 100%;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
