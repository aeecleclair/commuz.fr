<template>
    <div class="h-max ">
        <div class="relative h-full overflow-hidden flex flex-col justify-center items-center">

            <div class="content w-full h-full min-h-screen p-10 opacity-0 transition-opacity duration-1000"
                :class="{ 'opacity-100': scrollPos > 0 }">

                <div class="pt-10 h-max">
                    <slot />
                </div>
            </div>


            <!-- 100vh-48px correspond to the height of the user screen minus the navbar which height is 48px -->
            <div class="wall right-wall absolute top-0 h-[calc(100vh-48px)] transition-all duration-1000"
                :class="{ 'opacity-0 duration-1000': scrollPos > 0 }">
                <NuxtImg src="images/spectacle/2025/Back_light.png" class="h-full" />
            </div>

            <div class="wall left-wall absolute top-0 h-[calc(100vh-48px)] transition-all duration-1000"
                :class="{ '-translate-x-full': scrollPos > 0 }">
                <NuxtImg src="images/spectacle/2025/Left.png" class="h-full" />
            </div>
            <div class="wall right-wall absolute top-0 h-[calc(100vh-48px)] transition-all duration-1000"
                :class="{ 'translate-x-full': scrollPos > 0 }">
                <NuxtImg src="images/spectacle/2025/Right.png" class="h-full" />
            </div>

            <div class="wall right-wall absolute top-0 h-[calc(100vh-48px)] transition-all duration-1000"
                :class="{ 'opacity-0 duration-1000': scrollPos > 0 }">
                <NuxtImg src="images/spectacle/2025/Front_light.png" class="h-full" />
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrollPos = ref(0);

const handleScroll = () => {
    scrollPos.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>