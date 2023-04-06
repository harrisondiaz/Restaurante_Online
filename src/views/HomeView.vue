<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import CardFood from "@/components/CardFood.vue";
import TableFood from "@/components/TableFood.vue";
import AddPlatillo from "@/components/AddPlatillo.vue";
import ShoppingBTN from "@/components/ShoppingBTN.vue";
import LogIn from "@/components/LogIn.vue";
import FoodPhoto from "@/components/FoodPhoto.vue";
import Feedback from "@/components/Feedback.vue";
</script>

<template>
  <div style="margin: 9em">
      <navbar address="Barbosa" ></navbar>
      <div style="position: relative;margin-top: 170%">
      <FoodPhoto/>
      <table-food/>
      </div>
  </div>
</template>
