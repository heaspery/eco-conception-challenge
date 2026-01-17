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
    },
    src: {
        type: String,
        default: ''
    }
});

</script>

<template>
    <div class="cursor-pointer flex flex-col items-center gap-2 rounded-2xl border bg-blue-950 p-4 text-center shadow-sm backdrop-blur-sm hover:scale-105 hover:shadow-md transition-transform">
        <div class="flex h-20 w-20 items-center justify-center rounded-full text-white">
            <NuxtImg v-if="src" :src="src" :alt="`Logo ${sportName}`" class="h-20 w-20 object-contain" loading="lazy" />
        </div>
        <h2 class="text-base font-semibold text-white">{{ sportName }}</h2>
    </div>

</template>