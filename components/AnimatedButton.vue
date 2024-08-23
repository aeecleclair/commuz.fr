<template>
  <div class="new-button-link text-base">
    <NuxtLink :to="to" class="flex flex-row">
      <UIcon v-if="icon" :name="icon" class="w-5 h-5 mr-2" />
      {{ text }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  to: string;
  icon?: string;
}>();
</script>

<style lang="scss" scoped>
.new-button-link {
  z-index: 10;
  overflow: hidden;
  position: relative;
  padding: 0.4em 0.8em;

  a:after {
    content: " ";
    height: 120%;
    width: 150%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-image: linear-gradient(70deg, #90404d, #bb5968);
    transform: skewX(30deg) scale3d(0, 1, 1);
    transform-origin: -10% 0%;
    transition: transform 0.5s cubic-bezier(.25, .46, .06, .86);

  }

  a:hover:after {
    transform: skewX(0deg) scale3d(1, 1, 1);
  }
}
</style>