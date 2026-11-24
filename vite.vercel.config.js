// Static SPA build used by Vercel (Laravel/PHP isn't needed to serve this site).
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    build: { outDir: 'dist', emptyOutDir: true },
});
