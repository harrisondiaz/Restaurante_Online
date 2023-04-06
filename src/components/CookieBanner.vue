<template>
    <div v-if="showBanner" class="cookie-banner">
        <p>
            Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al continuar utilizando nuestro sitio web, aceptas el uso de cookies.
            <button class="btn btn-dark" @click="acceptCookies">Aceptar</button>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showBanner: localStorage.getItem("cookiesAccepted"),
        };
    },
    methods: {
        acceptCookies() {
            localStorage.setItem("cookiesAccepted", "true");
            this.showBanner = false;
        },
    },
};
</script>

<style scoped>
.cookie-banner {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #181818;
    padding: 15px;
    text-align: center;
    border-top: 1px solid #ccc;
    z-index: 1000;
}
</style>