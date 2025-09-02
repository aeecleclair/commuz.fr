<template>
  <div class="flex flex-col items-center space-y-5 py-8 gap-4">

    <h1
      class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white text-center font-beyond">
      <!-- We may use text-neutral-900 for light mode-->
      La Commuz'
    </h1>

    <a v-if="card !== null" :href="card.href" class="py-5">
      <UCard class="group">
        <div class="w-96 flex flex-col items-center">
          <span
            class="text-6xl font-bold rounded-xl transition-all duration-500 bg-gradient-to-tl from-fuchsia-800 via-blue-500 to-cyan-500 bg-[length:200%_200%] bg-[position:0%_0%] text-transparent group-hover:bg-[position:100%_100%] bg-clip-text">
            {{ card.title }}
          </span>
          <div
            class="flex flex-row items-center space-x-2 font-caviar text-commuz-500 group-hover:text-fuchsia-800 transition-all duration-500">
            {{ card.desc }}
          </div>
          <div class="flex flex-row items-center space-x-2 mt-4 gap-2">
            <span
              class="text-sm font-caviar text-commuz-500 group-hover:text-fuchsia-800 transition-all duration-500">En
              savoir plus</span>
            <UIcon name="i-heroicons-arrow-right"
              class="w-4 h-4 text-commuz-500 group-hover:text-fuchsia-800 transition-all duration-500" />
          </div>
        </div>
      </UCard>
    </a>

    <p class="font-caviar flex flex-row items-center pb-5 text-center gap-2">
      <UIcon name="i-heroicons-sparkles" class="w-5 h-5" />
      Retrouvez-nous sur vos réseaux préférés
      <UIcon name="i-heroicons-sparkles" class="w-5 h-5" />
    </p>

    <a v-for="item in links" :key="item.text" :href="item.link" target="_blank">
      <UCard class="w-80 flex flex-col items-center">
        <div class="flex flex-row items-center space-x-2 font-caviar text-commuz-500 gap-2">
          <UIcon :name="item.icon" class="w-5 h-5" />
          {{ item.text }}
        </div>
      </UCard>
    </a>

    <p class="font-caviar flex flex-row items-center py-5 text-center gap-2">
      <UIcon name="i-heroicons-musical-note" class="w-5 h-5" />
      Écoutez nos albums sur la plateforme de streaming de votre choix
      <UIcon name="i-heroicons-musical-note" class="w-5 h-5" />
    </p>

    <a v-for="item in albums" :key="item.text" :href="item.link" target="_blank">
      <UCard class="w-80 flex flex-col items-center">
        <div class="flex flex-row items-center space-x-2 font-caviar text-commuz-500 gap-2">
          <UIcon :name="item.icon" class="w-5 h-5" />
          {{ item.text }}
        </div>
      </UCard>
    </a>
  </div>
</template>

<script setup lang="ts">

const castingOpen = useState('castingOpen');

let card: {
  href: string;
  title: string;
  desc: string;
} | null = null;

// If castings are open we show the casting card
if (castingOpen.value) {
  card = {
    href: "/castings",
    title: "CASTINGS",
    desc: "La Commuz' recrute, rejoignez l'aventure !",
  }
}
else {
  // We may show a custom card
  card = {
    href: "/spectacle/2025",
    title: "FACE AU MUR",
    desc: "La Commuz' présente son spectacle 2025 !",
  };
}


const links = [
  {
    icon: 'i-heroicons-computer-desktop',
    text: 'Site web',
    link: 'https://commuz.fr',
  },
  {
    icon: 'i-ph-instagram-logo',
    text: 'Instagram',
    link: 'https://www.instagram.com/commuzlyon/',
  },
  {
    icon: 'i-ph-facebook-logo',
    text: 'Facebook',
    link: 'https://www.facebook.com/commuzlyon',
  },
  {
    icon: 'i-ph-youtube-logo',
    text: 'YouTube',
    link: 'https://www.youtube.com/channel/UCDZ2LRLcQB0MZ6hkB_RNDuQ',
  },
  {
    icon: 'i-ph-linkedin-logo',
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/company/commuz',
  },
];

const albums = [
  {
    icon: 'i-ph-spotify-logo',
    text: 'Spotify',
    link: 'https://open.spotify.com/intl-fr/artist/21oCxFRMiWeCx7X0yXiMdS',
  },
  {
    icon: 'i-simple-icons-deezer',
    text: 'Deezer',
    link: 'https://www.deezer.com/en/artist/69115622',
  },
  {
    icon: 'i-cib-apple-music',
    text: 'Apple Music',
    link: 'https://music.apple.com/fr/artist/commuz/1471619691',
  },
  {
    icon: 'i-material-symbols-youtube-music',
    text: 'YouTube Music',
    link: 'https://www.youtube.com/channel/UC727FuhuuLL3d83KaNZ4gOg',
  },
  {
    icon: 'i-simple-icons-amazonmusic',
    text: 'Amazon Music',
    link: 'https://music.amazon.fr/artists/B07V29V4P5/commuz',
  },
];
</script>