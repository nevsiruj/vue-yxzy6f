<template>
  <h3>Fruta form</h3>
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
