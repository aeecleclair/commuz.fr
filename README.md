# Site de la Commuz'

![](https://img.shields.io/github/last-commit/commuzlyon/site.svg)
![](https://img.shields.io/github/languages/code-size/commuzlyon/site.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/face0701-6909-4838-afdc-8181323725ca/deploy-status)](https://app.netlify.com/sites/commuz/deploys)

<div align="center">
  <img src="https://www.ec-lyon.fr/sites/default/files/styles/full/public/logo_commuz.png">
</div>

# Description

Site Internet de la Commuz' – Comédie musicale étudiante commune à l'École centrale de Lyon et à l'emlyon _business school_.

# Auteurs

Le site est une refonte menée par Étienne Sanguinetti, inspirée d'un premier jet de Gauthier Fanucci. Il a été remis à jours en 2022 par Benjamin Denise. Les auteurs sont depuis ce jour :

- Gauthier Fanucci : Webmestre du mandat 2016 - 2017 ;
- Étienne Sanguinetti : Webmestre du mandat 2017 - 2018 ;
- Raphaël Chalicarne : Webmestre du mandat 2018 - 2019 ;
- Bastien Laville : Webmestre du mandat 2019 - 2020 ;
- Alban Gosset: Webmestre du mandat 2020 - 2021 ;
- Benjamin Denise : Webmestre du mandat 2021 - 2022 ;
- Antoine Haynez : Webmestre du mandat 2022 - 2023 ;
- Frédéric Legrand : Webmestre du mandat 2023 - 2024 ;

# Dépendances

Ce projet a été développé sous Node.js@21.5.0 avec le framework _Nuxt_@3.9.0.

# Latest

- Migrate from Nuxt 2 to Nuxt 3
- Added support for Google Analytics

# Guides

## Add pictures of the spectacle

Each year, after the spectacle, you will need to add pictures made during the representations.

These high quality pictures can weight a lot. If we add 3/4 Go of pictures each year to this repository, it will become really hard to clone. Moreover these original pictures will never be used, as we use `NuxtImage` for optimization.

Use the script [image_manipulation.ts](./image_manipulation.ts) to export images. All information are included in the file.

## Change the homepage video

You should keep the same format for the video, which is light and made for the web. You can use the following command to convert a video to the right format :

```bash
ffmpeg -i input_file.mp4 -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis public/videos/video-intro.webm
```

Change the file `public/videos/video-intro.webm`

## Configure the website status

In [layouts/default.vue](./layouts/default.vue) you will be able to configure global variables.

- by settings `castingOpen` to true, the website will advertise its casting page. You should set this during the castings phases, but disable it the rest of the year, to prevent unnecessary informations. The majority of /castings pages should not be really relevant for people outside our schools

## Integrate a YouTube video

You will need to integrate YouTube videos for the trailer. We use for this the incredible [NuxtScripts](https://scripts.nuxt.com/) tool.

See [YouTube Player](https://scripts.nuxt.com/scripts/content/youtube-player) guide for more informations

## Fonts

If you need to import fonts, I suggest to use fonts.bunny.net which is more privacy friendly than Google Font

# TODO :

- Rajouter une banière pour pouvoir opt-out du tracking Google Analytics
