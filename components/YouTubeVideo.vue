<template>
    <ScriptYouTubePlayer class="relative" :video-id="videoId" above-the-fold>
        <template #awaitingLoad>
            <div class="text-white p-5 absolute w-full h-full flex items-center justify-center top-0 left-0">
                <UIcon name="i-logos-youtube-icon" class="w-16 h-16" />
            </div>
        </template>
    </ScriptYouTubePlayer>
</template>

<script setup lang="ts">
defineProps<{
    videoId: string;
}>()
</script>