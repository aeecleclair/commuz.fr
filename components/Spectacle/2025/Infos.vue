<template>
  <div>
    <div class="text-3xl font-bold text-center mb-5">Informations pratiques</div>

    <div class="flex flex-col md:flex-row justify-around items-center gap-8">

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
      </div>


      <div class="flex flex-col items-center gap-1 md:w-1/2">
        <div class="flex flex-row items-center gap-2 pb-2 text-[var(--redLight2025)]">
          <UIcon name="i-heroicons-map-pin" class="w-5 h-5" />
          Transports en commun
        </div>

        <span class="my-2 italic w-1/2 text-center">La salle a la chance d'être desservie
          par de nombreux transports en commun</span>
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
          :endDate="calendrier.endDate" :startTime="calendrier.startTime" :endTime="calendrier.endTime"
          timeZone="Europe/Paris"
          location="Salle Marivaux à L'Atrium, 35 Avenue du 8 Mai 1945, 69160 Tassin-la-Demi-Lune, France"
          :iCalFileName="calendrier.iCalFileName" options="'Apple','Google', 'iCal', 'Microsoft365'"
          :label="calendrier.label" hideIconButton="true" size="2|2|2" lightMode="dark" language="fr"
          hideBranding="true" />
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
  </div>
</template>

<script lang="ts" setup>

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
