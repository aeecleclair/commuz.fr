<!-- Don't forget to fix the height and width of this component for the map to be visible -->

<template>
    <LMap style="border-radius: 10px;" :zoom="zoom" :center="[lat, lng]" :use-global-leaflet="false">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base" name="OpenStreetMap" />
        <LMarker :lat-lng="[lat, lng]" />
    </LMap>
</template>

<script setup lang="ts">
defineProps<{
    lat: number;
    lng: number;
    zoom: number;
}>()
</script>