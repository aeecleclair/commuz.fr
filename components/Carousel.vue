<template>
  <UCarousel v-slot="{ item }" :items="images" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>
    <NuxtImg class="w-full" draggable="false" :src="item"/>

    <!-- We add these two icons, to force import them and allow UCarousel to show them -->
    <UIcon name="i-heroicons-chevron-left-20-solid" class="hidden" />
    <UIcon name="i-heroicons-chevron-right-20-solid" class="hidden" />
  </UCarousel>
</template>

<script setup lang="ts">
defineProps<{
  images: Array<string>;
}>();
</script>
