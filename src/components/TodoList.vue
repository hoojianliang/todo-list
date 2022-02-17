<template>
  <MDBListGroup numbered>
    <Todo v-for="todo in todos" :key="todo.id" v-bind:todo="todo" />
  </MDBListGroup>
</template>

<script>
import { MDBListGroup } from "mdb-vue-ui-kit";
import Todo from "./Todo.vue";

export default {
  name: "TodoList",
  components: {
    MDBListGroup,
    Todo,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  mounted() {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.$store.commit("initTodo", data);
      })
      .catch((err) => console.error(err));
  },
};
</script>
