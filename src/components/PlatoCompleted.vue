<template>
    <div class="dish-container">
        <h2>{{ dish.name }}</h2>
        <img :src="dish.imageUrl" alt="Dish Image" class="dish-image" />
        <p>{{ dish.description }}</p>
        <h3>Opciones personalizables:</h3>
        <ul>
            <li v-for="(option, index) in dish.customizationOptions" :key="index">
                <input
                        type="checkbox"
                        :id="option.label"
                        v-model="option.selected"
                />
                <label :for="option.label">{{ option.label }}</label>
            </li>
        </ul>
        <div class="buttons">
            <button @click="addToCart">Añadir al carrito</button>
            <button @click="buyNow">Comprar ahora</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dish: {
            type: Object,
            required: true,
        },
    },
    methods: {
        addToCart() {
            // Añadir el platillo al carrito
            console.log("Añadir al carrito:", this.dish);
        },
        buyNow() {
            // Comprar el platillo directamente
            console.log("Comprar ahora:", this.dish);
        },
    },
};
</script>

<style scoped>
.dish-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.dish-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 1rem;
}

.buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
}

button:hover {
    background-color: #0056b3;
}
</style>
