<script setup>
import { Menu } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';
</script>

<template>
    <div class="bg-blue-950 text-white w-full">
        <div class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:flex-nowrap md:gap-8">
            <div class="flex items-center gap-4 md:gap-6">
                <div class="h-10 w-auto">
                    <img src="~/assets/logo.png" alt="logo milan cortina" class="h-10 w-auto object-contain">
                </div>
                <nav id="links" class="hidden items-center gap-4 text-sm md:flex md:gap-6">
                    <a href="#">Relais de la Flamme Olympique</a>
                    <a href="#">Calendrier</a>
                    <a href="#" class="underline">Play & Win</a>
                </nav>
            </div>
            <div class="flex flex-1 items-center justify-end gap-3 text-sm md:gap-4">
                <div class="hidden items-center gap-3 sm:flex">
                    <div class="border rounded-full px-4 py-2 bg-white text-blue-950 cursor-pointer hover:bg-gray-200 transition-colors">
                        <a href="#">Se connecter</a>
                    </div>
                    <div class="border rounded-full px-4 py-2 cursor-pointer hover:bg-blue-900 transition-colors">
                        <a href="#"> <ChevronDown class="inline-block h-4 w-4 mr-1"/>Français</a>
                    </div>
                </div>
                <button class="cursor-pointer hover:text-gray-200" aria-label="Open menu">
                    <Menu />
                </button>
            </div>
        </div>
    </div>
</template>