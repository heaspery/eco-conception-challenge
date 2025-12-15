<script setup>
import { ref } from 'vue';
import TheQuizCard from './TheQuizCard.vue';

const quizzes1 = [
    { sportName: 'Ski alpin', sportLogo: 'ALP.svg' },
    { sportName: 'Bobsleigh', sportLogo: 'BOB.svg' },
    { sportName: 'Biathlon', sportLogo: 'BTH.svg' },
    { sportName: 'Ski de fond', sportLogo: 'CCS.svg' },
    { sportName: 'Curling', sportLogo: 'CUR.svg' },
    { sportName: 'Freestyle', sportLogo: 'FRS.svg' },
    { sportName: 'Patinage artistique', sportLogo: 'FSK.svg' },
    { sportName: 'Hockey sur glace', sportLogo: 'IHO.svg' },
];

const quizzes2 = [
    { sportName: 'Luge', sportLogo: 'LUG.svg' },
    { sportName: 'Combiné nordique', sportLogo: 'NCB.svg' },
    { sportName: 'Snowboard', sportLogo: 'SBD.svg' },
    { sportName: 'Saut à ski', sportLogo: 'SJP.svg' },
    { sportName: 'Skeleton', sportLogo: 'SKN.svg' },
    { sportName: 'Short track', sportLogo: 'STK.svg' },
    { sportName: 'Patinage de vitesse', sportLogo: 'SSK.svg' },
    { sportName: 'Ski de montagne', sportLogo: 'SMT.svg' }
];

const showMore = ref(false);

function toggleLoadMore() {
    showMore.value = !showMore.value;
}
</script>

<template>
    <section class="mx-auto w-full max-w-6xl px-4 py-8 flex flex-col items-center">
        <div class="mb-6 flex flex-col items-center justify-between w-full">
            <h1 class="text-3xl font-bold text-blue-950">Quiz sur le sport</h1>
        </div>
        <div class="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <TheQuizCard v-for="quiz in quizzes1" :key="quiz.sportLogo" :sport-name="quiz.sportName"
                :sport-logo="quiz.sportLogo" />

            <TheQuizCard v-if="showMore" v-for="quiz in quizzes2" :key="quiz.sportLogo" :sport-name="quiz.sportName"
                :sport-logo="quiz.sportLogo" />
        </div>
        <button class="cursor-pointer mt-6 border border-blue-950 rounded-full px-6 py-2 text-blue-950 font-semibold hover:bg-blue-950 hover:text-white transition-colors"
            @click="toggleLoadMore">
            {{ showMore ? 'Voir moins de quiz' : 'Voir plus de quiz' }}
        </button>
    </section>
</template>

<style scoped></style>