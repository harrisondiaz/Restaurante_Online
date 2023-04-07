<template>
<!--<Navbar/>
  <div style="margin-top: 6em"/>

  <TableFood/>-->
  <PlatoCompleted :dish="dish"></PlatoCompleted>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FoodPhoto from "@/components/FoodPhoto.vue";
import TableFood from "@/components/TableFood.vue";
import CookieBanner from "@/components/CookieBanner.vue";

import PlatoCompleted from "@/components/PlatoCompleted.vue";
import Plate from "@/assets/breakfast.jpeg"
export default {
    name: "Home",
    components: {
        Navbar,
        FoodPhoto,
        TableFood,
        CookieBanner,PlatoCompleted
    },data() {
        return {
            dish: {
                name: "Pizza Margherita",
                imageUrl: Plate,
                description:
                    "Una deliciosa pizza Margherita hecha con tomate, mozzarella y albahaca fresca.",
                customizationOptions: [
                    { label: "Sin gluten", selected: false },
                    { label: "Extra queso", selected: false },
                    { label: "Cebolla", selected: false },
                ],
            },
        };
    },
}
</script>

<style scoped>
FoodPhoto{
    position: sticky;
    top: 1000px;
    left: 0;

}
</style>