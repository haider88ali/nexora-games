<script setup>
import NavBar from './components/NavBar.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] bg-white text-black px-3 py-2 rounded">Skip to content</a>
    <NavBar />
    <main id="main" class="min-h-[70vh]"><router-view /></main>
    <SiteFooter />
</template>
