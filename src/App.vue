<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CookieBanner from "@/components/CookieBanner.vue";
</script>

<template>
    <RouterView />
    <cookie-banner></cookie-banner>

</template>

<style scoped>

</style>
