<template>

  <Hero :reversed="reversed">
    <Carousel :images="images" class="w-3/6" />
    <template #title>
      <span class="font-extrabold text-commuz-500 text-xl">{{ title }}</span>
    </template>
    <template #content>

      <span>
        <slot />
      </span>
    </template>
  </Hero>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  images: Array<string>;
  reversed?: boolean;
}>();
</script>
