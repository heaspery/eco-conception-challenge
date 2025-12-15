<script setup>
import { computed } from 'vue';

const props = defineProps({
    sportLogo: {
        type: String,
        required: true
    },
    sportName: {
        type: String,
        required: true
    }
});

const logoSrc = computed(() => new URL(`../assets/logo-sports/${props.sportLogo}`, import.meta.url).href);
</script>

<template>
    <div class="flex flex-col items-center gap-2 rounded-2xl border bg-blue-950 p-4 text-center shadow-sm backdrop-blur-sm hover:scale-105 hover:shadow-md transition-transform">
        <div class="flex h-25 w-30 items-center justify-center rounded-full text-white">
            <img :src="logoSrc" :alt="`Logo ${sportName}`" class="object-contain" loading="lazy">
        </div>
        <h2 class="text-base font-semibold text-white-950">{{ sportName }}</h2>
    </div>

</template>