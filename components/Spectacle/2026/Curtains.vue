<template>
  <Transition name="fade">
    <div v-if="!scrolled" class="rn-outer fixed inset-0 z-50 pointer-events-none">
      <div class="rn-inner">
        <div v-for="n in 10" :key="n" class="rn-unit" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const handleScroll = () => {
  if (window.scrollY > 0) scrolled.value = true
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  timer = setTimeout(() => {
    scrolled.value = true
  }, 2000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
.rn-outer {
  --accent: hsl(360, 80%, 50%);
  --accent-dark: hsl(360, 80%, 38%);
  --accent-darker: hsl(360, 80%, 30%);
  --accent-light: hsl(360, 80%, 70%);

  background: var(--accent-dark);
  overflow: hidden;
}

.rn-inner {
  width: 100%;
  position: absolute;
  top: -10%;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.rn-unit {
  width: 10vw;
  height: 120vh;
  background: repeating-linear-gradient(
    to left,
    var(--accent) 4vw,
    var(--accent-darker) 8vw,
    var(--accent-light) 10vw
  );
  display: inline-block;
  transform-origin: 0 0;
  transform: rotate(3deg);
  animation: rnUnit 2s ease infinite;
}

@keyframes rnUnit {
  50% { transform: rotate(-3deg); }
}

.rn-unit:nth-child(1)  { animation-delay: -0.1s; }
.rn-unit:nth-child(2)  { animation-delay: -0.2s; }
.rn-unit:nth-child(3)  { animation-delay: -0.3s; }
.rn-unit:nth-child(4)  { animation-delay: -0.4s; }
.rn-unit:nth-child(5)  { animation-delay: -0.5s; }
.rn-unit:nth-child(6)  { animation-delay: -0.6s; }
.rn-unit:nth-child(7)  { animation-delay: -0.7s; }
.rn-unit:nth-child(8)  { animation-delay: -0.8s; }
.rn-unit:nth-child(9)  { animation-delay: -0.9s; }
.rn-unit:nth-child(10) { animation-delay: -1.0s; }

/* Fade out transition when scrolled */
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>