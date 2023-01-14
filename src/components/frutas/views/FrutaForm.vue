<template>
  <div class="container">
    <h3 class="text-center">Fruta form</h3>
    <router-link to="/" class="text-right">Volver</router-link>
    <div class="card">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="nombre"
              v-model="fruta.nombre"
            />
          </div>
          <div class="form-group">
            <label for="color">Color</label>
            <input
              type="text"
              class="form-control"
              id="color"
              v-model="fruta.color"
            />
          </div>
          <div class="form-group">
            <label for="fechaVencimiento">Fecha de Vencimiento</label>
            <input
              type="date"
              class="form-control"
              id="fechaVencimiento"
              v-model="fruta.fechaVencimiento"
            />
          </div>
        </form>
        <div class="text-center">
          <button type="button" class="btn btn-primary" @click="submitForm">
            {{ modo === 'agregar' ? 'Agregar' : 'Editar' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrutaForm',
  props: {
    msg: String,
  },
  created() {
    this.getData();
  },
  data() {
    return {
      frutas: [],
    };
  },
  methods: {
    getData() {
      // frutaService.getFrutas().then((e) => (this.frutas = e));
    },
  },
};
</script>
