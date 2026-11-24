import '../css/app.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import PrivacyPolicy from './pages/PrivacyPolicy.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, meta: { title: 'Nexora Games — Simulation, Hyper-Casual & 2D Mobile Games' } },
        { path: '/privacy', component: PrivacyPolicy, meta: { title: 'Privacy Policy — Nexora Games' } },
        // Old per-store URLs keep working
        { path: '/privacy/ios', redirect: '/privacy' },
        { path: '/privacy/playstore', redirect: '/privacy' },
        { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Not found — Nexora Games' } },
    ],
    scrollBehavior: (to, from, saved) =>
        saved || (to.hash ? { el: to.hash, top: 80 } : { top: 0 }),
});
router.afterEach((to) => { document.title = to.meta.title; });

createApp(App).use(router).mount('#app');
