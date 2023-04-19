<template>
<button class="btn-shoping">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
        <path d="M17 17h-11v-14h-2"></path>
        <path d="M6 5l14 1l-1 7h-13"></path>
    </svg>
    <span>Comprar Ahora</span>
</button>
</template>

<script>
import { IconShoppingCart } from '@tabler/icons-vue';
export default {
    name: "ShoppingBTN",
    components: {
        IconShoppingCart
    }
}
</script>

<style scoped>
.btn-shoping{
    position: relative;
    padding: 10px;
    border: none;
    background-color: #0099ff;
    color : white;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
}

.btn-shoping svg{
    margin-right:0 10px;
}

.btn-shoping:hover svg{
    transform: translateX(3em);
    transition: transform .7s;
}

.btn-shoping:hover{
    transform: scale(1.1);
    transition: transform .7s;
}

.btn-shoping:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #229308;
    opacity: 1;
    transition: width 0.5s ease-in-out;
    border-radius: 5px;
}

.btn-shoping:hover:before{
    width: 100%;
}
</style>