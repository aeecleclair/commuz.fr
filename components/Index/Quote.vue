<template>
    <div class="quote">
        <p>
            <slot />
        </p>
        <img src="/icons/quote_open.svg">
        <div class="quote__author">
            <UAvatar :src="imgSrc" alt="Photo de {{name}}" size="lg" class="mr-4" />

            <span>{{ name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    name: string
    imgSrc: string
}>()
</script>

<style lang="scss" scoped>
.quote {
    max-width: 70ch;
    position: relative;
    margin-bottom: 1rem;
    margin-top: 1rem;

    &>img {
        position: absolute;
        top: -15px;
        left: -20px;
    }

    p {
        position: relative;
        z-index: 1;
        font-size: 1.2em;

        @media only screen and (min-width: 576px) {
            font-size: 1.3em;
        }

        margin-bottom: 1em;
    }

    .quote__author {
        display: flex;
        align-items: center;
        color: rgb(228, 228, 228);

        &>img {
            height: 40px;
            width: 40px;
            border-radius: 100%;
            margin-right: 1rem;
        }
    }
}
</style>