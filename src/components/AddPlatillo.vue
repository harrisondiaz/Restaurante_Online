<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-bg-dark">
                    <div class="card-header text-center bg-dark text-light">
                        <h2>Agregar nuevo platillo</h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submitForm">
                            <div class="form-group mb-3">
                                <label class="form-label" for="nombre">Nombre del platillo</label>
                                <input type="text" class="form-control" id="nombre" v-model="platillo.nombre" required />
                            </div>

                            <div class="form-group mb-3">
                                <label for="descripcion" class="form-label">Descripción</label>
                                <textarea class="form-control" id="descripcion" rows="3" v-model="platillo.descripcion" required></textarea>
                            </div>

                            <div class="form-group mb-3">
                                <label for="imagen" class="form-label">Imagen</label>
                                <input type="file" class="form-control" id="imagen" accept="image/*" @change="onFileSelected" required />
                            </div>

                            <div class="form-group mb-3">
                                <label for="precio" class="form-label">Precio</label>
                                <input type="number" class="form-control" id="precio" min="0" step="0.01" v-model="platillo.precio" required />
                            </div>

                            <div class="form-group mb-3">
                                <label for="categoria" class="form-label">Categoría</label>
                                <select class="form-control" id="categoria" v-model="platillo.categoria" required>
                                    <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
                                </select>
                            </div>

                            <button type="submit" class="btn btn-dark border">Agregar platillo</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            platillo: {
                nombre: "",
                descripcion: "",
                imagen: null,
                precio: "",
                categoria: null,
            },
            categorias: ["DESAYUNO", "ALMUERZO", "CENA"],
        };
    },
    methods: {
        submitForm() {
            console.log("Datos del platillo:", this.platillo);
            // Aquí puedes procesar el formulario, por ejemplo, enviando los datos a la API
        },
        onFileSelected(event) {
            this.platillo.imagen = event.target.files[0];
        },
    },
};
</script>

<style scoped>
.card {
    font-size: 1.1rem;
}
</style>
