<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Logo from './Logo.vue';
const open = ref(false);
const scrolled = ref(false);
const onScroll = () => { scrolled.value = window.scrollY > 40; };
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); });
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
const links = [
    { to: '/#games', label: 'Games' },
    { to: '/#news', label: 'Newswire' },
    { to: '/#about', label: 'About' },
    { to: '/#contact', label: 'Contact' },
];
</script>

<template>
    <header class="fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b" :class="scrolled || open ? 'bg-black/90 backdrop-blur border-white/10' : 'bg-gradient-to-b from-black/70 to-transparent border-transparent'">
        <nav class="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between" aria-label="Main">
            <router-link to="/" aria-label="Nexora Games home" @click="open = false"><Logo /></router-link>
            <ul class="hidden md:flex items-center gap-9 font-display text-sm font-medium uppercase tracking-[.18em]">
                <li v-for="l in links" :key="l.to"><router-link :to="l.to" class="text-white/75 hover:text-white transition">{{ l.label }}</router-link></li>
            </ul>
            <button class="md:hidden p-2 -mr-2" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path v-if="!open" d="M4 7h16M4 12h16M4 17h16"/><path v-else d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
        </nav>
        <ul v-if="open" class="md:hidden border-t border-white/10 px-5 py-3 font-display uppercase tracking-widest text-lg">
            <li v-for="l in links" :key="l.to"><router-link :to="l.to" class="block py-3" @click="open = false">{{ l.label }}</router-link></li>
        </ul>
    </header>
</template>
