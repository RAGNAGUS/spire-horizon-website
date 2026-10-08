<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import AppIcon from "./AppIcon.vue";
import { links } from "@/data/site";

const nav = [
  { label: "Story", href: "#story" },
  { label: "Features", href: "#features" },
  { label: "World", href: "#world" },
  { label: "Gallery", href: "#gallery" },
  { label: "Trailer", href: "#trailer" },
];

const scrolled = ref(false);
const open = ref(false);
const onScroll = () => (scrolled.value = window.scrollY > 40);
onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled || open ? 'bg-cream-50/90 shadow-soft backdrop-blur-xl' : 'bg-gradient-to-b from-black/35 to-transparent'"
  >
    <div class="wrap flex h-16 items-center gap-4">
      <a href="#top" class="shrink-0" aria-label="Spire Horizon — top">
        <img :src="scrolled || open ? '/media/brand/logo-dark.png' : '/media/brand/logo.png'" alt="Spire Horizon" class="h-9 w-auto" />
      </a>
      <nav class="ml-6 hidden items-center gap-1 lg:flex" aria-label="Main">
        <a
          v-for="n in nav"
          :key="n.href"
          :href="n.href"
          class="rounded-full px-4 py-2 text-sm font-extrabold transition"
          :class="scrolled ? 'text-moss-800 hover:bg-moss-500/10' : 'text-white/90 hover:bg-white/15'"
        >{{ n.label }}</a>
      </nav>
      <div class="ml-auto flex items-center gap-2">
        <a :href="links.steam" target="_blank" rel="noopener" class="btn-sun hidden !px-5 !py-2.5 sm:inline-flex">
          <AppIcon name="steam" class="h-4 w-4" /> Buy on Steam
        </a>
        <button
          type="button"
          class="rounded-full p-2 lg:hidden"
          :class="scrolled || open ? 'text-moss-800' : 'text-white'"
          :aria-expanded="open"
          aria-controls="m-nav"
          aria-label="Menu"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'close' : 'menu'" class="h-6 w-6" />
        </button>
      </div>
    </div>
    <nav v-if="open" id="m-nav" class="wrap grid gap-1 pb-4 lg:hidden" aria-label="Main" @click="open = false">
      <a v-for="n in nav" :key="n.href" :href="n.href" class="rounded-xl px-4 py-3 font-extrabold text-moss-800 hover:bg-moss-500/10">{{ n.label }}</a>
      <a :href="links.steam" target="_blank" rel="noopener" class="btn-sun mt-2 sm:hidden"><AppIcon name="steam" class="h-4 w-4" /> Buy on Steam</a>
    </nav>
  </header>
</template>
