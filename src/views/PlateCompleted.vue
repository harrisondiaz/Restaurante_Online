<template>
  <Navbar address="Barbosa"></Navbar>
  <div style="margin-top: 10%"/>
  <PlatoCompleted :dish="item"></PlatoCompleted>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import PlatoCompleted from "@/components/PlatoCompleted.vue";
import Plate from "@/assets/breakfast.jpeg";
export default {
    name: "PlateCompleted",
    components: { Navbar, PlatoCompleted },
    props: {
        id: {
            type: [String, Number],
            required: true,
        },
    },
    computed: {
        dish() {
            // Reemplaza la siguiente línea con la forma correcta de acceder a la lista de platillos en tu aplicación
            const dishes = this.$store.state.dishes;

            // Busca el platillo con el id proporcionado
            const foundDish = dishes.find((dish) => dish.id === parseInt(this.id, 10));

            // Agrega console.log para ayudarte a identificar el problema
            console.log("Lista de platillos:", dishes);
            console.log("ID del platillo:", this.id);
            console.log("Platillo encontrado:", foundDish);

            return foundDish;
        },
    },



};


</script>

<style scoped>

</style>