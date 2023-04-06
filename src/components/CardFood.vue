<template>
    <div class="card text-bg-dark mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="card-text">{{ description }}</p>
                    <p class="card-text"><strong>{{ price }}</strong></p>
                </div>
            </div>
            <div class="col-md-4 d-flex align-items-stretch">
                <img :src="image" class="img-fluid rounded-end w-100 h-100" style="object-fit: cover;" :alt="description" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardFood",
    props: {
        title: String,
        description: {
            type: String,
            default: "No hay descripción",
        },
        image: {
            type: String,
            require: true,
        },
        price: String,
    },
};
</script>

<style scoped></style>
