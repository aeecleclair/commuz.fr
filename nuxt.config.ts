export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ["nuxt-gtag", "vue3-carousel-nuxt", "@nuxt/image", "@nuxt/eslint", "@nuxt/ui", "@nuxt/scripts"],

  image: {
    format: ["webp"],
  },

  gtag: {
    id: "G-CC0ZQE9TB5",
  },

  css: ["~/assets/css/global.scss"],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["Nuxt"].includes(tag),
    },
  },

  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "language", content: "French" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keyword",
          content: [
            "Comédie musicale",
            "Lyon",
            "Centrale",
            "EM Lyon",
            "Etudiants",
            "Danse",
            "Chant",
            "Théâtre",
            "Musique",
            "Spectacle",
          ],
        },
        {
          hid: "description",
          name: "description",
          content:
            "Comédie musicale étudiante commune à l'École Centrale de Lyon et à emlyon business school",
        },
        { name: "author", content: "Benjamin Denise" },
        { name: "theme-color", content: "#fe7a90" },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "commuz" },
        { property: "og:title", content: "La Commuz'" },
        { property: "og:locale", content: "fr_FR" },
        {
          property: "og:description",
          content:
            "Comédie musicale étudiante commune à l'École Centrale de Lyon et à emlyon business school",
        },
        // Carte Twitter
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@commuzlyon" },
        { name: "twitter:title", content: "La Commuz'" },
        {
          name: "twitter:description",
          content:
            "Comédie musicale étudiante commune à l'École Centrale de Lyon et à emlyon business school",
        },
        {
          name: "twitter:image",
          content: "https://commuz.fr/logos/commuz-masque-logo.png",
        },
        { name: "twitter:image:alt", content: "Logo de la Commuz'" },
      ],
    },
  },

  // TODO remove with vue3-carousel
  // See https://github.com/ismail9k/vue3-carousel/issues/377
  alias: {
    "vue3-carousel/dist/carousel": "vue3-carousel/dist/carousel.es.js",
  },

  compatibilityDate: "2024-09-15",
});