<script setup>
import AppIcon from "../AppIcon.vue";
import { links, socials } from "@/data/site";
</script>

<template>
  <section id="play" class="bg-moss-700 py-24 text-white sm:py-28">
    <div class="wrap grid gap-6 lg:grid-cols-2">
      <!-- Buy -->
      <div v-reveal class="relative isolate overflow-hidden rounded-[2rem] p-8 sm:p-10">
        <img src="/media/clips/hero.jpg" alt="" loading="lazy" class="absolute inset-0 -z-20 h-full w-full object-cover object-[30%_60%]" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-moss-900/90 via-moss-900/50 to-moss-900/10" />
        <div class="flex h-full min-h-[20rem] flex-col justify-end">
          <h2 class="font-display text-4xl leading-tight">Your adventure in Aetheria starts here.</h2>
          <p class="mt-3 text-white/85">Available now on Steam for Windows.</p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a :href="links.steam" target="_blank" rel="noopener" class="btn-sun !px-7 !py-4 text-base"><AppIcon name="steam" class="h-5 w-5" /> Buy on Steam</a>
          </div>
          <ul class="mt-6 flex flex-wrap gap-2.5">
            <li v-for="s in socials" :key="s.name">
              <a :href="s.url" target="_blank" rel="noopener" class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur transition hover:-translate-y-1 hover:bg-white/25" :aria-label="s.name" :title="s.name">
                <AppIcon :name="s.icon" class="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Sequel -->
      <a v-reveal="120" :href="links.online" target="_blank" rel="noopener" class="group relative isolate overflow-hidden rounded-[2rem] p-8 sm:p-10">
        <img src="/media/brand/sho-scene.jpg" alt="" loading="lazy" class="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a1330]/95 via-[#0a1330]/55 to-transparent" />
        <div class="flex h-full min-h-[20rem] flex-col justify-end">
          <span class="w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur">The adventure continues</span>
          <h2 class="mt-3 font-display text-4xl leading-tight">Spire Horizon Online</h2>
          <p class="mt-3 max-w-md text-white/85">An MMORPG set in Aetheria — 25 classes, creatures to collect and a capybara at your side.</p>
          <span class="mt-6 inline-flex w-fit items-center gap-2 font-extrabold text-sun-300 transition group-hover:gap-3">Visit the Spire Horizon Online site <AppIcon name="right" class="h-4 w-4" /></span>
        </div>
      </a>
    </div>
  </section>
</template>
