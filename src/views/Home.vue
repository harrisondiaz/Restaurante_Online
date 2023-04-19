<template>
<Navbar/>
  <div style="margin-top: 6em"/>

 <TableFood />
  <!--<AddPlatillo/>-->

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FoodPhoto from "@/components/FoodPhoto.vue";
import TableFood from "@/components/TableFood.vue";
import CookieBanner from "@/components/CookieBanner.vue";
import AddPlatillo from "@/components/AddPlatillo.vue";
import PlatoCompleted from "@/components/PlatoCompleted.vue";
import Plate from "@/assets/breakfast.jpeg"
export default {
    name: "Home",
    components: {
        Navbar,
        FoodPhoto,
        TableFood,
        CookieBanner,PlatoCompleted,AddPlatillo
    },data() {
        return {
            dish: {
                name: "Pizza Margherita",
                imageUrl: Plate,
                description:
                    "Una deliciosa pizza Margherita hecha con tomate, mozzarella y albahaca fresca.",
                price: 10.000,
                customizationOptions: [
                    { label: "Sin gluten", selected: false },
                    { label: "Extra queso", selected: false },
                    { label: "Cebolla", selected: false },
                ],
                beverages: [
                    { label: "Coca Cola", selected: false },
                    { label: "Sprite", selected: false },
                    { label: "Agua mineral", selected: false },
                ],
            },


        };
    },methods: {

    }
}
</script>

<style scoped>
FoodPhoto{
    position: sticky;
    top: 1000px;
    left: 0;

}
</style>