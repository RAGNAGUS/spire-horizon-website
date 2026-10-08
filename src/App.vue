<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import StorySection from "@/components/sections/StorySection.vue";
import FeaturesSection from "@/components/sections/FeaturesSection.vue";
import WorldSection from "@/components/sections/WorldSection.vue";
import GallerySection from "@/components/sections/GallerySection.vue";
import TrailerSection from "@/components/sections/TrailerSection.vue";
import PlaySection from "@/components/sections/PlaySection.vue";
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <StorySection />
    <FeaturesSection />
    <WorldSection />
    <GallerySection />
    <TrailerSection />
    <PlaySection />
  </main>
  <SiteFooter />
</template>
