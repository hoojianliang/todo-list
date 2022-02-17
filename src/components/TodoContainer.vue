<template>
  <MDBContainer class="text-center">
    <div class="todo-container">
      <div>
        <h1 class="title">{{ $t("main.title") }}</h1>
        <p class="title-description">{{ $t("main.title_description") }}</p>
        <div class="d-flex flex-row-reverse">
          <div class="p-2"><TodoAdd /></div>
          <div class="p-2"><LocaleSwitcher /></div>
        </div>
        <TodoList />
      </div>
    </div>
  </MDBContainer>
</template>

<script>
import { MDBContainer } from "mdb-vue-ui-kit";
import LocaleSwitcher from "./LocaleSwitcher.vue";
import TodoAdd from "./TodoAdd.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "TodoContainer",
  components: {
    MDBContainer,
    LocaleSwitcher,
    TodoAdd,
    TodoList,
  },
};
</script>
