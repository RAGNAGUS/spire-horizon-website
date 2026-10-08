<script setup>
import { facts } from "@/data/site";
</script>

<template>
  <section id="story" class="grass-top relative overflow-x-clip bg-cream-100 py-24 text-cream-100 sm:py-32">
    <div class="wrap grid items-center gap-14 text-moss-900 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p v-reveal class="kicker">The story</p>
        <h2 v-reveal class="title mt-3">Brought back as bones.<br />Sent off to find the truth.</h2>
        <div v-reveal class="mt-6 space-y-4 text-lg leading-8 text-moss-800/80">
          <p>
            For some reason, you and your friends were resurrected as skeletons. Nobody knows why — but the answer might be
            waiting at the top of the Spire Horizon tower, where the most powerful monsters in Aetheria stand guard.
          </p>
          <p>
            Travel through a world of diverse races and unique homes, piece together the fragments of your forgotten
            identity, and grow strong enough to climb.
          </p>
        </div>
        <dl class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div v-for="(f, i) in facts" :key="f.label" v-reveal="i * 80" class="paper px-4 py-5 text-center">
            <dt class="sr-only">{{ f.label }}</dt>
            <dd class="font-display text-4xl text-moss-600">{{ f.value }}</dd>
            <dd class="mt-1 text-xs font-extrabold uppercase tracking-wider text-moss-800/60">{{ f.label }}</dd>
          </div>
        </dl>
      </div>

      <div v-reveal="120" class="relative mx-auto w-full max-w-sm">
        <div class="absolute -inset-3 -rotate-3 sm:-inset-5 rounded-[2.25rem] bg-sun-300/60" />
        <img src="/media/brand/poster.jpg" alt="Spire Horizon key art" loading="lazy" class="relative rotate-2 rounded-[2rem] border-[6px] border-cream-50 shadow-soft" />
      </div>
    </div>
  </section>
</template>
