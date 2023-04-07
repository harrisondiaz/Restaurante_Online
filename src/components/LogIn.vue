<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card bg-dark text-white">
                    <div class="card-body form-container">
                        <transition name="swap-cards">
                            <form class="form" v-if="!showRegisterForm" @submit.prevent="login" key="login">
                                <h2 class="text-center">Iniciar sesión</h2>
                                <div class="form-group">
                                    <label for="login-email">Correo electrónico</label>
                                    <input type="email" class="form-control" id="login-email" v-model="loginEmail" required />
                                </div>
                                <div class="form-group">
                                    <label for="login-password">Contraseña</label>
                                    <input type="password" class="form-control" id="login-password" v-model="loginPassword" required />
                                </div>
                                <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                                <div class="mt-3">
                                    <button type="button" class="btn btn-google me-2" @click="signInWithGoogle">
                                        <icon-brand-google/> Iniciar sesión con Google
                                    </button>
                                    <button type="button" class="btn btn-facebook" @click="signInWithFacebook">
                                        <icon-brand-facebook-filled/> Iniciar sesión con Facebook
                                    </button>

                                </div>
                                <p class="text-center mt-3">
                                    ¿No tienes cuenta? <a href="#" @click.prevent="toggleForms" class="text-primary">Registrarse</a>
                                </p>
                            </form>
                        </transition>
                        <transition name="swap-cards">
                            <div v-if="showRegisterForm" key="register">
                                <h3 class="text-center mb-3">Registro</h3>
                                <div class="mb-3">
                                    <button type="button" class="btn btn-google me-2">
                                        <icon-brand-google /> Iniciar sesión con Google
                                    </button>
                                    <button type="button" class="btn btn-facebook">
                                        <icon-brand-facebook-filled /> Iniciar sesión con Facebook
                                    </button>
                                </div>
                                <form @submit.prevent="submitRegisterForm">
                                    <div class="form-group">
                                        <label for="register_nombre">Nombre</label>
                                        <input type="text" class="form-control" id="register_nombre" v-model="register.nombre" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="register_apellido">Apellido</label>
                                        <input type="text" class="form-control" id="register_apellido" v-model="register.apellido" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="register_email">Correo electrónico</label>
                                        <input type="email" class="form-control" id="register_email" v-model="register.email" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="register_contraseña">Contraseña</label>
                                        <input type="password" class="form-control" id="register_contraseña" v-model="register.contraseña" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="register_telefono">Teléfono</label>
                                        <input type="tel" class="form-control" id="register_telefono" v-model="register.telefono" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="register_direccion">Dirección</label>
                                        <input type="text" class="form-control" id="register_direccion" v-model="register.direccion" required />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Registrarse</button>
                                </form>
                                <div class="text-center mt-3">
                                    <p>¿Ya estás registrado? <a href="#" @click.prevent="toggleForms">Inicia sesión</a></p>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Importa las funciones que necesitas de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { IconBrandGoogle } from '@tabler/icons-vue';
import { IconBrandFacebookFilled } from '@tabler/icons-vue';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA4je8Hj4YE7QdXc45JxFKMrIc5SA18d84",
    authDomain: "restaonline-77461.firebaseapp.com",
    projectId: "restaonline-77461",
    storageBucket: "restaonline-77461.appspot.com",
    messagingSenderId: "835150019775",
    appId: "1:835150019775:web:adfb916bd5c185d9cd9a0a"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default {
    data() {
        return {
            showRegisterForm: false,
            loginEmail: "",
            loginPassword: "",
            registerEmail: "",
            registerPassword: "",
        };
    },
    methods: {
        login() {
            console.log("Iniciando sesión con:", this.loginEmail, this.loginPassword);
            // Procesar inicio de sesión
        },
        register() {
            console.log("Registrando con:", this.registerEmail, this.registerPassword);
            // Procesar registro
        },
        toggleForms() {
            this.showRegisterForm = !this.showRegisterForm;
        },
        signInWithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log("Iniciando sesión con Google:", result);
                    // ...
                })
                .catch((error) => {
                    console.error("Error al iniciar sesión con Google:", error);
                });
        },
        signInWithFacebook() {
            const provider = new FacebookAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log("Iniciando sesión con Facebook:", result);
                    // ...
                })
                .catch((error) => {
                    console.error("Error al iniciar sesión con Facebook:", error);
                });
        },
        submitLoginForm() {
            //...
        },
        submitRegisterForm() {
            console.log("Datos de registro:", this.register);
            // Aquí puedes procesar el formulario de registro, por ejemplo, enviando los datos a la API
        },
    },
    components: {
        IconBrandGoogle,
        IconBrandFacebookFilled,
    },
};
</script>

<style scoped>
.form {
    padding: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.swap-cards-enter-active,
.swap-cards-leave-active {
    transition: all 0.5s;
    position: absolute;
    width: 100%;
}

.swap-cards-enter,
.swap-cards-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.btn-google,
.btn-facebook {
    margin-top: 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: white;
}

.btn-google {
    background-color: #4285f4;
}

.btn-google:hover {
    background-color: #2a74d6;
}

.btn-google img {
    width: 20px;
    height: 20px;
}

.btn-facebook {
    background-color: #1877f2;
}

.btn-facebook:hover {
    background-color: #1661c9;
}

.btn-facebook img {
    width: 20px;
    height: 20px;
}


</style>
