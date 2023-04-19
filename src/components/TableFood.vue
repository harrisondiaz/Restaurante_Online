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
                            :dish="item"
                            @click="viewDish(item)"
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
                    id: 6,
                    name: "Risotto de Hongos",
                    imageUrl: Dinner,
                    description: "Delicioso risotto de arroz cremoso con hongos, queso parmesano y perejil.",
                    price: "$28.000",
                    category: "CENA",
                    customizationOptions: [
                        { label: "Sin queso", selected: false },
                        { label: "Extra hongos", selected: false },
                        { label: "Ajo", selected: false },
                    ],
                    beverages: [
                        { label: "Vino tinto", selected: false },
                        { label: "Agua mineral", selected: false },
                        { label: "Cerveza", selected: false },
                    ],
                },
                {
                    id: 7,
                    name: "Avena con Frutas",
                    imageUrl: Breakfast,
                    description: "Avena cocida con leche, trozos de manzana, plátano y arándanos.",
                    price: "$15.000",
                    category: "DESAYUNO",
                    customizationOptions: [
                        { label: "Sin manzana", selected: false },
                        { label: "Extra plátano", selected: false },
                        { label: "Leche de almendras", selected: false },
                    ],
                    beverages: [
                        { label: "Café", selected: false },
                        { label: "Jugo de naranja", selected: false },
                        { label: "Agua mineral", selected: false },
                    ],
                },
                {
                    id: 8,
                    name: "Wrap de Pollo y Verduras",
                    imageUrl: Lunch,
                    description: "Wrap de pollo a la parrilla, lechuga, tomate, cebolla y aderezo de yogur.",
                    price: "$20.000",
                    category: "ALMUERZO",
                    customizationOptions: [
                        { label: "Sin pollo", selected: false },
                        { label: "Extra verduras", selected: false },
                        { label: "Aderezo picante", selected: false },
                    ],
                    beverages: [
                        { label: "Coca Cola", selected: false },
                        { label: "Sprite", selected: false },
                        { label: "Agua mineral", selected: false },
                    ],
                },
                {
                    id: 9,
                    name: "Pasta Carbonara",
                    imageUrl: Dinner,
                    description: "Pasta con salsa carbonara a base de huevo, queso parmesano, panceta y pimienta negra.",
                    price: "$27.000",
                    category: "Cena",
                    customizationOptions: [
                        { label: "Sin panceta", selected: false },
                        { label: "Extra queso", selected: false },
                        { label: "Espárragos", selected: false },
                    ],
                    beverages: [
                        { label: "Vino tinto", selected: false },
                        { label: "Agua mineral", selected: false },
                        { label: "Cerveza", selected: false },
                    ],
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
                (platillo) => platillo.category === categoria
            );
        },
        viewDish(item) {
                this.$router.push({ name: "platillo", params: { id: item.id } });

        },

    },
};
</script>

<style scoped>


</style>