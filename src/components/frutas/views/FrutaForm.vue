<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

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
        <button type="button" class="btn btn-primary mt-3" @click="submitForm">
          {{ modo === 'agregar' ? 'Agregar' : 'Editar' }}
        </button>
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
      fruta: {},
      modo: 'agregar',
    };
  },
  methods: {
    getData() {
      // frutaService.getFrutas().then((e) => (this.frutas = e));
    },
  },
};
</script>
