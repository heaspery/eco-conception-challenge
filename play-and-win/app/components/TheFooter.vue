<script setup>
import { Facebook } from 'lucide-vue-next';
import { Instagram } from 'lucide-vue-next';
import { Twitter } from 'lucide-vue-next';
import { Youtube } from 'lucide-vue-next';

</script>

<template>
    <section>
        <footer class="pt-12 bg-blue-950 text-white w-full flex flex-col sm:flex-row gap-8 justify-center border-t border-gray-400 p-4 text-sm
    ">
            <div class="flex flex-col gap-12 items-center">
                <div>
                    <h2 class="font-bold text-lg mb-6">Partenaires Olympiques et Paralympiques Mondiaux</h2>
                </div>
                <div class=" grid grid-cols-3 sm:grid-cols-5 gap-6 items-center justify-items-center max-w-4xl mx-auto">
                    <NuxtImg src="/assets/logo-partenaires/Airbnb_Logo_Bélo.svg" alt="logo milan cortina"
                        class="logo-white h-8 w-auto object-contain" />
                    <NuxtImg src="/assets/logo-partenaires/Alibaba_en_logo.svg" alt="logo milan cortina"
                        class="logo-white h-8 w-auto object-contain" />
                    <NuxtImg src="/assets/logo-partenaires/Allianz.svg" alt="logo milan cortina"
                        class="logo-white h-8 w-auto object-contain" />
                    <NuxtImg src="/assets/logo-partenaires/Coca-Cola_logo.svg" alt="logo milan cortina"
                        class="logo-white h-8 w-auto object-contain" />
                    <NuxtImg src="/assets/logo-partenaires/corona.svg" alt="logo milan cortina"
                        class="logo-white h-8 w-auto object-contain" />
                    <NuxtImg src="/assets/logo-partenaires/Logo_of_Deloitte.svg" alt="logo milan cortina"
                        class="logo-white h-8 w-auto object-contain" />
                    <NuxtImg src="/assets/logo-partenaires/P&G_Logo.svg" alt="logo milan cortina"
                        class="logo-white h-8 w-auto object-contain" />
                    <NuxtImg src="/assets/logo-partenaires/samsung.svg" alt="logo milan cortina"
                        class=" h-8 w-auto object-contain" />
                    <NuxtImg src="/assets/logo-partenaires/TCL.svg" alt="logo milan cortina"
                        class=" h-8 w-auto object-contain" />
                    <NuxtImg src="/assets/logo-partenaires/Visa_2021.svg" alt="logo milan cortina"
                        class="logo-white h-8 w-auto object-contain" />
                </div>
                <div>
                    <div class="flex flex-col items-center">
                        <h2 class="text-base mb-6">Suivez Milano Cortina 2026</h2>
                        <div class="flex flex-row gap-4">
                            <Facebook class="h-6 w-6 cursor-pointer hover:text-gray-300" />
                            <Instagram class="h-6 w-6 cursor-pointer hover:text-gray-300" />
                            <Twitter class="h-6 w-6 cursor-pointer hover:text-gray-300" />
                            <Youtube class="h-6 w-6 cursor-pointer hover:text-gray-300" />
                        </div>
                    </div>

                </div>
                <div class="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <p>
                        © Milano Cortina 2026. HEIG-VD : ecoconception challenge.
                    </p>
                    <p>
                        Politique de confidentialité · Conditions d'utilisation · Accessibilité · Cookies
                    </p>
                </div>
            </div>

        </footer>
    </section>
</template>

<style scoped>
.logo-white {
    filter: brightness(0) invert(1);
}
</style>