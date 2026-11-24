<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { games, site } from '../data/site';

const slides = games.slice(0, 4);
const i = ref(0);
const paused = ref(false);
const DURATION = 7000;
const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let timer;
const restart = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => { if (!paused.value) i.value = (i.value + 1) % slides.length; }, DURATION); };
const go = (n) => { i.value = (n + slides.length) % slides.length; restart(); };
const key = (e) => { if (e.key === 'ArrowRight') go(i.value + 1); if (e.key === 'ArrowLeft') go(i.value - 1); };
onMounted(() => { restart(); window.addEventListener('keydown', key); });
onBeforeUnmount(() => { clearInterval(timer); window.removeEventListener('keydown', key); });
</script>

<template>
    <section class="relative h-[100svh] min-h-[620px] overflow-hidden bg-black" aria-roledescription="carousel" aria-label="Featured games" @mouseenter="paused = true" @mouseleave="paused = false">
        <div v-for="(g, n) in slides" :key="g.name" class="absolute inset-0 transition-opacity duration-1000" :class="n === i ? 'opacity-100' : 'opacity-0 pointer-events-none'" :aria-hidden="n !== i">
            <div class="absolute inset-0" :style="{ background: `linear-gradient(135deg, ${g.from}, ${g.to})` }"></div>
            <img :src="g.image" :alt="g.name" class="absolute inset-0 w-full h-full object-cover kenburns" onerror="this.remove()">
            <video v-if="g.video && n === i && !reduce" :src="g.video" :poster="g.image" autoplay muted loop playsinline preload="metadata" class="absolute inset-0 w-full h-full object-cover" onerror="this.remove()"></video>
            <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/10"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

            <img :src="g.art" alt="" class="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 w-[26rem] float drop-shadow-[0_30px_40px_rgba(0,0,0,.55)]">

            <div class="relative h-full max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-end pb-32 md:pb-36">
                <div :key="i + '-' + n" :class="n === i ? 'rise-in' : ''">
                    <span class="inline-block bg-sun text-white text-xs font-bold uppercase tracking-widest px-3 py-1">{{ g.tag }} · {{ g.genre }}</span>
                    <h1 class="mt-5 text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[.88] text-white">{{ g.name }}</h1>
                    <p class="mt-5 text-lg md:text-2xl text-white/80 max-w-xl normal-case">{{ g.tagline }}</p>
                    <div class="mt-8 flex flex-wrap gap-3">
                        <a :href="site.appStoreUrl" class="btn">App Store</a>
                        <a :href="site.playStoreUrl" class="btn btn-ghost">Google Play</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-0 inset-x-0 z-10 max-w-7xl mx-auto px-5 md:px-10 pb-8 grid grid-cols-4 gap-3">
            <button v-for="(g, n) in slides" :key="g.name" class="text-left group" :aria-label="`Show ${g.name}`" :aria-current="n === i" @click="go(n)">
                <span class="block h-[3px] bg-white/25 overflow-hidden"><span :key="i" class="block h-full bg-white" :class="n === i ? 'progress' : ''" :style="{ width: n < i ? '100%' : n === i ? undefined : '0', animationPlayState: paused ? 'paused' : 'running', animationDuration: DURATION + 'ms' }"></span></span>
                <span class="hidden sm:block mt-2 font-display text-xs uppercase tracking-[.2em] transition" :class="n === i ? 'text-white' : 'text-white/45 group-hover:text-white'">{{ g.name }}</span>
            </button>
        </div>
        <button class="hidden md:grid absolute left-4 top-1/2 z-10 w-12 h-12 place-items-center border border-white/40 hover:bg-white hover:text-black transition text-2xl" aria-label="Previous" @click="go(i - 1)">‹</button>
        <button class="hidden md:grid absolute right-4 top-1/2 z-10 w-12 h-12 place-items-center border border-white/40 hover:bg-white hover:text-black transition text-2xl" aria-label="Next" @click="go(i + 1)">›</button>
    </section>
</template>
