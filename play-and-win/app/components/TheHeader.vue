<script setup>
import { Menu } from 'lucide-vue-next';
</script>

<template>
    <div class="bg-blue-950 text-white w-full flex flex-row justify-center">
        <div class="flex flex-row items justify-start gap-48 items-center p-4 mx-8">
            <div class="flex flex-row  gap-4 items-center">
                <div class="w-18">
                    <img src="~/assets/logo.png" alt="logo milan cortina">
                </div>
                <div class="flex flex-row gap-6">
                    <a href="#">Olympic torch Relay</a>
                    <a href="#">Competition Schedule</a>
                    <a href="#" class="underline">Play & Win</a>
                </div>
            </div>
            <div class="flex flex-row gap-6 items-center">
                <div class="border rounded-4xl p-3 bg-white text-blue-950 cursor-pointer hover:bg-gray-200"> <a
                        href="#">Sign In</a></div>
                <div class="border rounded-4xl p-3 cursor-pointer hover:bg-blue-900">
                    <a href="#">English</a>
                </div>
                <div class="cursor-pointer hover:text-gray-200">
                    <Menu />
                </div>
            </div>

        </div>
    </div>
</template>