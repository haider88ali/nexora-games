<script setup>
import Logo from './Logo.vue';
import { site } from '../data/site';
</script>

<template>
    <footer class="border-t border-white/10 mt-28 bg-black">
        <div class="max-w-7xl mx-auto px-5 md:px-10 py-14 grid gap-10 md:grid-cols-3 text-sm">
            <div><Logo /><p class="mt-4 text-white/50 max-w-xs">Simulation, multiplayer, hyper-casual and 2D games for iOS and Android.</p></div>
            <div>
                <h3 class="text-xs tracking-[.2em] text-white/50 mb-4">Privacy</h3>
                <ul class="space-y-2">
                    <li><router-link class="hover:text-sun" to="/privacy">Privacy Policy</router-link></li>
                </ul>
            </div>
            <div>
                <h3 class="text-xs tracking-[.2em] text-white/50 mb-4">Contact</h3>
                <a class="hover:text-sun" :href="`mailto:${site.email}`">{{ site.email }}</a>
            </div>
        </div>
        <p class="text-center text-xs text-white/40 pb-8 px-5">© {{ new Date().getFullYear() }} {{ site.name }}. All rights reserved. Icon art: <a class="underline" href="https://github.com/twitter/twemoji" target="_blank" rel="noopener">Twemoji</a> (CC-BY 4.0). Placeholder photos: Picsum / Unsplash.</p>
    </footer>
</template>
