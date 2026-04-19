<template lang="html">
  <div style="overflow-y: hidden;">
    <audio id="commurge_audio" type="audio/mp3" src="/c/commurge/jul.mp3" autoplay loop></audio>

    <div id="commurge__container">
      <div id="overlay_chope">
        <img id="love_loader" src="/c/commurge/iloveyou.gif">
        <div id="match">
          <div id="match__pictures">
            <div id="chopeA" class="match__person">
              <img id="chopeA_photo" src="">
              <div class="match__description">
                <p id="chopeA__name" class="match__names">Nom 1</p>
                <p id="chopeA__desc">Viergee - INTJ</p>
              </div>
            </div>
            <div id="chopeB" class="match__person">
              <img id="chopeB_photo" src="">
              <div class="match__description">
                <p id="chopeB__name" class="match__names">Nom 1</p>
                <p id="chopeB__desc">Viergee - INTJ</p>
              </div>
            </div>
          </div>
          <div id="chopOrNot">
            <p id="send_no_chope" class="answer_chope" @click="sendChope('no')">👎</p>
            <p id="super_chope" class="answer_chope" @click="sendSuperChope()" />
            <p id="send_chope" class="answer_chope" @click="sendChope('yes')">👍</p>
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

import { animate, createTimeline } from 'animejs';
import rainingParticles from '~/includes/rainingParticles';

let OverlayStatus = false;

const openOverlay = function () {
  if (commuzards.length < 2) {
    alert("Les données ne sont pas encore chargées, réessaie dans un instant 😅");
    return;
  }

  const overlayChopeElt = document.getElementById('overlay_chope');
  const homeElt = document.getElementById('commurge__home');
  OverlayStatus = true;

  // v4: anime.timeline() → createTimeline()
  const chopeTimeline = createTimeline();

  chopeTimeline.add(homeElt, {
    opacity: [1, 0],
    duration: 500,
    onBegin: function () { genChope(); },
    onComplete: function () { homeElt.remove(); },
  });

  chopeTimeline.add(overlayChopeElt, {
    borderRadius: ['50%', '0%'],
    scale: [0, 1],
    duration: 2000,
    easing: 'easeInOutQuart',
    onBegin: function () { overlayChopeElt.style.display = 'flex'; },
  });

  // v4: anime({...}) → animate(targets, props)
  animate('.answer_chope', {
    translateY: [-5, 5],
    rotateZ: [-5, 5],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });
}

const commuzards = [];
let canVote = true;

const applyChope = function (commuzard, id) {
  const chopeImg = document.getElementById(id + '_photo')
  const chopeName = document.getElementById(id + '__name')
  const chopeDesc = document.getElementById(id + '__desc')

  chopeImg.src = `/images/equipes/2026/${commuzard[3]}`
  chopeImg.style.width = 'min(280px, 80vw)'
  chopeImg.style.maxHeight = '40vh'
  chopeImg.style.objectFit = 'contain'
  // in 2026, pics were too big to fit in the chope, might change from year to year

  chopeName.innerHTML = `${commuzard[0]}`
  chopeDesc.innerHTML = `${commuzard[4]} - ${commuzard[1]} - ${commuzard[2]}`
}

const genChope = function () {
  const chopeA = commuzards[1 + Math.floor(Math.random() * Math.floor(commuzards.length - 1))];
  let chopeB = commuzards[1 + Math.floor(Math.random() * Math.floor(commuzards.length - 1))];
  while (chopeA === chopeB) {
    chopeB = commuzards[1 + Math.floor(Math.random() * Math.floor(commuzards.length - 1))]
  }
  applyChope(chopeA, 'chopeA');
  applyChope(chopeB, 'chopeB');
  canVote = true;
}

const genNouvelleChope = function () {
  const overlayEl = document.getElementById('overlay_chope');
  const t = createTimeline();
  t.add(overlayEl, {
    borderRadius: ['0', '50%'],
    scale: [1, 0],
    duration: 500,
    easing: 'easeInOutQuart'
  });
  t.add(overlayEl, {
    borderRadius: ['50%', '0%'],
    scale: [0, 1],
    duration: 500,
    easing: 'easeInOutQuart',
    onBegin: function () { genChope() }
  });
}

let count_no = 0;
let count_yes = 0;
let count_super_chope = 0;

const sendChope = function (answer) {
  if (canVote) {
    canVote = false;
    count_super_chope++;
    if (count_super_chope > 19) {
      document.getElementById('super_chope').innerHTML = "🤩";
    }
    if (['yes', 'no'].includes(answer)) {
      if (answer === "yes") {
        rainingParticles(["🧡", "💜", "❤️", "🌼", "🌸"])
        count_yes++;
        document.getElementById('counter_yes').innerText = count_yes;
      } else {
        rainingParticles(["🤮", "💩"])
        count_no++;
        document.getElementById('counter_no').innerText = count_no;
      }
      const chopeA = document.getElementById('chopeA__name').innerHTML;
      const chopeB = document.getElementById('chopeB__name').innerHTML;
      const timestamp = Date.now().toString();

      genNouvelleChope();
      fetch('/api/vote', {
        headers: { "Content-Type": 'application/json' },
        method: 'POST',
        body: JSON.stringify({ validay: answer, chopeA, chopeB, timestamp })
      }).catch(err => console.warn("Vote non enregistré :", err));
    }
  }
}

const sendSuperChope = function () {
  if (canVote && (count_super_chope > 19)) {
    canVote = false;
    count_super_chope -= 20;
    if (count_super_chope < 20) { document.getElementById('super_chope').innerHTML = " "; }
    rainingParticles(["🧡", "💜", "❤️", "🌼", "🌸"])
    for (let i = 0; i < 2; i++) {
      count_yes++;
      document.getElementById('counter_yes').innerText = count_yes;
      const chopeA = document.getElementById('chopeA__name').innerHTML;
      const chopeB = document.getElementById('chopeB__name').innerHTML;
      const timestamp = Date.now().toString();

      fetch('/api/vote', {
        headers: { "Content-Type": 'application/json' },
        method: 'POST',
        body: JSON.stringify({ validay: "yes", chopeA, chopeB, timestamp })
      }).catch(err => console.warn("Vote non enregistré :", err));
    }
    genNouvelleChope();
  }
}

const handleKeyDown = function (event) {
  if (OverlayStatus) {
    if (event.keyCode === 37 || event.key === 'ArrowLeft') { this.sendChope('no'); }
    else if (event.keyCode === 39 || event.key === 'ArrowRight') { this.sendChope('yes'); }
    else if (event.keyCode == 38 || event.key === 'ArrowUp') { this.sendSuperChope(); }
  }
}

export default defineComponent({
  setup() {
    definePageMeta({ layout: "conchiage", name: "Site des chopes" });
  },
  mounted: async function () {
    await fetch('/c/commurge/infos.csv')
      .then((response) => response.text())
      .then(csv => csv.split('\n'))
      .then(t => { t.forEach(e => commuzards.push(e.split(';'))) })
      .catch(err => console.error('Impossible de charger infos.csv :', err));

    animate('#desk', { rotateY: [-20, 20], direction: 'alternate', loop: true, easing: 'easeInOutSine' });
    animate('#show_chope', { scale: [1, 1.1], direction: 'alternate', loop: true, easing: 'easeInOutSine' });
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

  #send_chope,
  #send_no_chope,
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
