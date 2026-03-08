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
          content="Théâtre Astrée, 6 Av. Gaston Berger, 69100 Villeurbanne">
          <div class="flex flex-col items-center">
            <span>Théâtre Astrée</span>
            <span>6 Av. Gaston Berger</span>
            <span>69100 Villeurbanne</span>
          </div>
        </CopyAddressToClipboard>

        <span class="italic text-center">Des parkings public et privé seront mis à votre
          disposition.</span>
      </div>


      <div class="flex flex-col items-center gap-1 md:w-1/2">
        <div class="flex flex-row items-center gap-2 pb-2 text-[var(--redLight2025)]">
          <UIcon name="i-heroicons-map-pin" class="w-5 h-5" />
          Transports en commun
        </div>
        <BusList :buses="['70','T1']" />
        <BusList :buses="['C17', 'C2']" class="mt-1" />

        <span class="my-2 italic w-2/3 text-center">La salle est desservie
        par de nombreux transports en commun.</span>
      </div>
    </div>

    <div class="flex flex-col-reverse md:flex-row justify-around items-center mt-5">
      <div class="flex flex-col items-center md:w-1/2 mt-5 md:mt-0">
        <div class="flex flex-row items-center gap-2 pb-2 text-[var(--redLight2025)]">
          <UIcon name="i-heroicons-calendar-date-range" class="w-5 h-5" />Ajouter au
          calendrier
        </div>
        <add-to-calendar-button v-for="calendrier in calendriers" :key="calendrier.label"
          name="Commuz' 2026 - Dernier Éclat" description="" :startDate="calendrier.startDate"
          :endDate="calendrier.endDate" :startTime="calendrier.startTime" :endTime="calendrier.endTime"
          timeZone="Europe/Paris"
          location="Théâtre Astrée, 6 Av. Gaston Berger, 69100 Villeurbanne, France"
          :iCalFileName="calendrier.iCalFileName" options="'Apple','Google', 'iCal', 'Microsoft365'"
          :label="calendrier.label" hideIconButton="true" size="2|2|2" lightMode="dark" language="fr"
          hideBranding="true" />
      </div>

      <div class="flex flex-col items-center md:w-1/2">
        <div class="flex flex-row items-center gap-2 pb-2 text-[var(--redLight2025)]">
          <UIcon name="i-heroicons-clock" class="w-5 h-5" />Début du spectacle
        </div>
        <span v-for="date in dates" :key="date.text">{{ date.text }}</span>

        <span class="italic mt-4 text-center">Les portes et la buvette ouvrent une demi-heure avant le
          début du spectacle.</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const dates = [
  {
    text: "Samedi 15 mars - 13h",
    link: ""
  },
  {
    text: "Samedi 15 mars - 19h",
    link: ""
  },
  {
    text: "Dimanche 15 mars - 17h",
    link: ""
  }
]

const calendriers = [ {
  startDate: "2026-03-14", endDate: "2026-03-14",
  startTime: "13:00", endTime: "16:00", iCalFileName: "commuz-2026-face-au-mur-samedi-14-13h00",
  label: "Samedi 14 mars - 13h00",
}, {
  startDate: "2026-03-14", endDate: "2026-03-14",
  startTime: "19:00", endTime: "22:00", iCalFileName: "commuz-2026-face-au-mur-samedi-14-19h00",
  label: "Samedi 14 mars - 19h",
}, {
  startDate: "2026-03-15", endDate: "2026-03-15",
  startTime: "17:00", endTime: "20:00", iCalFileName: "commuz-2026-face-au-mur-dimanche-15-17h00",
  label: "Dimanche 15 mars - 17h",
}]
</script>
