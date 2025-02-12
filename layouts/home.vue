<template>
  <div>
    <Navbar class="abs" />
    <slot />
    <Foot />
  </div>
</template>

<script setup lang="ts">
useEclairPlausible()
</script>