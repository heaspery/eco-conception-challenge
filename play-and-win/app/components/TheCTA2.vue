<script setup>
import { MoveRight } from 'lucide-vue-next';
</script>

<template>
    <section class="mt-18 max-w-4xl mx-auto text-blue-950 flex flex-col items-center my-8 px-4 rounded-2xl ">
        <div class="flex flex-row bg-linear-to-t from-green-500 to-sky-400 rounded-2xl shadow-2xl">
           
            <div class=" rounded-2xl flex flex-col p-3 gap-12">
                <div class="text-white p-2">
                    <h1 class="font-bold text-xl">Fan26, la communauté numérique de Milano Cortina 2026</h1>
                    <p class="text-base mt-2">Actualités sur la mise en vente de nouveaux billets, informations exclusives sur les Jeux et opportunités uniques.</p>
                </div>
                <div class="flex flex-col items-end">
                    <button
                        class="items-start bg-white cursor-pointer mt-4 rounded-full px-6 py-2 text-blue-950 font-semibold hover:bg-blue-950 hover:text-white transition-colors">
                        Rejoignez Fan26<MoveRight class="inline-block ml-2 h-4 w-4" />
                    </button>
                </div>
            </div>
             <div>
                     <NuxtImg class="rounded-2xl h-60 w-full object-cover mask-l-from-50% mask-l-to-90%" src="/assets/cta3.jpg" alt="Stade de hockey" />
            </div>
        </div>

    </section>
</template>

<style scoped></style>