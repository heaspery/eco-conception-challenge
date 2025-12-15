<script setup>

</script>

<template>
    <section class="w-full bg-linear-to-t from-green-500 to-sky-400 py-8">
        <div class="mx-auto w-full max-w-6xl px-4">
            <div class="relative overflow-hidden rounded-2xl shadow-lg text-white">
                <img src="~/assets/hero.jpg" alt="hero" class="h-80 w-full object-cover md:h-[480px]">
                <div aria-hidden="true" class="absolute inset-0 z-0 bg-black/50 pointer-events-none"></div>
                <div id="allianz"
                    class="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-950 shadow md:right-6 md:top-6 md:text-sm">
                    <span>Proposé par</span>
                    <img src="~/assets/allianz.svg" alt="Logo Allianz" class="h-4 w-auto md:h-5">
                </div>
                <div class="absolute inset-0 z-10 flex items-end justify-start p-6  md:p-10">
                    <div id="CTA" class="md:px-6 md:py-4 flex flex-col gap-4">
                        <h1 class="text-white text-4xl font-bold md:text-3xl">Play and win</h1>
                        <p class="text-base md:text-lg">
                            Participez à nos quiz interactifs, votez pour vos sports préférés et tentez de gagner des
                            prix exclusifs pour Milano Cortina 2026 </p>
                        <p class="bg-blue-950 rounded-2xl p-4 text-base md:text-lg">
                            Gagnez des expériences uniques : billets, rencontres avec des athlètes et bien d'autres
                            récompenses exclusives </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>