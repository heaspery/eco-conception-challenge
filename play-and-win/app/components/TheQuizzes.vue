<script setup>
import { ref, computed } from 'vue';
import TheQuizCard from './TheQuizCard.vue';

const allQuizzes = [
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

const visibleCount = ref(8);

const visibleQuizzes = computed(() => {
    return allQuizzes.slice(0, visibleCount.value);
});

const hasMore = computed(() => {
    return visibleCount.value < allQuizzes.length;
});

function loadMore() {
    visibleCount.value = Math.min(visibleCount.value + 4, allQuizzes.length);
}
</script>

<template>
    <section class="mx-auto w-full max-w-6xl px-4 py-8 flex flex-col items-center">
        <div class="mb-6 flex flex-col items-center justify-between w-full">
            <h1 class="text-3xl font-bold text-blue-950">Quiz sur le sport</h1>
        </div>
        <div class="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <TheQuizCard v-for="quiz in visibleQuizzes" :src="`/assets/logo-sports/${quiz.sportLogo}`" :key="quiz.sportLogo" :sport-name="quiz.sportName"
                :sport-logo="quiz.sportLogo" />
        </div>
        <button v-if="hasMore" class="cursor-pointer mt-8 mb-8 border border-blue-950 rounded-full px-6 py-2 text-blue-950 font-semibold hover:bg-blue-950 hover:text-white transition-colors"
            @click="loadMore">
            Voir plus de quiz
        </button>
    </section>
</template>

<style scoped></style>