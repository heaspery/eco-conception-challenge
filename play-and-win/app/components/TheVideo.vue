<script setup>
// Toggle video play/pause on user interaction (click or keyboard)
function handleToggleVideo(event) {
    const video = event.currentTarget;
    if (!video) return;
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function handleKeyToggle(event) {
    if (event.code !== "Space" && event.code !== "Enter") return;
    event.preventDefault();
    handleToggleVideo(event);
}
</script>

<template>
    <section class="mt-18 mx-auto text-blue-950 flex flex-col items-center my-8 px-4 rounded-2xl "> 
    <div>
        <video
            class="max-w-4xl h-auto rounded-2xl shadow-xl cursor-pointer"
            muted
            loop
            tabindex="0"
            @click="handleToggleVideo"
            @keydown="handleKeyToggle"
        >
            <source src="/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    </section>
</template>
