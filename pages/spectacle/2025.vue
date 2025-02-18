<template>
    <div class="min-h-screen">
        <Spectacle2025OpenMur class="min-h-screen pb-10">
            <div class="py-5 px-10 md:px-40 flex flex-col gap-10 md:gap-40">

                <!-- Synopsis of the spectacle, and trailer -->
                <div class="flex flex-col gap-10 md:gap-20 items-center">
                    <div class="text-5xl font-bold text-center">La Commuz' 2025 présente</div>
                    <div class="flex flex-col gap-10 md:gap-0 md:flex-row justify-around items-center">
                        <NuxtImg src="images/spectacle/2025/FaceAuMur.png" alt="Face au Mur" class="h-64" />
                        <div class="md:w-1/2">
                            <span class="text-[var(--redLight2025)]">Berlin, 1989</span>. Trois jours après la chute du
                            Mur, tandis que la Stasi s’empresse
                            d’effacer
                            les traces de ses crimes, un père retrouve enfin sa famille à l’Est après cinq ans
                            d’absence. Mais ces retrouvailles sont vite troublées par de lourds secrets.
                        </div>
                    </div>
                    <div class="flex flex-col gap-10 md:gap-0 md:flex-row justify-around items-center">
                        <div class="md:w-1/2">
                            À l’image de la société allemande, la famille Neumann est tiraillée entre l’espoir d’un
                            futur meilleur et des fractures qui semblent irréparables. Entre trahisons familiales et
                            secrets d’État, comment se reconstruire quand le passé refuse de s’effacer ?
                        </div>
                        <YouTubeVideo video-id="u3cpudx94HI" class="md:w-1/3" />
                    </div>

                    <!-- Buy a ticket -->
                    <div class="relative">
                        <!-- We use absolute positioning to place the button at the right place on the ticket image -->
                        <NuxtImg src="images/spectacle/2025/billet.png" />
                        <div class="absolute w-[20%] h-[43%] flex flex-col justify-center"
                            style="right: 8.41%; bottom: 10%">
                            <button @click="isBuyATicketOpen = true"
                                class="justify-center bg-[var(--redLight2025)] p-2 rounded-lg text-white text-sm hover:bg-[var(--redUltraLight)] text-center">
                                Réservez
                                <br />
                                votre billet !
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Tombola -->
                <div>
                    <div class="text-3xl font-bold text-center mb-4">La Grande Tombola de la Commuz'</div>

                    <div class="flex flex-col-reverse md:flex-row justify-around items-center gap-8">
                        <span class="md:w-2/3 flex flex-col items-center gap-2">
                            <span>
                                Avec l'aide de ses partenaires, la Commuz' vous propose une tombola pour gagner de
                                nombreux
                                lots !

                                Vous pouvez tenter de gagner des places de cinémas, des sessions d'escalade,
                                goodies au thème de la Commuz', et bien d'autres encore...
                            </span>
                            <span>
                                Date du tirage : 19/03
                            </span>
                            <span>
                                Prix du ticket : 2€
                            </span>

                            <NuxtLink to="https://www.helloasso.com/associations/aeecl/evenements/commuz-2025-tombola"
                                class="inline-link">Achetez vos tickets !</NuxtLink>
                        </span>

                        <NuxtImg src="images/spectacle/2025/Tombola.png" alt="Tombola" class="md:w-1/3" />
                    </div>
                </div>

                <!-- Practical informations -->
                <div>
                    <div class="text-3xl font-bold text-center mb-5">Informations pratiques</div>

                    <div class="flex flex-col md:flex-row justify-around items-center gap-8">

                        <div class="flex flex-col items-center md:w-1/2">
                            <div class="w-48 h-48">
                                <LeafletMap :lat="45.759958" :lng="4.7711689" :zoom="15" />
                            </div>
                        </div>


                        <div class="flex flex-col items-center gap-1 md:w-1/2">
                            <div class="flex flex-row items-center gap-2 pb-2 text-[var(--redLight2025)]">
                                <UIcon name="i-heroicons-map-pin" class="w-5 h-5" />
                                Adresse
                            </div>
                            <CopyAddressToClipboard
                                content="Salle Marivaux - Espace culturel L'Atrium, 35 Av. du 8 Mai 1945, 69160 Tassin-la-Demi-Lune">
                                <div class="flex flex-col items-center">
                                    <span>Salle Marivaux - Espace culturel L'Atrium</span>
                                    <span>35 Av. du 8 Mai 1945</span>
                                    <span>69160 Tassin-la-Demi-Lune</span>
                                </div>
                            </CopyAddressToClipboard>

                            <span class="italic text-center">Des parkings public et privé seront mis à votre
                                disposition</span>

                            <span class="mt-2">Rejoignez-nous en transports en commun</span>
                            <BusList :buses="['5', '55', '72']" />
                            <BusList :buses="['C21', 'C22']" class="mt-1" />
                        </div>
                    </div>

                    <div class="flex flex-col-reverse md:flex-row justify-around items-center mt-5">
                        <div class="flex flex-col items-center md:w-1/2 mt-5 md:mt-0">
                            <div class="flex flex-row items-center gap-2 pb-2 text-[var(--redLight2025)]">
                                <UIcon name="i-heroicons-calendar-date-range" class="w-5 h-5" />Ajouter au
                                calendrier
                            </div>
                            <add-to-calendar-button v-for="calendrier in calendriers" :key="calendrier.label"
                                name="Commuz' 2025 - Face au Mur" description="" :startDate="calendrier.startDate"
                                :endDate="calendrier.endDate" :startTime="calendrier.startTime"
                                :endTime="calendrier.endTime" timeZone="Europe/Paris"
                                location="Salle Marivaux à L'Atrium, 35 Avenue du 8 Mai 1945, 69160 Tassin-la-Demi-Lune, France"
                                :iCalFileName="calendrier.iCalFileName"
                                options="'Apple','Google', 'iCal', 'Microsoft365'" :label="calendrier.label"
                                hideIconButton="true" size="2|2|2" lightMode="dark" language="fr" hideBranding="true" />
                        </div>

                        <div class="flex flex-col items-center md:w-1/2">
                            <div class="flex flex-row items-center gap-2 pb-2 text-[var(--redLight2025)]">
                                <UIcon name="i-heroicons-clock" class="w-5 h-5" />Début du spectacle
                            </div>
                            <span v-for="date in dates" :key="date.text">{{ date.text }}</span>

                            <span class="italic mt-4 text-center">Les portes et la buvette ouvrent 1 heure avant le
                                début de
                                spectacle</span>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        N'attendez plus,
                        <button @click="isBuyATicketOpen = true"
                            class="inline-link justify-center text-[var(--redLight2025)] hover:text-[var(--redUltraLight)] text-center ">
                            réservez votre billet
                        </button>
                        et venez découvrir la nouvelle création de la Commuz' !
                    </div>
                </div>

                <!-- Modal to buy a ticket -->
                <!-- As Leaflet use z-index as big as 900 (https://leafletjs.com/reference.html#map-pane)
                  we need to increase the z-index of the `UModal` (50 by default) to ensure it will be on top of the map 
                  We choosed `z-[1000]` -->
                <UModal v-model="isBuyATicketOpen" :ui="{ wrapper: 'z-[1000]' }">
                    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                        <div class="flex flex-col">

                            <div class="flex flex-row items-center gap-2 pb-2 text-[var(--redLight2025)] text-3xl">
                                <UIcon name="i-heroicons-ticket" class="w-10 h-10" />
                                Face au Mur
                            </div>

                            <span class="mb-2">Choisissez une représentation :</span>

                            <NuxtLink v-for="date in dates" :key="date.text" :to="date.link" target="_blank"
                                class="flex flex-row items-center gap-1 pb-2 hover:text-[var(--redLight2025)]">
                                <UIcon name="i-heroicons-arrow-long-right-20-solid" class="w-5 h-5" />
                                {{ date.text }}
                            </NuxtLink>
                        </div>
                    </UCard>
                </UModal>


            </div>



        </Spectacle2025OpenMur>
    </div>
</template>

<script setup lang="ts">
import 'add-to-calendar-button';

const isBuyATicketOpen = ref(false)

const dates = [
    {
        text: "Vendredi 14 mars - 19h",
        link: "https://www.helloasso.com/associations/aeecl/evenements/commuz-2025-vendredi"
    },
    {
        text: "Samedi 15 mars - 13h30",
        link: "https://www.helloasso.com/associations/aeecl/evenements/commuz-2025-samedi-apres-midi"
    },
    {
        text: "Samedi 15 mars - 19h",
        link: "https://www.helloasso.com/associations/aeecl/evenements/commuz-2025-samedi-soir"
    },
    {
        text: "Dimanche 16 mars - 17h",
        link: "https://www.helloasso.com/associations/aeecl/evenements/commuz-2025-dimanche"
    }
]

const calendriers = [{
    startDate: "2025-03-14", endDate: "2025-03-14",
    startTime: "19:00", endTime: "22:00", iCalFileName: "commuz-2025-face-au-mur-vendredi-14",
    label: "Vendredi 14 mars - 19h",
}, {
    startDate: "2025-03-15", endDate: "2025-03-15",
    startTime: "13:30", endTime: "16:30", iCalFileName: "commuz-2025-face-au-mur-samedi-15-13h30",
    label: "Samedi 15 mars - 13h30",
}, {
    startDate: "2025-03-15", endDate: "2025-03-15",
    startTime: "19:00", endTime: "22:00", iCalFileName: "commuz-2025-face-au-mur-samedi-15",
    label: "Samedi 15 mars - 19h",
}, {
    startDate: "2025-03-16", endDate: "2025-03-16",
    startTime: "17:00", endTime: "20:00", iCalFileName: "commuz-2025-face-au-mur-dimanche-16",
    label: "Dimanche 16 mars - 17h",
}]

</script>

<style>
:root {
    --red2025: #660000;
    --redLight2025: #da183b;
    /* redUltraLight us used as an accent color for hovered elements */
    --redUltraLight: #ec3154;

    --blue2025: #003b94;
    --blueLight2025: #51e0ff;
}
</style>