<template>
    <div class="h-44 mb-20 flex flex-col justify-center items-center">
        <span class="mb-10 text-3xl caviar">Révélation du spectacle {{ date.getFullYear() }}</span>
        <div class="flex items-start justify-center w-full gap-4 count-down-main ">
            <div class="timer w-16">
                <div class="">
                    <h3 class="countdown-element days font-manrope font-semibold text-2xl text-commuz-500 text-center">
                        {{ daysString }}
                    </h3>
                </div>
                <p class="text-sm font-normal text-neutral-900 mt-1 text-center w-full text-white">jours</p>
            </div>
            <h3 class="font-manrope font-semibold text-2xl text-neutral-900 text-white">:</h3>
            <div class="timer w-16">
                <div class="">
                    <h3 class="countdown-element hours font-manrope font-semibold text-2xl text-commuz-500 text-center">
                        {{ hoursString }}
                    </h3>
                </div>
                <p class="text-sm font-normal text-neutral-900 mt-1 text-center w-full text-white">heures</p>
            </div>
            <h3 class="font-manrope font-semibold text-2xl text-neutral-900 text-white">:</h3>
            <div class="timer w-16">
                <div class="">
                    <h3 class="countdown-element minutes font-manrope font-semibold text-2xl text-commuz-500
                        text-center">
                        {{ minutesString }}
                    </h3>
                </div>
                <p class="text-sm font-normal text-neutral-900 mt-1 text-center w-full text-white">minutes</p>
            </div>
            <h3 class="font-manrope font-semibold text-2xl text-neutral-900 text-white">:</h3>
            <div class="timer w-16">
                <div class="">
                    <h3 class="countdown-element seconds font-manrope font-semibold text-2xl text-commuz-500
                        text-center">
                        {{ secondsString }}
                    </h3>
                </div>
                <p class="text-sm font-normal text-neutral-900 mt-1 text-center w-full text-white">secondes</p>
            </div>
        </div>

    </div>
</template>


<script setup lang="ts">

const props = defineProps<{
    date: Date;
}>()

const daysString = ref("");
const hoursString = ref("");
const minutesString = ref("");
const secondsString = ref("");

onMounted(() => {
    console.log("mounted");
    // count-down timer
    const dest = props.date.getTime();
    const x = setInterval(function () {

        const now = new Date().getTime();

        const diff = dest - now;

        // Check if the countdown has reached zero or negative
        if (diff <= 0) {
            clearInterval(x); // Stop the countdown
            return; // Exit the function
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysString.value = days.toString();
        hoursString.value = hours.toString();
        minutesString.value = minutes.toString();
        secondsString.value = seconds.toString();

        if (days < 10) {
            daysString.value = `0${days}`;
        }
        if (hours < 10) {
            hoursString.value = `0${hours}`;
        }
        if (minutes < 10) {
            minutesString.value = `0${minutes}`;
        }
        if (seconds < 10) {
            secondsString.value = `0${seconds}`;
        }
    }, 1000);

});
</script>
