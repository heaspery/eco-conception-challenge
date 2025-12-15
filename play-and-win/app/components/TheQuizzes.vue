<script setup>
import TheQuizCard from './TheQuizCard.vue';

const quizzes = [
    { sportName: 'Ski alpin', sportLogo: 'ALP.svg' },
    { sportName: 'Bobsleigh', sportLogo: 'BOB.svg' },
    { sportName: 'Biathlon', sportLogo: 'BTH.svg' },
    { sportName: 'Ski de fond', sportLogo: 'CCS.svg' },
    { sportName: 'Curling', sportLogo: 'CUR.svg' },
    { sportName: 'Freestyle', sportLogo: 'FRS.svg' },
    { sportName: 'Patinage artistique', sportLogo: 'FSK.svg' },
    { sportName: 'Hockey sur glace', sportLogo: 'IHO.svg' },
    { sportName: 'Luge', sportLogo: 'LUG.svg' },
    { sportName: 'Combiné nordique', sportLogo: 'NCB.svg' },
    { sportName: 'Snowboard', sportLogo: 'SBD.svg' },
    { sportName: 'Saut à ski', sportLogo: 'SJP.svg' },
    { sportName: 'Skeleton', sportLogo: 'SKN.svg' },
    { sportName: 'Short track', sportLogo: 'STK.svg' },
    { sportName: 'Patinage de vitesse', sportLogo: 'SSK.svg' },
    { sportName: 'Ski de montagne', sportLogo: 'SMT.svg' }
];
</script>

<template>
    <section class="mx-auto w-full max-w-6xl px-4 py-8 flex flex-col items-center">
        <div class="mb-6 flex items-center justify-between">
            <h1 class="text-3xl font-bold text-blue-950 m-4">Quiz sur le sport</h1>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <TheQuizCard
                v-for="quiz in quizzes"
                :key="quiz.sportLogo"
                :sport-name="quiz.sportName"
                :sport-logo="quiz.sportLogo"
            />
        </div>

    </section>
</template>

<style scoped></style>