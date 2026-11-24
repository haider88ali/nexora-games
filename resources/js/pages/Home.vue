<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { games, genres, news, site, trailer, pic } from '../data/site';
import HeroSlider from '../components/HeroSlider.vue';

const playing = ref(false);
const filter = ref('All');
const filters = ['All', 'Simulation', 'Multiplayer', 'Hyper-Casual', '2D'];
const shown = computed(() => filter.value === 'All' ? games : games.filter(g => g.genre === filter.value));
const words = ['Simulation', 'Multiplayer', 'Hyper-Casual', '2D Games', 'iOS', 'Android', 'Free to play'];
const marqueeItems = [...words, ...words, ...words, ...words];

let io;
onMounted(() => {
    io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
onBeforeUnmount(() => io && io.disconnect());
</script>

<template>
    <HeroSlider />

    <div class="overflow-hidden border-y border-white/10 py-4 bg-black" aria-hidden="true">
        <div class="marquee flex gap-12 whitespace-nowrap font-display uppercase text-2xl font-bold text-white/20 w-max">
            <span v-for="(t, k) in marqueeItems" :key="k">{{ t }} <span class="text-sun mx-4">✦</span></span>
        </div>
    </div>

    <!-- Games -->
    <section id="games" class="max-w-7xl mx-auto px-5 md:px-10 pt-24 scroll-mt-20">
        <div class="flex flex-wrap items-end justify-between gap-6 reveal">
            <h2 class="section-title">Games</h2>
            <div class="flex flex-wrap gap-2" role="group" aria-label="Filter games by genre">
                <button v-for="f in filters" :key="f" class="pill" :aria-pressed="filter === f" @click="filter = f">{{ f }}</button>
            </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-10">
            <article v-for="(g, n) in shown" :key="g.name" class="reveal group relative aspect-[3/4] overflow-hidden bg-neutral-900" :style="{ transitionDelay: (n % 4) * 80 + 'ms' }">
                <div class="absolute inset-0" :style="{ background: `linear-gradient(160deg, ${g.from}, ${g.to})` }"></div>
                <img :src="pic(g.name + '-poster', 900, 1200)" :alt="g.name" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-luminosity group-hover:scale-110 group-hover:opacity-90 transition duration-700" onerror="this.remove()">
                <img :src="g.art" alt="" loading="lazy" class="absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2 w-3/5 drop-shadow-[0_20px_25px_rgba(0,0,0,.5)] group-hover:scale-110 group-hover:-rotate-6 transition duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <span class="absolute top-3 left-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1">{{ g.tag }}</span>
                <div class="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <p class="text-[11px] uppercase tracking-widest text-white/70">{{ g.genre }}</p>
                    <h3 class="text-2xl md:text-3xl font-bold leading-none mt-1">{{ g.name }}</h3>
                    <div class="mt-3 flex gap-4 text-xs font-semibold uppercase tracking-widest md:translate-y-3 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                        <a :href="site.appStoreUrl" class="hover:text-sun">App Store →</a>
                        <a :href="site.playStoreUrl" class="hover:text-sun">Google Play →</a>
                    </div>
                </div>
            </article>
        </div>
    </section>

    <!-- Watch -->
    <section id="trailer" class="max-w-7xl mx-auto px-5 md:px-10 pt-28 scroll-mt-20">
        <h2 class="reveal section-title">Watch</h2>
        <div class="reveal relative mt-10 aspect-video bg-black overflow-hidden group">
            <video v-if="playing" :src="trailer.src" controls autoplay playsinline class="absolute inset-0 w-full h-full"></video>
            <button v-else class="absolute inset-0 w-full" :aria-label="`Play ${trailer.title}`" @click="playing = true">
                <img :src="trailer.poster" alt="" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" onerror="this.remove()">
                <span class="absolute inset-0 bg-black/45"></span>
                <span class="absolute inset-0 grid place-items-center"><span class="w-24 h-24 rounded-full border-2 border-white grid place-items-center group-hover:bg-white group-hover:text-black transition"><svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></span>
                <span class="absolute bottom-5 left-6 text-left font-display text-2xl md:text-4xl font-bold uppercase">{{ trailer.title }}</span>
            </button>
        </div>
    </section>

    <!-- Genres -->
    <section id="genres" class="max-w-7xl mx-auto px-5 md:px-10 pt-28 scroll-mt-20">
        <h2 class="reveal section-title">What we make</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 mt-10 border-t border-white/15">
            <article v-for="(g, i) in genres" :key="g.key" class="reveal py-10 lg:px-8 lg:first:pl-0 lg:border-l first:border-l-0 border-white/15 border-b lg:border-b-0" :style="{ transitionDelay: i * 100 + 'ms' }">
                <span class="font-display text-sun text-sm tracking-widest">0{{ i + 1 }}</span>
                <h3 class="text-3xl font-bold mt-3">{{ g.title }}</h3>
                <p class="text-white/60 mt-3 leading-relaxed">{{ g.text }}</p>
            </article>
        </div>
    </section>

    <!-- Newswire -->
    <section id="news" class="max-w-7xl mx-auto px-5 md:px-10 pt-28 scroll-mt-20">
        <h2 class="reveal section-title">Newswire</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <a v-for="(n, i) in news" :key="n.title" href="#" class="reveal group block" :style="{ transitionDelay: i * 90 + 'ms' }">
                <div class="aspect-video overflow-hidden relative bg-neutral-900">
                    <div class="absolute inset-0" :style="{ background: `linear-gradient(135deg, ${n.from}, ${n.to})` }"></div>
                    <img :src="pic(n.title, 800, 450)" :alt="n.title" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" onerror="this.remove()">
                    <span class="absolute bottom-3 left-3 bg-black/75 text-[10px] font-bold uppercase tracking-widest px-2 py-1">{{ n.tag }}</span>
                </div>
                <p class="text-xs text-white/45 mt-4">{{ n.date }}</p>
                <h3 class="text-xl font-semibold normal-case leading-snug mt-1 group-hover:text-sun transition">{{ n.title }}</h3>
            </a>
        </div>
    </section>

    <!-- About -->
    <section id="about" class="max-w-7xl mx-auto px-5 md:px-10 pt-28 scroll-mt-20">
        <div class="reveal grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 class="section-title">Play-first.<br><span class="text-sun">Always.</span></h2>
                <p class="text-white/60 mt-6 text-lg leading-relaxed max-w-lg">Nexora Games is a small team of designers, artists and engineers. We prototype fast, test with real players, and polish the feel of every tap until it's just right.</p>
            </div>
            <ul class="grid grid-cols-3 gap-4">
                <li v-for="s in [{ n: games.length + '+', l: 'Games' }, { n: '2', l: 'Platforms' }, { n: '4', l: 'Genres' }]" :key="s.l" class="border border-white/15 p-6">
                    <p class="font-display text-5xl font-bold">{{ s.n }}</p><p class="text-xs uppercase tracking-widest text-white/45 mt-2">{{ s.l }}</p>
                </li>
            </ul>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="max-w-7xl mx-auto px-5 md:px-10 pt-28 scroll-mt-20">
        <div class="reveal bg-white text-black p-10 md:p-16 flex flex-wrap items-center justify-between gap-8">
            <div><h2 class="text-4xl md:text-6xl font-bold leading-none">Say hello</h2><p class="mt-3 text-black/65">Feedback, partnerships or press — we read every message.</p></div>
            <a :href="`mailto:${site.email}`" class="bg-black text-white font-display font-semibold uppercase tracking-widest text-sm px-8 py-4 hover:bg-sun transition">{{ site.email }}</a>
        </div>
    </section>
</template>
