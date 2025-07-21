<template>
  <UCarousel v-slot="{ item }" arrows :items="images" loop class="w-full  mx-auto" :autoplay="{ delay: 3000 }">
    <NuxtImg class="w-full rounded-lg" draggable="false" :src="item" loading="lazy" />
  </UCarousel>
</template>

<script setup lang="ts">
defineProps<{
  images: Array<string>;
}>();
</script>
