<template>
    <router-link to="/">
    <back-button/>
    </router-link>
    <div class="full">
    <log-in/>
    </div>
</template>

<script>
import LogIn from "@/components/LogIn.vue";
import BackButton from "@/components/BackButton.vue";
import { IconArrowNarrowLeft } from '@tabler/icons-vue';
export default {
    name: "LogInView",
    components: {
        LogIn,
        IconArrowNarrowLeft,
        BackButton
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