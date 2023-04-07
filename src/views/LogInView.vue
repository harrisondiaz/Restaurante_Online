<template>
    <router-link to="/">
    <div class="back">
        <icon-arrow-narrow-left size="50"/>
        Regresar
    </div>
    </router-link>
    <div class="full">
    <log-in/>
    </div>
</template>

<script>
import LogIn from "@/components/LogIn.vue";
import { IconArrowNarrowLeft } from '@tabler/icons-vue';
export default {
    name: "LogInView",
    components: {
        LogIn,
        IconArrowNarrowLeft
    }
}
</script>

<style scoped>

.back{
    position: static;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>