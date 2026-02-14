import { readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

export default defineNuxtConfig({
  devtools: { enabled: false },

  // Enable behavior similar to Nuxt 3, all folders are not in app but in the root
  srcDir: ".",

  modules: [
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxt/fonts",
  ],

  image: {
    format: ["webp"],
    provider: "static",
  },

  css: ["~/assets/css/main.css", "~/assets/css/global.scss"],

  colorMode: {
    preference: "dark",
  },

  fonts: {
    priority: ["bunny", "locale"],
  },

  vue: {
    compilerOptions: {
      // tag.startsWith('add-') is used for https://add-to-calendar-button.com/
      isCustomElement: (tag) =>
        ["Nuxt"].includes(tag) || tag.startsWith("add-"),
    },
  },

  hooks: {
    "build:before"() {
      const sourceDir = resolve("public/images/galeries/2024");
      const outDir = resolve("assets/generated");

      // ✅ Ensure output directory exists
      if (!existsSync(outDir)) {
        mkdirSync(outDir, { recursive: true });
      }

      const images = readdirSync(sourceDir)
        .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
        .map((f) => `public/images/galeries/2024/${f}`);

      writeFileSync(
        resolve(outDir, "galerie-2024.json"),
        JSON.stringify(images, null, 2)
      );
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
          content: "https://commuz.fr/logos/Commuz__blanc.svg",
        },
        { name: "twitter:image:alt", content: "Logo de la Commuz'" },
      ],
    },
  },

  compatibilityDate: "2024-09-15",
});
