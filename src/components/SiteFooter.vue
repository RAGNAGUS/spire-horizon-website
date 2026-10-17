<script setup>
import { links } from "@/data/site";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-moss-900 py-10 text-sm text-white/60">
    <div class="wrap flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
      <a :href="links.studio" target="_blank" rel="noopener" class="shrink-0 opacity-80 transition hover:opacity-100" aria-label="Mendoka">
        <img src="/media/brand/mendoka-logo.png" alt="Mendoka" class="h-9 w-auto" />
      </a>
      <div class="space-y-2 md:text-right">
        <p>© {{ year }} Mendoka. All rights reserved. · <a :href="`mailto:${links.email}`" class="hover:text-white">{{ links.email }}</a></p>
        <p class="flex flex-wrap justify-center gap-x-4 gap-y-1 md:justify-end">
          <a :href="links.privacy" target="_blank" rel="noopener" class="hover:text-white">Privacy Policy</a>
          <a :href="links.terms" target="_blank" rel="noopener" class="hover:text-white">Terms of Service</a>
          <a :href="links.eula" target="_blank" rel="noopener" class="hover:text-white">EULA</a>
        </p>
      </div>
    </div>
  </footer>
</template>
