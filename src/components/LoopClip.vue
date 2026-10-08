<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

// A short muted gameplay loop that only plays while it is on screen (saves battery and data).
const props = defineProps({ name: { type: String, required: true }, label: { type: String, default: "" } });
const video = ref(null);
let observer;

onMounted(() => {
  const v = video.value;
  if (!v || typeof IntersectionObserver === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  observer = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.25 });
  observer.observe(v);
});
onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <video
    ref="video"
    class="h-full w-full object-cover"
    :src="`/media/clips/${props.name}.mp4`"
    :poster="`/media/clips/${props.name}.jpg`"
    :aria-label="props.label"
    muted
    loop
    playsinline
    preload="none"
  />
</template>
