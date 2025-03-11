<template lang="html">
  <div>
    <div class="galerie_grid">
      <div v-for="(src, i) in galerie.images_src" :key="i" class="galerie_grid__entry"
        :class="galerie.emphase.indexOf(i) >= 0 ? 'big-image' : 'small-image'">
        <NuxtImg :src="src" loading="lazy" @click="() => showImg(i)" />
      </div>
    </div>
    <client-only>
      <vue-easy-lightbox :visible="visible" :imgs="galerie.images_src" :index="index" @hide="handleHide" />
    </client-only>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

const imagesFiles = import.meta.glob('public/images/galeries/2023/*')

const imagesPaths = [];

for (const filepath in imagesFiles) {
  // We remove /public from the url, as NuxtImage will search for the image in the public directory
  imagesPaths.push(filepath.replace("/public", ""))
}

// We need to sort using numerical name, to prevent the following order: 1, 10, 100, 101 ... 11 ... 2, 20, 200 ...
imagesPaths.sort((p1, p2) => Number(p1.split('/').pop().split(".")[0]) - Number(p2.split('/').pop().split(".")[0]));

const galerie = {
  images_src: imagesPaths,
  emphase: [1, 16, 31, 46, 61, 76, 91, 106, 121]
}

export default {
  components: {
    VueEasyLightbox
  },
  data: function () {
    return {
      galerie,
      visible: false,
      index: 0
    }
  },
  mounted: function () {
    // Get all of the images that are marked up to lazy load
    const images = document.querySelectorAll('.lazy-image')
    const config = {
      rootMargin: '50px 0px',
      threshold: 0.01
    }

    let imageCount = images.length
    let observer

    // If we don't have support for intersection observer, loads the images immediately
    if (!('IntersectionObserver' in window)) {
      Array.from(images).forEach(image => preloadImage(image))
    } else {
      observer = new IntersectionObserver(onIntersection, config)
      images.forEach(image => {
        observer.observe(image)
      })
    }

    function fetchImage(url) {
      return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url
        image.onload = resolve
        image.onerror = reject
      })
    }

    function preloadImage(image) {
      const src = image.dataset.src
      if (!src) {
        return
      }
      return fetchImage(src).then(() => { applyImage(image, src) })
    }

    function applyImage(img, src) {
      img.src = src
      img.classList.add('fade-in')
    }

    function onIntersection(entries) {
      // Loop through the entries
      entries.forEach(entry => {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
          imageCount--

          // Stop watching and load the image
          observer.unobserve(entry.target)
          preloadImage(entry.target)
        }
      })

      // Disconnect if we've already loaded all of the images
      if (imageCount === 0) {
        observer.disconnect()
      }
    }
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>
