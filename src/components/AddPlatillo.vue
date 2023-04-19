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

                            <div class="form-group mb-3">
                                <label for="ingredientes" class="form-label">Ingredientes personalizados</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="ingredientes"
                                    v-model="nuevoIngrediente"
                                />
                                <button @click.prevent="agregarIngrediente" class="btn btn-info mt-2">Agregar ingrediente</button>
                                <ul class="list-group mt-2">
                                    <li
                                        v-for="(ingrediente, index) in platillo.ingredientes"
                                        :key="index"
                                        class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        {{ ingrediente }}
                                        <button @click.prevent="eliminarIngrediente(index)" class="btn btn-danger btn-sm">Eliminar</button>
                                    </li>
                                </ul>
                            </div>

                            <div class="form-group mb-3">
                                <label for="bebidas" class="form-label">Bebidas personalizadas</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="bebidas"
                                    v-model="nuevaBebida"
                                />
                                <button @click.prevent="agregarBebida" class="btn btn-info mt-2">Agregar bebida</button>
                                <ul class="list-group mt-2">
                                    <li
                                        v-for="(bebida, index) in platillo.bebidas"
                                        :key="index"
                                        class="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        {{ bebida }}
                                        <button @click.prevent="eliminarBebida(index)" class="btn btn-danger btn-sm">Eliminar</button>
                                    </li>
                                </ul>
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
                ingredientes: [],
                bebidas: [],
            },
            categorias: ["DESAYUNO", "ALMUERZO", "CENA"],
            nuevoIngrediente: "",
            nuevaBebida: "",
        };
    },
    methods: {
        onFileSelected(event) {
            this.platillo.imagen = event.target.files[0];
        },
        agregarIngrediente() {
            if (this.nuevoIngrediente.trim() !== "") {
                this.platillo.ingredientes.push(this.nuevoIngrediente);
                this.nuevoIngrediente = "";
            }
        },
        eliminarIngrediente(index) {
            this.platillo.ingredientes.splice(index, 1);
        },
        agregarBebida() {
            if (this.nuevaBebida.trim() !== "") {
                this.platillo.bebidas.push(this.nuevaBebida);
                this.nuevaBebida = "";
            }
        },
        eliminarBebida(index) {
            this.platillo.bebidas.splice(index, 1);
        },
        async submitForm() {
            // Aquí puedes agregar la lógica para guardar el platillo en la base de datos
        },
    },
};
</script>


<style scoped>
.card {
    font-size: 1.1rem;
}
</style>
