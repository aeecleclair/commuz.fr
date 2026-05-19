<template>
    <div class="min-h-screen">


        <Spectacle2026Curtains />

        <div class="pt-18 pb-5 px-10 md:px-40 flex flex-col gap-10 md:gap-40">

            <!-- Synopsis of the spectacle, and trailer -->
            <div class="flex flex-col gap-10 md:gap-20 items-center">
                <div class="text-5xl font-bold text-center">La Commuz' 2026 présente</div>
                <div class="flex flex-col gap-10 md:gap-0 md:flex-row justify-around items-center">
                    <NuxtImg src="images/spectacle/2026/derniereclat3.png" alt="Dernier Éclat" class="h-64" />
                    <div class="md:w-1/2" style="text-align: justify;">
                        <span class="text-[var(--redLight2025)]">Paris, 1923</span>. À l'Indigo, cabaret parisien où les
                        plumes et les projecteurs font oublier
                        le reste du monde, une étoile est en train de naître. Iris Lenoir enchaîne les triomphes sous
                        l'œil attentif de son agent, Maurice. Mais
                        alors que la capitale s'emballe pour sa nouvelle idole, le nouveau projet inattendu d'Odette,
                        directrice de l'Indigo, vient diviser le cabaret.
                    </div>
                </div>
                <div class="flex flex-col gap-10 md:gap-20 md:flex-row justify-around items-center">
                    <div class="md:w-2/3" style="text-align: justify;">
                        La scène devient alors le théâtre d'un choix impossible : Faut-il plaire à tout prix ou oser
                        déranger ? Entre cancan endiablé, soif de
                        succès et poids du passé, Dernier Éclat vous entraîne derrière les rideaux d'un monde où monter
                        sur scène peut tout changer.
                    </div>
                    <YouTubeVideo video-id="a-hcCB_eRNo" class="md:w-1/3" />
                </div>

                <!-- Buy a ticket -->
                <div class="flex justify-center">
                    <div class="relative w-2/3">
                        <NuxtImg src="images/spectacle/2026/billet.png" class="w-full block" />
                        <div class="absolute w-[20%] h-[43%] justify-center hidden md:flex flex-col"
                            style="right: 8.41%; bottom: 10%">
                        </div>
                    </div>
                </div>

                <Ubutton @click="isBuyATicketOpen = true"
                    class="justify-center bg-[var(--redLight2025)] py-6 px-8 rounded-lg text-white text-lg hover:bg-[var(--redUltraLight)] text-center">
                    Réservez votre billet !
                </Ubutton>

            </div>

            <!-- Practical informations -->
            <div class="flex flex-col gap-10 items-center">
                <Spectacle2026Infos />
                <div class="text-center mt-8">
                    N'attendez plus,
                    <button @click="isBuyATicketOpen = true"
                        class="inline-link justify-center text-[var(--redLight2025)] hover:text-[var(--redUltraLight)] text-center">
                        réservez votre billet
                    </button>
                    et venez découvrir la nouvelle création de la Commuz' !
                </div>
            </div>

            <UModal v-model:open="isBuyATicketOpen">
                <template #content>
                    <UCard
                        :ui="{ ring: '', divide: 'divide-y divide-neutral-100 dark:divide-neutral-800', background: 'bg-neutral-900 dark:bg-neutral-900' }">
                        <div class="flex flex-col">

                            <div class="flex flex-row items-center gap-2 pb-2 text-[var(--redLight2025)] text-3xl">
                                <UIcon name="i-heroicons-ticket" class="w-10 h-10" />
                                Dernier Éclat
                            </div>

                            <span class="mb-2">Choisissez une représentation :</span>

                            <NuxtLink v-for="date in dates" :key="date.text" :to="date.link" target="_blank"
                                class="flex flex-row items-center gap-1 pb-2 hover:text-[var(--redLight2025)]">
                                <UIcon name="i-heroicons-arrow-long-right-20-solid" class="w-5 h-5" />
                                {{ date.text }}
                            </NuxtLink>
                        </div>
                    </UCard>
                </template>
            </UModal>

        </div>

    </div>
</template>

<script setup lang="ts">
import 'add-to-calendar-button';

const isBuyATicketOpen = ref(false)

const dates = [
    {
        text: "Samedi 14 mars - 13h",
        link: "https://plusbilletterie.helloasso.com/evenements/69944cb080c787e3b4ef4db5"
    },
    {
        text: "Samedi 14 mars - 19h",
        link: "https://plusbilletterie.helloasso.com/evenements/69944cb861a41d7bfae95504"
    },
    {
        text: "Dimanche 15 mars - 17h",
        link: "https://plusbilletterie.helloasso.com/evenements/69944cc780c787e3b4ef5751"
    }
]
</script>

<style>
:root {
    --red2025: #660000;
    --redLight2025: #da183b;
    --redUltraLight: #ec3154;
    --blue2025: #003b94;
    --blueLight2025: #51e0ff;
}
</style>