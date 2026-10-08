<script setup>
import { regions } from "@/data/site";
</script>

<template>
  <section id="world" class="relative overflow-hidden bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 py-24 sm:py-32">
    <!-- Clouds -->
    <div class="pointer-events-none absolute inset-x-0 top-10 h-40 animate-drift opacity-70" style="background: radial-gradient(closest-side, #fff 55%, transparent) 0 0 / 24% 100% repeat-x" />
    <div class="wrap relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
      <div v-reveal class="relative">
        <img src="/media/brand/world-map.png" alt="Map of Aetheria" loading="lazy" class="mx-auto w-full max-w-lg animate-bob drop-shadow-[0_30px_40px_rgba(30,60,90,0.35)]" />
      </div>
      <div>
        <p v-reveal class="kicker !text-moss-700">The world</p>
        <h2 v-reveal class="title mt-3">Welcome to Aetheria</h2>
        <p v-reveal class="mt-5 text-lg leading-8 text-moss-900/75">
          Meadows, temples, deserts and snow — each land with its own people, homes and monsters. And in the middle of it
          all, the Spire Horizon tower, waiting for the strongest to conquer it.
        </p>
        <ul class="mt-8 grid gap-4 sm:grid-cols-2">
          <li v-for="(r, i) in regions" :key="r.name" v-reveal="i * 90" class="group overflow-hidden rounded-3xl bg-cream-50 shadow-soft">
            <img :src="r.thumb" :alt="r.alt" loading="lazy" class="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" />
            <div class="p-4">
              <h3 class="font-display text-xl text-moss-800">{{ r.name }}</h3>
              <p class="mt-1 text-sm leading-6 text-moss-800/70">{{ r.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
