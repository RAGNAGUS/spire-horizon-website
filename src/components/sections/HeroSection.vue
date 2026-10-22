<script setup>
import { ref } from "vue";
import AppIcon from "../AppIcon.vue";
import YouTubeLite from "../YouTubeLite.vue";
import { links, trailer } from "@/data/site";

const trailerOpen = ref(false);
// Fireflies drifting over the meadow (positions are fixed so the page renders the same every time).
const flies = [
  [12, 62, 0], [22, 40, 1.2], [31, 70, 2.4], [46, 55, 0.6], [58, 76, 1.8],
  [67, 48, 3.1], [74, 66, 0.9], [83, 58, 2.2], [90, 72, 1.5], [38, 82, 3.6],
];
</script>

<template>
  <section id="top" class="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-20 pt-28 text-white sm:items-center">
    <video
      class="absolute inset-0 -z-20 h-full w-full object-cover object-[35%_60%]"
      src="/media/clips/hero.mp4"
      poster="/media/clips/hero.jpg"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
    />
    <div class="absolute inset-0 -z-10 bg-gradient-to-l from-black/55 via-black/15 to-transparent" />
    <div class="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/40 to-transparent" />
    <span
      v-for="(f, i) in flies"
      :key="i"
      class="pointer-events-none absolute -z-10 h-1.5 w-1.5 animate-firefly rounded-full bg-sun-300 shadow-[0_0_12px_4px_rgba(255,224,138,0.8)]"
      :style="{ left: f[0] + '%', top: f[1] + '%', animationDelay: f[2] + 's' }"
    />

    <div class="wrap flex justify-end">
      <div class="max-w-xl text-center sm:text-left">
        <h1>
          <span class="sr-only">Spire Horizon</span>
          <img src="/media/brand/logo.png" alt="" class="mx-auto w-full max-w-[24rem] drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] sm:mx-0" />
        </h1>
        <p class="mt-6 font-display text-2xl drop-shadow-md sm:text-3xl">A cozy open-world adventure.</p>
        <p class="mt-3 text-lg leading-8 text-white/90 drop-shadow">
          Wake up as a skeleton in the world of Aetheria. Relax, explore, fight, farm and climb the Spire Horizon tower —
          alone or with friends.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
          <a :href="links.steam" target="_blank" rel="noopener" class="btn-sun !px-7 !py-4 text-base"><AppIcon name="steam" class="h-5 w-5" /> Buy on Steam</a>
          <button type="button" class="btn-glass !px-7 !py-4 text-base" @click="trailerOpen = true"><AppIcon name="play" class="h-5 w-5" /> Watch the trailer</button>
        </div>
        <p class="mt-6 text-sm font-bold text-white/80 drop-shadow">Out now on Steam for Windows · Released 28 July 2023</p>
      </div>
    </div>

    <Teleport to="body">
      <transition enter-active-class="transition duration-200" enter-from-class="opacity-0" leave-active-class="transition duration-150" leave-to-class="opacity-0">
        <div v-if="trailerOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-moss-900/90 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label="Trailer" @click.self="trailerOpen = false">
          <div class="w-full max-w-5xl rounded-3xl bg-cream-50 p-2 shadow-soft">
            <YouTubeLite :id="trailer.id" :title="trailer.title" autoplay />
          </div>
          <button type="button" class="absolute right-4 top-4 rounded-full bg-white/15 p-3 text-white hover:bg-white/25" aria-label="Close trailer" @click="trailerOpen = false">
            <AppIcon name="close" class="h-5 w-5" />
          </button>
        </div>
      </transition>
    </Teleport>
  </section>
</template>
