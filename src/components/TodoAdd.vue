<template>
  <MDBBtn color="primary" v-on:click="showForm">{{ $t(`main.add`) }}</MDBBtn>
  <TodoForm ref="form" />
</template>

<script>
import { MDBBtn } from "mdb-vue-ui-kit";
import TodoForm from "./TodoForm.vue";

export default {
  name: "TodoAdd",
  components: {
    MDBBtn,
    TodoForm,
  },
  methods: {
    showForm() {
      this.$refs.form.show();
    },
  },
};
</script>
