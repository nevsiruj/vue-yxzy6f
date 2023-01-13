<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ListUsuarios />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import ListUsuarios from './components/usuarios/views/ListUsuarios.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    ListUsuarios,
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
