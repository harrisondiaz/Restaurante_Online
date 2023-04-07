<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <h3 class="footer-title">RestaOnline</h3>
                <p>Tu comida favorita en un solo lugar</p>
                <ul class="footer-links">
                    <li><router-link to="about">Acerca de</router-link></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Términos y condiciones</a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>© RestaOnline 2023. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    font-family: Arial, sans-serif;
    width: 100%;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.footer-title {
    margin-bottom: 10px;
}

.footer-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}

.footer-links li {
    margin: 0 10px;
}

.footer-links a {
    color: #fff;
    text-decoration: none;
}

.footer-links a:hover {
    text-decoration: underline;
}

.footer-bottom {
    text-align: center;
}
</style>
