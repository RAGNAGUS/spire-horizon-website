<script setup>
import LoopClip from "../LoopClip.vue";
import { features } from "@/data/site";
</script>

<template>
  <section id="features" class="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-200 py-24 sm:py-32">
    <div class="wrap">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="kicker justify-center">Features</p>
        <h2 class="title mt-3">Take it slow. Or don’t.</h2>
        <p class="mt-5 text-lg leading-8 text-moss-800/75">
          Spire Horizon is made for a comfortable pace — relax in nature, or go hunting for rare drops. Your call.
        </p>
      </div>

      <div class="mt-16 space-y-16 sm:space-y-24">
        <article
          v-for="(f, i) in features"
          :key="f.title"
          class="grid items-center gap-8 md:grid-cols-2 md:gap-14"
        >
          <div v-reveal class="relative" :class="i % 2 ? 'md:order-2' : ''">
            <div class="absolute -inset-3 rounded-[2rem] bg-moss-400/25" :class="i % 2 ? 'rotate-2' : '-rotate-2'" />
            <div class="relative aspect-video overflow-hidden rounded-[1.75rem] border-[5px] border-cream-50 bg-moss-800 shadow-soft">
              <LoopClip :name="f.clip" :label="f.title" />
            </div>
          </div>
          <div v-reveal="100" :class="i % 2 ? 'md:order-1 md:text-right' : ''">
            <span class="font-display text-6xl text-sun-500/80">{{ String(i + 1).padStart(2, "0") }}</span>
            <h3 class="mt-1 font-display text-3xl text-moss-800">{{ f.title }}</h3>
            <p class="mt-3 text-lg leading-8 text-moss-800/75" :class="i % 2 ? 'md:ml-auto' : ''" style="max-width: 32rem">{{ f.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
