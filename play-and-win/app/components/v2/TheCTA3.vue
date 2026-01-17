<script setup>
import { MoveRight } from 'lucide-vue-next';
</script>

<template>
    <section class="mt-18 max-w-4xl mx-auto text-blue-950 flex flex-col items-center my-8 px-4 rounded-2xl ">
        <div class="flex flex-row bg-linear-to-t from-green-500 to-sky-400 rounded-2xl shadow-2xl">
            <div class=" rounded-2xl flex flex-col p-3 gap-8">
                <div class="text-white p-2">
                    <h1 class="font-bold text-xl">Devinez le sport pour tenter de gagner un voyage à Milano Cortina 2026</h1>
                    <p class="text-base mt-2">Réussirez-vous à trouver le sport correspondant à la terminologie ?</p>
                </div>
                <div class="flex flex-col items-end">
                    <button
                        class="bg-white cursor-pointer mt-4 rounded-full px-6 py-2 text-blue-950 font-semibold hover:bg-blue-950 hover:text-white transition-colors">
                        Je participe <MoveRight class="inline-block ml-2 h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped></style>