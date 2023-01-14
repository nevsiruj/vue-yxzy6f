<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <ListUsuarios /> -->
    <!-- <ListFrutas /> -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import ListUsuarios from './components/usuarios/views/ListUsuarios.vue';
import ListFrutas from './components/frutas/views/ListFrutas.vue';
import FormFruta from './components/frutas/views/ListFrutas.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ListUsuarios,
    ListFrutas,
    FormFruta,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
