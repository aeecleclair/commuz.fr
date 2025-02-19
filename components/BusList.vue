<template>
    <div class="flex flex-row gap-2">
        <NuxtLink v-for="bus in buses" :key="bus" :to="getUrl(bus)" target="_blank">
            <NuxtImg :src="`/bus/${bus}.svg`" :alt="`Bus ${bus}`" class="w-16" />
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    buses: string[];
}>()

function getUrl(bus: string) {
    if (bus[0] == 'C') {
        return `https://www.tcl.fr/lignes/ligne-majeure-${bus}`;
    }
    return `https://www.tcl.fr/lignes/bus-${bus}`;
}
</script>