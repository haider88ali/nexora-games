<script setup>
import { site } from '../data/site';
</script>

<template>
    <div class="flex flex-wrap gap-3">
        <a :href="site.appStoreUrl" class="btn">App Store</a>
        <a :href="site.playStoreUrl" class="btn btn-ghost">Google Play</a>
    </div>
</template>
