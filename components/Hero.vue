<template>
  <div :class="'flex gap-4 items-center justify-center ' +
    (reversed ? ' md:flex-row-reverse' : 'md:flex-row') +
    ' flex-col'
    ">
    <slot />

    <span class="w-4/6 md:w-1/2 font-caviar text-center p-4">
      <span class="flex flex-col">
        <slot name="title" />
        <slot name="content" />
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  reversed?: boolean;
}>();
</script>
