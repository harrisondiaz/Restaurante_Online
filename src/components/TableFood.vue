<template>
    <navbar address="Barbosa" ></navbar>
    <div class="main-content">

        <FoodPhoto/>
        <br />
        <div class="container">
            <div class="text-center mb-3">
                <button
                    v-for="(categoria, index) in categorias"
                    :key="index"
                    class="btn btn-dark me-2"
                    @click="irACategoria(categoria)"
                >
                    {{ categoria }}
                </button>
            </div>
            <div
                v-for="categoria in categorias"
                :key="categoria"
                :ref="`categoria-${categoria}`"
                class="categoria"
            >
                <h2 class="text-center mb-4">{{ categoria }}</h2>
                <div class="row">
                    <div
                        v-for="(item, index) in platillosPorCategoria(categoria)"
                        :key="index"
                        class="col-md-3 mb-3 d-flex align-items-stretch"
                    >
                        <CardFood
                            :title="item.nombre"
                            :description="item.descripcion"
                            :price="item.precio"
                            :image="item.imagen"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
import CardFood from "@/components/CardFood.vue";
import Breakfast from '@/assets/breakfast.jpeg';
import Lunch from '@/assets/Lunch.jpg';
import Dinner from '@/assets/Dinner.jpg';
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import FoodPhoto from "@/components/FoodPhoto.vue";
export default {
    name: "TableFood",
    components: { FoodPhoto, Navbar, Footer, CardFood },
    data() {
        return {
            platillos: [
                {
                    id: 1,
                    nombre: 'Huevos Rancheros',
                    descripcion: 'Huevos estrellados sobre tortilla con salsa ranchera picante.',
                    imagen: Breakfast,
                    precio: "$22500", // COP
                    categoria: 'DESAYUNO',
                    fecha_creacion: '2023-01-01 12:00:00',
                },
                {
                    id: 2,
                    nombre: 'Ensalada César',
                    descripcion: 'Ensalada fresca con lechuga romana, croutons, pollo a la parrilla y aderezo César.',
                    imagen: Lunch,
                    precio: "$35000", // COP
                    categoria: 'ALMUERZO',
                    fecha_creacion: '2023-01-01 12:00:00',
                },
                {
                    id: 3,
                    nombre: 'Spaghetti Carbonara',
                    descripcion: 'Pasta spaghetti con salsa carbonara cremosa, bacon y queso parmesano.',
                    imagen: Dinner,
                    precio: "$40000", // COP
                    categoria: 'CENA',
                    fecha_creacion: '2023-01-01 12:00:00',
                },
                {
                    id: 4,
                    nombre: 'Arepas Rellenas',
                    descripcion: 'Arepas rellenas de carne desmechada, queso y aguacate.',
                    imagen: Breakfast,
                    precio: "$20000", // COP
                    categoria: 'DESAYUNO',
                    fecha_creacion: '2023-01-01 12:00:00',
                },
                {
                    id: 5,
                    nombre: 'Sopa de Lentejas',
                    descripcion: 'Sopa de lentejas con zanahoria, papa, apio y cilantro.',
                    imagen: Lunch,
                    precio: "$18000", // COP
                    categoria: 'ALMUERZO',
                    fecha_creacion: '2023-01-01 12:00:00',
                },
                {
                    id: 6,
                    nombre: 'Pescado a la Plancha',
                    descripcion: 'Filete de pescado a la plancha con salsa de limón y guarnición de vegetales.',
                    imagen: Dinner,
                    precio: "$45000", // COP
                    categoria: 'CENA',
                    fecha_creacion: '2023-01-01 12:00:00',
                },
                {
                    id: 7,
                    nombre: 'Tostadas Francesas',
                    descripcion: 'Tostadas francesas con miel de maple y frutas frescas.',
                    imagen: Breakfast,
                    precio: "$23000", // COP
                    categoria: 'DESAYUNO',
                    fecha_creacion: '2023-01-01 12:00:00',
                },
                {
                    id: 8,
                    nombre: 'Wrap de Pollo',
                    descripcion: 'Wrap de pollo con lechuga, tomate, queso y aderezo ranch.',
                    imagen: Lunch,
                    precio: "$30000", // COP
                    categoria: 'ALMUERZO',
                    fecha_creacion: '2023-01-01 12:00:00',
                },
                {
                    id: 9,
                    nombre: 'Ceviche de Camarón',
                    descripcion: 'Ceviche de camarón con cebolla morada, cilantro, tomate y limón.',
                    imagen: Lunch,
                    precio: "$48000", // COP
                    categoria: 'ALMUERZO',
                    fecha_creacion: '2023-01-01 12:00:00',
                },
                {
                    id: 10,
                    nombre: 'Lomo Saltado',
                    descripcion: 'Tiras de lomo de res salteadas con cebolla, tomate, pimiento y salsa de soya, acompañadas de papas fritas y arroz.',
                    imagen: Dinner,
                    precio: "$52000", // COP
                    categoria: 'CENA',
                    fecha_creacion: '2023-01-01 12:00:00',
                },
            ],categoriaSeleccionada: "DESAYUNO" ,
            categorias: [
                "DESAYUNO",
                "ALMUERZO",
                "CENA"
            ],
        };
    },
    methods: {
        irACategoria(categoria) {
                    this.$refs[`categoria-${categoria}`][0].scrollIntoView({
                    behavior: "smooth",
                });

        },
        platillosPorCategoria(categoria) {
            return this.platillos.filter(
                (platillo) => platillo.categoria === categoria
            );
        },
    },
};
</script>

<style scoped>


</style>