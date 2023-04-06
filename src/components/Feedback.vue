<template>
    <div class="rating-box">
        <h1>¿Calificas nuestro servicio?</h1>
        <p>Danos una calificación rápida para que sepamos si te gusta.</p>
        <div class="stars">
            <i
                    v-for="(star, index) in 5"
                    :key="index"
                    class="bx bxs-star"
                    :class="{ active: rating >= index + 1 }"
                    @click="setRating(index + 1)"
            ></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rating: 0,
        };
    },
    methods: {
        setRating(value) {
            this.rating = value;
        },
    },
};
</script>

<style>
:root {
    --black: #727478;
    --grey: #7f8184;
    --yellow: #edc932;
    --gradient: linear-gradient(45deg, #8b8acc, #bc8bcd);
}

body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient);
    backdrop-filter: blur(100px);
}

.rating-box {
    width: 470px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 70px 50px;
    border-radius: 40px;
    background: linear-gradient(-60deg, #ffffff90, #ffffffff);
    border: solid 5px transparent;
    background-clip: padding-box;
    box-shadow: 0 10px 10px rgba(46, 54, 68, .1);
}

.rating-box h1 {
    font-size: 25px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--black);
    text-transform: capitalize;
    text-align: center;
}

.rating-box p {
    font-size: 15px;
    color: var(--grey);
    margin-bottom: 40px;
    text-align: center;
}

.rating-box .stars {
    display: flex;
    align-items: center;
    gap: 15px;
}

.rating-box .stars i {
    color: var(--grey);
    font-size: 40px;
    cursor: pointer;
    transition: color .2s ease;
}

.rating-box .stars i.active {
    color: var(--yellow);
}
</style>
