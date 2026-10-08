<script setup>
import { computed, ref } from "vue";
import ImageLightbox from "../ImageLightbox.vue";
import { gallery, postcards } from "@/data/site";

const open = ref(-1);
const cardOpen = ref(-1);
const cardImages = computed(() => postcards.map((src, i) => ({ src, alt: `Postcard ${i + 1}` })));
</script>

<template>
  <section id="gallery" class="bg-sky-200 pb-24 sm:pb-32">
    <div class="wrap">
      <div v-reveal class="flex flex-col items-start justify-between gap-4 pt-4 md:flex-row md:items-end">
        <div>
          <p class="kicker !text-moss-700">Gallery</p>
          <h2 class="title mt-3">Postcards from Aetheria</h2>
        </div>
        <p class="max-w-sm leading-7 text-moss-900/70">Windmills and watermills, cherry blossoms, ruins on the hill and a tower all alone.</p>
      </div>

      <div class="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <button
          v-for="(g, i) in gallery"
          :key="g.src"
          v-reveal="(i % 4) * 70"
          type="button"
          class="group relative overflow-hidden rounded-2xl bg-moss-800 shadow-soft"
          :class="[i === 0 && 'col-span-2 row-span-2', i === gallery.length - 1 && 'col-span-2']"
          @click="open = i"
        >
          <img :src="i === 0 ? g.src : g.thumb" :alt="g.alt" loading="lazy" class="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-moss-900/80 to-transparent px-3 pb-2.5 pt-10 text-left text-xs font-bold text-white opacity-0 transition group-hover:opacity-100 sm:text-sm">{{ g.alt }}</span>
        </button>
      </div>

      <!-- Postcard strip -->
      <div v-reveal class="-mx-4 mt-14 overflow-x-auto px-4 pb-6 [scrollbar-width:thin] sm:-mx-6 sm:px-6">
        <ul class="flex w-max gap-5">
          <li v-for="(p, i) in postcards" :key="p">
            <button
              type="button"
              class="block w-40 rounded-xl border-[5px] border-cream-50 bg-cream-50 shadow-soft transition duration-300 hover:-translate-y-2 hover:rotate-0 sm:w-48"
              :class="i % 2 ? 'rotate-2' : '-rotate-2'"
              :aria-label="`View postcard ${i + 1}`"
              @click="cardOpen = i"
            >
              <img :src="p" alt="" loading="lazy" class="aspect-[3/4] w-full rounded-md object-cover" />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <ImageLightbox :images="gallery" :index="open" @close="open = -1" @move="(i) => (open = i)" />
    <ImageLightbox :images="cardImages" :index="cardOpen" @close="cardOpen = -1" @move="(i) => (cardOpen = i)" />
  </section>
</template>
