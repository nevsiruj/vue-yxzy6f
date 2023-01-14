<template>
  <h3>Lista de Frutas</h3>

  <router-link to="/form">Agregar Fruta</router-link>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Color</th>
                  <th>Fecha de Vencimiento</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="fruta in frutas" :key="fruta.id">
                  <td>{{ fruta.id }}</td>
                  <td>{{ fruta.nombre }}</td>
                  <td>{{ fruta.color }}</td>
                  <td>{{ fruta.fechaVencimiento }}</td>
                  <td>
                    <i
                      class="bi bi-x-square"
                      aria-hidden="true"
                      @click="eliminarUsuario(fruta.id)"
                    ></i>

                    <i
                      class="fa fa-edit"
                      aria-hidden="true"
                      @click="editarUsuario(fruta.id)"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrutaService from '../services/fruta.service.js';
const frutaService = new FrutaService();

export default {
  name: 'ListFrutas',
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
      frutaService.getFrutas().then((e) => (this.frutas = e));
    },
  },
};
</script>
