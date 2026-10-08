<script setup>
import YouTubeLite from "../YouTubeLite.vue";
import LoopClip from "../LoopClip.vue";
import { trailer } from "@/data/site";
</script>

<template>
  <section id="trailer" class="grass-top relative bg-moss-600 py-24 text-moss-600 sm:py-32">
    <div class="wrap grid items-center gap-12 text-white lg:grid-cols-[1.4fr_1fr]">
      <div v-reveal class="rounded-[2rem] bg-cream-50 p-2.5 shadow-soft">
        <YouTubeLite :id="trailer.id" :title="trailer.title" />
      </div>
      <div v-reveal="120">
        <p class="kicker !text-sun-300">Trailer</p>
        <h2 class="mt-3 font-display text-4xl leading-tight sm:text-5xl">Grab your guitar.<br />The road is long.</h2>
        <p class="mt-5 text-lg leading-8 text-white/85">
          Spire Horizon became one of Steam’s <strong class="text-sun-300">New Top Sellers</strong> in its launch month — thank
          you to everyone who set out on the journey.
        </p>
        <div class="mt-7 aspect-video max-w-sm overflow-hidden rounded-2xl border-4 border-white/20 shadow-soft">
          <LoopClip name="guitar" label="A skeleton playing guitar by the campfire" />
        </div>
      </div>
    </div>
  </section>
</template>
